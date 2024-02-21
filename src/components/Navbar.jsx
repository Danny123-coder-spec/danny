import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpeg";
import "./Navbar.css";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = (props) => {
  //   const { window } = props;
  const [hover, setHover] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const closeDrawer = () => {
    setToggle(false);
  };

  const handleCartDrawer = () => {
    setCartDrawerOpen(!cartDrawerOpen);
  };

  useEffect(() => {
    const handleResize = () => {
        if(window.innerWidth > 768) {
            setCartDrawerOpen(false)
        }
      setWindowWidth(window.innerWidth);
      setToggle(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [toggle, cartDrawerOpen]);

  const drawerWidth = 280;
  return (
    <div className="bg-black bg-opacity-30 sticky top-0 z-30 backdrop-filter backdrop-blur-50 lg:px-[3rem] md:px-[2rem] px-[1rem]">
      <div className="flex flex-row px-0 py-[1rem] m-auto  items-center justify-between lg:max-w-[1300px] w-full">
        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8 rounded-full object-cover aspect-auto"
            src={logo}
            alt=""
          />
          <h3>DannyDev</h3>
        </div>
        <div className="hidden list-none lg:flex items-center gap-[4rem] ">
          <li className="menu_item relative cursor-pointer">
          <ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          <li className="menu_item relative cursor-pointer">
          <ScrollLink to="skills" smooth={true} duration={500}>
              Skills
            </ScrollLink>
          </li>
          <li className="menu_item relative cursor-pointer">
          <ScrollLink to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li className="menu_item relative cursor-pointer">
          <ScrollLink to="contact" smooth={true} duration={500}>
              Contact Me
            </ScrollLink>
          </li>
          
          <Link to="https://eu.docworkspace.com/d/sILzszpbxAYCj2K4G"><div className="cursor-pointer  transition-all duration-700 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-[2rem] py-[0.6rem] rounded-md font-medium shadow-lg">View resume</div></Link>
          
        </div>
        <div className="relative lg:hidden block">
          {!toggle ? (
            <IoMenuSharp
              size={22}
              onClick={handleCartDrawer}
              className="cursor-pointer bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md  h-7 w-9"
            />
          ) : (
            <IoClose
              size={22}
              onClick={closeDrawer}
              className="cursor-pointer  bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md h-7 w-9"
            />
          )}
          {/* {toggle && (
          )} */}

          <Drawer
            anchor="left"
            open={cartDrawerOpen}
            onClose={handleCartDrawer}
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                background: "linear-gradient(to right, #8B5CF6, #6366F1)",
              },
            }}
          >
            <div className="flex flex-col  my-[3rem] mx-[3rem] text-white  items-start justify-center">
              <div className="flex flex-col items-center gap-2">
                <img
                  className="w-8 h-8 rounded-full object-cover aspect-auto "
                  src={logo}
                  alt=""
                />
                <h3>DannyDev</h3>
              </div>
              <div className="list-none flex flex-col gap-[2rem] mt-[3rem]">
                <li className="menu_item relative cursor-pointer ">
                  <ScrollLink to="home" smooth={true} duration={500}>
                    Home
                  </ScrollLink>
                </li>
                <li className="menu_item relative cursor-pointer">
                  <ScrollLink to='skills' smooth={true} duration={500}>
                    Skills
                  </ScrollLink>
                </li>
                <li className="menu_item relative cursor-pointer">
                  <ScrollLink to="projects" smooth={true} duration={500}>
                    Projects
                  </ScrollLink>
                </li>
                <li className="menu_item relative cursor-pointer">
                  <ScrollLink to='contact' smooth={true} duration={500}>
                    Contact Me
                  </ScrollLink>
                </li>
                
                <a href="https://eu.docworkspace.com/d/sILzszpbxAYCj2K4G"><div className="cursor-pointer  transition-all duration-700 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-[2rem] py-[0.6rem] rounded-md font-medium shadow-lg">View resume</div></a>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <div className="flex items-center justify-between p-3 px-5">
  <div className="flex items-center gap-2">
    <MdOutlineShoppingBag className="text-slate-500 " size={25} />
    <span className="font-semibold text-slate-500">0 item</span>
  </div>
  
</div>
<div className="bg-slate-500 w-full h-[0.6px] bg-opacity-60"></div>
<div className="flex flex-col justify-center items-center my-[50%]">
 
  <div className="text-slate-500 text-sm pt-4 px-5">
    <span>
      Your Shopping Cart Is Empty. <br />{" "}
      <span className="flex justify-center">Start Shopping</span>
    </span>
  </div>
</div> */
}

// <div className="list-none absolute top-20 right-10 flex flex-col items-center gap-10 ">
//   <li className="menu_item relative">
//     <a href="" className="">
//       Home
//     </a>
//   </li>
//   <li className="menu_item relative">
//     <a href="" className="">
//       Skills
//     </a>
//   </li>
//   <li className="menu_item relative">
//     <a href="" className="">
//       Work Experience
//     </a>
//   </li>
//   <li className="menu_item relative">
//     <a href="" className="">
//       Contact Me
//     </a>
//   </li>
//   <button
//     type="button"
//     className="  border-none  cursor-pointer  transition-all duration-700 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-[2rem] py-[0.6rem] rounded-md font-medium shadow-lg"
//   >
//     Hire Me
//   </button>
// </div>

{
  /* {navbarItems.map((item, index) => (
          <main>
            <div key={index} className="flex flex-row items-center justify-between max-w-[1300px]">
              <a href="">{item}</a>
            </div>
          </main>
        ))} */
}
