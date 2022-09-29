import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  return (
    <header className="bg-red-600">
      <div className="contanier mx-auto flex justify-between">
        <nav className="flex">
          <Link
            to="/"
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Kenny Chijioke
          </Link>
          <Link
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            Blog Posts
          </Link>
          <Link
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            Projects
          </Link>
          <Link
            to="/about"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
          >
            About me
          </Link>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url=""
            className="mr-4"
            target="_blank"
            fgColor="fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};
export default NavBar;
