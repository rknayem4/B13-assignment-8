"use client";
import Image from "next/image";
import React from "react";
import { authClient } from "../lib/auth-client";
import Loading from "@/Components/Loading";
import Model from "@/Components/Model";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  // console.log(user, isPending);
  return (
    <div className="h-[60vh] container mx-auto flex justify-center items-center ">
      {isPending ? (
        <Loading></Loading>
      ) : (
        <div className="border border-gray-100  shadow p-12 text-center rounded-2xl">
          <Image
            className="rounded-full mx-auto"
            src={user?.image}
            alt="logo"
            width={250}     
            height={250  }
          ></Image>
          <h2 className="text-3xl font-semibold my-5">{user?.name}</h2>
          <p className="my-4">{user?.email}</p>
          {/* <button className="btn bg-[#2A2B2A] w-full text-white rounded-full">
          </button> */}
            <Model></Model>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
