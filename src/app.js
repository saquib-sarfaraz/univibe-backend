import express from 'express';
import mongoose from 'mongoose';
import { Server } from "socket.io";
import { createServer } from "node:http";
import cors from 'cors';
import dotenv from 'dotenv';
import UserRoutes from './routes/userRoutes.js';
import PostRoutes from './routes/postRoutes.js';
import StoryRoutes from './routes/storyRoutes.js';


dotenv.config();

const app = express();
const server = createServer(app);
const router = express.Router();
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
   credentials: true
  }
  
});


app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use('/users', UserRoutes);
app.use('/user/posts', PostRoutes);
app.use('/user/stories', StoryRoutes);




app.get('/', (req, res) => {
  res.send('Hello World!');
});



const start = async () => {
  const connectionDb = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MONGO CONNECTED DB HOST: ${connectionDb.connection.host}`);
  
  
  server.listen(app.get("port"), () => {
    console.log("LISTENIN ON PORT 8000")
  });
}

router.get('/', (req, res) => {
  res.json({ message: "User route is working!" });
});
export default router;
start();

