import React, { useEffect, useState } from "react";
import axios from "axios"
// import list from "../../../data/booksData.json";
import BookCard from "../cards/BookCard";
import { Link } from "react-router-dom";

function Course() {

  const [book, setBook] = useState([])
  
  useEffect(() =>{
    const getBook = async () => {
      try {
        const res = await axios.get("https://book-store-app-api-seven.vercel.app/book");
        console.log(res.data);
        setBook(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getBook()
  }, [])

  return (
    <>
      <div className="max-h-fit max-w-screen-2xl mx-auto container md:px-20 px-4 relative">
        <div className="pt-28 text-center">
          <h1 className="text-2xl md:text-4xl ">
            We're Delighted to have you{" "}
            <span className="text-pink-500">Here ;)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae amet
            deleniti odit, dicta impedit officia maxime eveniet non laboriosam
            officiis quia voluptatum expedita quidem ea sequi omnis rerum?
            Cupiditate, repellat!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 hover:bg-pink-700 duration-300 text-white px-4 py-2 rounded-md">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 relative">
          {book.map((item) => (
            <BookCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
