import mongoose  from "mongoose";

const storySchema = new mongoose.Schema({
  img: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, required: true }
});

const Story = mongoose.model("Story", storySchema);

export default Story;
