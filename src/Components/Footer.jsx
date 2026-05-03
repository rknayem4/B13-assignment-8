import Link from "next/link";
import React from "react";
import { BiCurrentLocation, BiLocationPlus } from "react-icons/bi";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { LuOctagon } from "react-icons/lu";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className=" rounded bg-gray-50 ">
        <div className=" py-12 container p-5 my-5  flex max-md:flex-col justify-around items-start mx-auto">
          <nav className="flex flex-col gap-5 mb-12 ">
            <h5 className="text-xl font-bold">Company</h5>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Outlet Location</a>
          </nav>
          <nav className="flex flex-col gap-6 mb-12">
              <h5 className="text-xl font-bold">Social </h5>
              <Link
                className=" flex items-center gap-5 bg-gray-100 px-4 py-1 rounded-2xl link link-hover "
                href="https://www.facebook.com/rknayem4"
              >
                <FaFacebookF />
                Facebook
              </Link>
              <Link
                className=" flex items-center gap-5 bg-gray-100 px-4 py-1 rounded-2xl link link-hover"
                href="https://bd.linkedin.com/in/rknayem"
              >
                <FaLinkedinIn />
                Linkedin
              </Link>
              <Link
                className=" flex items-center gap-5 bg-gray-100 px-4 py-1 rounded-2xl link link-hover"
                href="https://github.com/rknayem4"
              >
                <FaGithub />
                GitHub
              </Link>
          </nav>
          <div className="">
            <h5 className="text-xl font-bold"> Contact Us</h5>
            <ul>
              <li className=" flex items-center gap-3 mt-4">
                <IoLocationSharp className="text-2xl" />
                <div>
                  <span className="font-bold  flex items-center gap-3">
                    Location{" "}
                  </span>
                  <span className="">East Kazipara, Kafrul, Dhaka-1216.</span>
                </div>
              </li>
              <li className=" flex items-center gap-3 mt-4">
                <FaPhoneAlt  className="text-xl" />
                <div>
                  <span className="font-bold flex items-center gap-3">
                    Location{" "}
                  </span>
                  <span className="">+8801 6318 ****</span>
                </div>
              </li>
              <li className=" flex items-center gap-3 mt-4">
                <MdEmail className="text-2xl" />
                <div>
                  <span className="font-bold flex items-center gap-3">
                    Location{" "}
                  </span>
                  <span className="">myemil@gmail.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <aside className="bg-[#2A2B2A] py-6 w-full">
          <p className="text-white text-center">
            Copyright © {new Date().getFullYear()} - All right reserved by RK
            Ceramics Ltd.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
