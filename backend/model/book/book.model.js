import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  name:String,
  title:String,
  category:String,
  image:String,
  price:Number
})

const Book = mongoose.model("Book", bookSchema)

export default Book;