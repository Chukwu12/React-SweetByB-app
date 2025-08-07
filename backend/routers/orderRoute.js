import express from 'express'
import { placeOrder } from '../controllers/orderController.js'
import { ensureAuth } from '../middleware/auth.js';

const orderRouter = express.Router();

orderRouter.post("/place", ensureAuth,placeOrder);

export default orderRouter;