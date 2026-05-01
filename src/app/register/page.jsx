"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { authClient } from "../lib/auth-client";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleReg = async (data) => {
    const { name, photo, email, password } = data;
    const { data: res, error } = await authClient.signUp.email({
      name,
      image: photo,
      email,
      password,
      callbackURL: "/",
    });
    {
      res
        ? toast.success("Registration successful")
        : toast.error(`${error.message}`);
    }
    console.log(res, error);
  };
   const handleGoogleUp = async () => {
      await authClient.signIn.social({
        provider: "google",
      });
    };
  return (
    <div className="container mx-auto h-[80vh] flex justify-center items-center">
      <div className=" card-body max-w-md border shadow border-gray-100 rounded-2xl ">
        <form onSubmit={handleSubmit(handleReg)} className="">
          <h2 className="font-bold text-3xl text-center mb-12">
            Recitation Account
          </h2>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              {...register("name", { required: "Name field is required" })}
              type="Text"
              className="input w-full"
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
            <label className="label ">Photo URL</label>
            <input
              {...register("photo", {
                required: "Photo URL field is required",
              })}
              type="Text"
              className="input w-full"
              placeholder="Photo URL"
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
            <label className="label">Email</label>
            <input
              {...register("email", { required: "Email field is required" })}
              type="email"
              className="input w-full"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <label className="label">Password</label>
            <input
              {...register("password", {
                required: "Password field is required",
              })}
              type="password"
              className="input w-full"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="my-3 text-sm text-center">
              I already have an account!
              <Link href="/login" className="text-blue-600">
                {" "}
                Login
              </Link>
            </p>
          </fieldset>
          <div className="divider">OR</div>
        </form>
        <button onClick={handleGoogleUp} className="btn btn-outline w-full rounded-full">
          <FcGoogle /> Connect with Google
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
