import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Outlet Location</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link className="text-2xl" href="https://www.facebook.com/rknayem4">
              <FaFacebookF />
            </Link>
            <Link
              className="text-2xl"
              href="https://bd.linkedin.com/in/rknayem"
            >
              <FaLinkedinIn />
            </Link>
            <Link className="text-2xl" href="https://github.com/rknayem4">
              <FaGithub />
            </Link>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by RK
            Ceramics Ltd.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
