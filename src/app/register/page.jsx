import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div className="container mx-auto">
      <div className=" h-[80vh] flex justify-center items-center ">
        <form className="card-body max-w-md border shadow border-gray-100 rounded-2xl">
          <h2 className="font-bold text-3xl text-center mb-12">
            Recitation Account
          </h2>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="Text"
              className="input w-full"
              placeholder="Your full name"
            />
            <label className="label ">Photo URL</label>
            <input
              type="Text"
              className="input w-full"
              placeholder="Photo URL"
            />
            <label className="label">Email</label>
            <input type="email" className="input w-full" placeholder="Email" />
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
            />
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="my-3 text-sm text-center">
              I have an account?
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
