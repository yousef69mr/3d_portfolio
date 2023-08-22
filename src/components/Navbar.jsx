import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { navVariants } from "../utils/motion";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-11 h-11 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            <span className="sm:block hidden">Yousef &nbsp;</span>Shemy
          </p>
        </Link>

        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks?.map((link) => (
            <li
              key={link?.id}
              className={`${
                active === link?.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link?.title)}
            >
              <a href={`/#${link?.id}`}>{link?.title}</a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] object-contain cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute my-2 min-w-[140px] top-20 right-0 mx-4 z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-center flex-col gap-4">
              {navLinks?.map((link) => (
                <li
                  key={link?.id}
                  className={`${
                    active === link?.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(link?.title);
                    setToggle((prev) => !prev);
                  }}
                >
                  <a href={`/#${link?.id}`}>{link?.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
