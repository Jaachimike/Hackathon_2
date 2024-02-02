import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Navbar/Logo.png";
import overview_logo from "../assets/Navbar/category-2.png";
import task_logo from "../assets/Navbar/book.png";
import mentors_logo from "../assets/Navbar/user-octagon.png";
import message_logo from "../assets/Navbar/message.png";
import settings_logo from "../assets/Navbar/setting-2.png";

const NavBar = () => {
  const isSignInOrSignUp = () => {
    // Check for sign-in and sign-up paths
    return (
      window.location.pathname === "/signin" ||
      window.location.pathname === "/signup"
    );
  };

  return (
    <>
      {!isSignInOrSignUp() && (
        <nav className="bg-white text-[#8E92BC] flex flex-col justify-between w-64 h-screen shadow-lg px-6">
          <div>
            <div className="flex items-center justify-center p-4">
              <img src={logo} alt="Logo" className="w-auto h-9" />
            </div>
            <ul className="mt-6 *:mb-6">
              <li className="p-4 hover:bg-gray-100 rounded-lg">
                <Link to="/" className="flex items-center">
                  <img src={overview_logo} alt="" className="mr-4" />
                  <span className="font-semibold">Overview</span>
                </Link>
              </li>
              <li className="p-4 hover:bg-gray-100 rounded-lg">
                <Link to="/tasks" className="flex items-center">
                  <img src={task_logo} alt="" className="mr-4" />
                  <span className="font-semibold">Tasks</span>
                </Link>
              </li>

              <li className="p-4 hover:bg-gray-100 rounded-lg">
                <Link to="/messages" className="flex items-center">
                  <img src={message_logo} alt="" className="mr-4" />
                  <span className="font-semibold">Message</span>
                </Link>
              </li>
              {/* ... other menu items with similar structure ... */}
              <li className="p-4 hover:bg-gray-100 rounded-lg">
                <Link to="/settings" className="flex items-center">
                  <img src={settings_logo} alt="" className="mr-4" />
                  <span className="font-semibold">Settings</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Center */}
          <div className="bg-[#141522] px-4 pt-10 pb-10 mb-20 mt-8 rounded-md">
            <h4 className="text-white text-center font-semibold mb-2">
              Help Center
            </h4>
            <p className="text-center text-white text-sm">
              Having Trouble? Please contact us
            </p>

            <div className="flex justify-center mt-9">
              <button className="bg-white px-3 py-3 rounded-lg text-[#141522]">
                <a href="/help-center">Go to Help Center</a>
              </button>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
