import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

function Contact() {
  const navigate = useNavigate()
  const {
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  
  return (
    <>
    <Navbar />
      <div className="min-h-screen w-screen flex items-center justify-center">
        <div className="w-full md:w-1/2 md:h1/2">
          <div className="modal-box dark:bg-slate-900 dark:text-white border">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => navigate("/")}
              >
                ✕
              </button>
              <h3 className="font-bold text-2xl my-2 text-center">
                Contact US
              </h3>
              <div className="my-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your name"
                  className="w-96 px-3 py-2 my-1 outline-none rounded border dark:bg-slate-900 dark:text-white"
                />
                <br />
              </div>
              <div className="my-2">
                <span>Email</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your email"
                  className="w-96 px-3 py-2 my-1 outline-none rounded border dark:bg-slate-900 dark:text-white"
                />
                <br />
              </div>
              <div className="my-2">
                <span>Message</span>
                <br />
                <textarea
                  rows="4"
                  cols="50"
                  className="dark:bg-slate-900 dark:text-white border p-2"
                  placeholder="Enter message"
                ></textarea>
                <br />
              </div>
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact