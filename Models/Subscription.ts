import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique:true },
  },
  { timestamps: true }
);

export default mongoose.models.Subscription || mongoose.model("Subscription", SubscriptionSchema);
