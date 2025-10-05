import express from "express";
import multer from "multer";
import { createStory, getStories } from "../controllers/story.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("img"), createStory);
router.get("/", getStories);

export default router;