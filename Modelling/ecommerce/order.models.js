import mongoose from "mongoose";

const orderitemschema = mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const addressschema = mongoose.Schema({
  pincode: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  lane: {
    type: String,
    required: true,
  },
});

const orderschema = new mongoose.Schema(
  {
    orderprice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderitems: {
      type: [orderitemschema],
    },
    address: {
      type: [addressschema],
    },
    status: {
      type: String,
      enum: ["CANCELLED", "PENDING", "DELIVERED"], // MUST CHOOSE FROM THESE OPTION
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderschema);
