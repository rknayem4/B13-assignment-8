"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { authClient } from "../lib/auth-client";

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
    console.log(res, error);
  };
  return (
    <div className="container mx-auto">
      <div className=" h-[80vh] flex justify-center items-center ">
        <form
          onSubmit={handleSubmit(handleReg)}
          className="card-body max-w-md border shadow border-gray-100 rounded-2xl"
        >
          <h2 className="font-bold text-3xl text-center mb-12">
            Recitation Account
          </h2>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              {...register("name")}
              type="Text"
              className="input w-full"
              placeholder="Your full name"
            />
            <label className="label ">Photo URL</label>
            <input
              {...register("photo")}
              type="Text"
              className="input w-full"
              placeholder="Photo URL"
            />
            <label className="label">Email</label>
            <input
              {...register("email")}
              type="email"
              className="input w-full"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              {...register("password")}
              type="password"
              className="input w-full"
              placeholder="Password"
            />
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
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
