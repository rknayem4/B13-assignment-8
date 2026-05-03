"use client";
import React from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/app/lib/auth-client";
import { IoIosLogOut } from "react-icons/io";

const NavBar = () => {
  const link = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/all-tiles">All Tiles</NavLink>
      </li>
      <li>
        <NavLink href="/profile"> My Profile</NavLink>
      </li>
    </>
  );
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  // console.log(user, isPending);
  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-30">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link href="/">
            {" "}
            <Image
              src="/logo-f.svg"
              alt="logo"
              width={150}
              height={120}
            ></Image>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-2 items-center">
              <p className="hidden lg:inline"> Hello ! {user.name}</p>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    {user.image ? (
                      <Image
                        src={user?.image}
                        alt="logo"
                        width={150}
                        height={120}
                      ></Image>
                    ) : (
                      <Image
                        src="/image/user.jpg"
                        alt="logo"
                        width={150}
                        height={120}
                      ></Image>
                    )}
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">{user.name}</a>
                  </li>
                  <li>
                    <Link href="/profile">Settings</Link>
                  </li>
                  <li onClick={async () => await authClient.signOut()}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
              <span
                onClick={async () => await authClient.signOut()}
                className="btn btn-ganger lg:flex justify-center items-center rounded-full hidden text-2xl"
              >
                <IoIosLogOut />
              </span>
            </div>
          ) : (
            <Link href="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
