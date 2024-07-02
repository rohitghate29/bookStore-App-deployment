import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors"
import path from "path"
const app = express()

app.use(cors())
app.use(express.json())
dotenv.config();

const mogoDbURI = process.env.MONGODBURI
const PORT = process.env.PORT || 4000

// connect to db
try {
  mongoose.connect(mogoDbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("Connected to mongodb");
} catch (error) {
  console.log("error: ", error);
}

// defining route
app.use("/book", bookRoute)
app.use("/user", userRoute)

// for deployment

if(process.env.NODE_ENV === "production") {
  const dirPath = path.resolve();
  app.use(express.static("frontend/dist"));
  app.get("*", (req,res) => {
    res.sendFile(path.resolve(dirPath, "frontend", "dist", "index.html"))
  })
}

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})