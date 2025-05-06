import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";


//getway initialzation


// placing orders using COD
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, { cartData: {} });
        res.json({ success: true, message: "Order placed successfully" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

//placing orders using stripe method
const placeOrderStripe = async (req, res) => {
    const { userId, items, amount, address, paymentMethod } = req.body;
    const order = new orderModel({
        userId,
        items,
        amount,
        address,
        paymentMethod,
        date: Date.now()
    });

    try {
        await order.save();
        res.status(200).json({ message: "Order placed successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error placing order" });
    }
}

// placing orders using Razorpay method
const placeOrderRazorpay = async (req, res) => {
    const { userId, items, amount, address, paymentMethod } = req.body;
    const order = new orderModel({
        userId,
        items,
        amount,
        address,
        paymentMethod,
        date: Date.now()
    });

    try {
        await order.save();
        res.status(200).json({ message: "Order placed successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error placing order" });
    }
}

//display orders in the admin panel
const allOrders = async (req, res) => {
    try {
        
        const orders = await orderModel.find({});
        res.json({success: true, orders});

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// user order data for frontend
const userOrders = async (req, res) => {
    try {
        
        const {userId} = req.body;

        const orders = await orderModel.find({userId});
        res.json({success: true, orders});

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// update order status from admin panel
const updateStatus = async (req, res) => {
    try {
        
        const {orderId, status} = req.body;
        await orderModel.findByIdAndUpdate(orderId, {status});
        res.json({success: true, message: "Order status updated successfully"});

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus };