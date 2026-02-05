import express from 'express'
import { placeOrder } from '../controllers/orderController.js'
// import { ensureAuth } from '../middleware/auth.js';

const orderRouter = express.Router();

// ✅ Allow CORS preflight for this route
orderRouter.options("/place", (req, res) => {
    res.sendStatus(200);
  });

orderRouter.post("/place",placeOrder);

export default orderRouter;