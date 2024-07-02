import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();

  useEffect(() => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.showModal();
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("User created successfully");
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log("Error " + err);
          toast.error("Error " + err.response.data.message);
        }
      });
  };

  const handleSignup = () => {
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 500);
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <dialog
          id="my_modal_3"
          className="modal dark:bg-slate-800 dark:text-white"
        >
          <div className="modal-box border dark:bg-slate-900 dark:text-white">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg my-2 text-center">Signup</h3>
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your name"
                className="w-96 px-3 py-2 my-1 outline-none rounded border dark:bg-slate-900 dark:text-white"
                {...register("fullname", { required: true })}
              />
              <br />
              {errors.fullname && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
              <br />
              <span>Email</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your email"
                className="w-96 px-3 py-2 my-1 outline-none rounded border dark:bg-slate-900 dark:text-white"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
              <br />
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter Your password"
                className="w-96 px-3 py-2 my-1 outline-none rounded border dark:bg-slate-900 dark:text-white"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
              <br />
              <div className="flex justify-around mt-4">
                <button
                  className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-700 duration-300"
                  onClick={handleSignup}
                >
                  Signup
                </button>
                <p>
                  Have account?{" "}
                  <Link
                    to="/"
                    className="text-blue-500 underline cursor-pointer"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Signup;
