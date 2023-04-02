import React from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="w-full bg-black mt-10">
        <div className="max-w-7xl mx-auto text-white grid grid-cols-3 md:grid-cols-4 py-10 px-5">
          <div>
            <h6 className="font-medium md:text-2xl text-gray-300">Solutions</h6>
            <ul>
              <li className="py-2 text-sm text-gray-300 cursor-pointer hover:text-white">
                Analytics
              </li>
              <li className="py-2 text-sm text-gray-300 cursor-pointer hover:text-white">
                Marketing
              </li>
              <li className="py-2 text-sm text-gray-300 cursor-pointer hover:text-white">
                Commerce
              </li>
              <li className="py-2 text-sm text-gray-300 cursor-pointer hover:text-white">
                Insights
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium md:text-2xl text-gray-300">Support</h6>
            <ul>
              <li className="py-2 text-sm text-gray-300 cursor-pointer hover:text-white">
                Pricing
              </li>
              <li className="py-2 text-sm text-gray-300 cursor-pointer hover:text-white">
                Documentation
              </li>
              <li className="py-2 text-sm text-gray-300 cursor-pointer hover:text-white">
                Guides
              </li>
              <li className="py-2 text-sm text-gray-300 cursor-pointer hover:text-white">
                API Status
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium md:text-2xl text-gray-300">Company</h6>
            <ul>
              <li className="py-2 text-sm text-gray-300 cursor-pointer hover:text-white">
                About
              </li>
              <li className="py-2 text-sm text-gray-300 cursor-pointer hover:text-white">
                Blog
              </li>
              <li className="py-2 text-sm text-gray-300 cursor-pointer hover:text-white">
                Jobs
              </li>
              <li className="py-2 text-sm text-gray-300 cursor-pointer hover:text-white">
                Press
              </li>
              <li className="py-2 text-sm text-gray-300 cursor-pointer hover:text-white">
                Careers
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium md:text-2xl text-gray-300">Legal</h6>
            <ul>
              <li className="py-2 text-sm text-gray-300 cursor-pointer hover:text-white">
                Claim
              </li>
              <li className="py-2 text-sm text-gray-300 cursor-pointer hover:text-white">
                Policy
              </li>
              <li className="py-2 text-sm text-gray-300 cursor-pointer hover:text-white">
                Terms
              </li>
              <div className="hidden md:flex justify-between max-w-[200px] mt-5">
                <AiOutlineGithub size={23} className="cursor-pointer" />
                <BsFacebook size={23} className="cursor-pointer" />
                <FaTiktok size={23} className="cursor-pointer" />
                <AiFillLinkedin size={23} className="cursor-pointer" />
              </div>
            </ul>
          </div>
          <div className="md:hidden flex justify-between max-w-[200px] mt-5 items-center">
            <AiOutlineGithub size={23} className="cursor-pointer" />
            <BsFacebook size={23} className="cursor-pointer" />
            <FaTiktok size={23} className="cursor-pointer" />
            <AiFillLinkedin size={23} className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-full bg-black text-white py-10 border-t">
        <div className="max-w-7xl mx-auto text-center">
          <h1>© 2023 - Design & Built by Ogama - All Right Reserved</h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
