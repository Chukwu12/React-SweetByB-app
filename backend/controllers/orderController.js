import mongoose from "mongoose";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";



const placeOrder = async (req, res) => {
  // Initialize Stripe with the secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const frontend_url = process.env.FRONTEND_URL || "http://localhost:5173";

  try {
    const { userId, items, amount, address } = req.body;

    // Validate input
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Items are required and should be an array",
      });
    }

    // Validate userId - store null if invalid or missing
    const validUserId = userId && mongoose.Types.ObjectId.isValid(userId) ? userId : null;

    // Create new order
    const newOrder = new orderModel({
      userId: validUserId,
      items,
      amount,
      address,
      status: "Food Processing",
      payment: false,
      date: new Date(),
    });

    console.log("Request body:", req.body);

    await newOrder.save();

    // Clear user's cart only if valid userId
    if (validUserId) {
      await userModel.findByIdAndUpdate(validUserId, { cartData: {} });
    }

    // Prepare Stripe line items
    const line_items = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
           unit_amount: Math.round(item.minPrice * 100),  // Convert to paise
      },
      quantity: item.quantity,
    }));

    // Add delivery fee line item ($2)
    line_items.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 200,
      },
      quantity: 1,
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'], // explicitly specify
      line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    console.log("Order saved:", newOrder);
    console.log("Stripe session created:", session.id);
    console.log("Line items sent to Stripe:", line_items);


    res.json({ success: true, session_url: session.url });

  } catch (error) {
    console.error("Error placing order:", error);

    res.status(500).json({
  success: false,
  message: 'An error occurred while processing your order. Please try again later.'
});
  }
};

export { placeOrder };
