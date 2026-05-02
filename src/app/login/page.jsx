"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { authClient } from "../lib/auth-client";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";



const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleLogin = async (data) => {
    const { email, password } = data;
    const { data: res, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });
    {
      res ? toast.success("Login successful") : toast.error(`${error.message}`);
    }
    // toast.success()
    console.log(res, error);
  };
  const handleGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="container mx-auto  h-[80vh] flex justify-center items-center ">
      <div className="card-body max-w-md border shadow border-gray-100 rounded-2xl">
        <form onSubmit={handleSubmit(handleLogin)}>
          <h2 className="font-bold text-3xl text-center mb-12">
            Login with account
          </h2>
          <fieldset className="fieldset">
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
              Dont have an account?
              <Link href="/register" className="text-blue-600">
                {" "}
                Registration
              </Link>
            </p>
          </fieldset>
          <div className="divider">OR</div>
        </form>
        <button onClick={handleGoogle} className="btn btn-outline w-full rounded-full">
          <FcGoogle /> Connect with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
