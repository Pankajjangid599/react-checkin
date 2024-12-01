import React from "react";
import { FaApple } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowBack } from "react-icons/io";
import { MdEmail, MdMenuBook } from "react-icons/md";
import { PiInfo } from "react-icons/pi";
import { RxCountdownTimer } from "react-icons/rx";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div>
      <div className="fixed inset-0 z-50 flex">
        {/* Modal */}
        <div className="relative z-10 bg-white h-screen w-2/5  shadow-lg">
          <div className="border-b">
            <button
              className="text-black text-xl hover:text-black p-4"
              onClick={toggleSidebar}
            >
              <IoMdArrowBack />
            </button>
          </div>

          <h2 className="mt-4 text-lg border-b pb-4 ps-4 text-gray-500">Menu</h2>
          <ul className="mt-4 space-y-2 text-gray-500">
            <li className="flex items-center gap-8 border-b pb-2 ps-4">
              <span><FaCartShopping />
              </span> <span>My cart</span>
            </li>
            <li className="flex items-center gap-8 border-b pb-2 ps-4">
              <span><MdMenuBook />
              </span> <span>Menu</span>
            </li>
            <li className="flex items-center gap-8 border-b pb-2 ps-4">
              <span><RxCountdownTimer />
              </span> <span>My orders</span>
            </li>
          </ul>

    <div className="flex justify-between items-center text-gray-500 border-b pb-2 pt-6">
    <h3 className=" text-lg font-semibold ps-4">Sign in with</h3>
    <PiInfo className="me-4 text-xl"/>
    </div>
          <ul className="mt-2 space-y-2 text-gray-500">
            <li className="flex items-center gap-8 border-b pb-2 ps-4">
              <span><MdEmail />
              </span> <span>Email</span>
            </li>
            <li className="flex items-center gap-8 border-b pb-2 ps-4">
              <span><FaApple />
              </span> <span>Apple</span>
            </li>
            <li className="flex items-center gap-8 border-b pb-2 ps-4">
              <span><FcGoogle />
              </span> <span>Google</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
