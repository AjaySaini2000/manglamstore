import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    const[activelink, setActivelink]=useState("home")
    const[isMenu, setIsMenu]=useState(false)


    const handleMenu = ()=>{
        setIsMenu(!isMenu)
    }
  return (
//   <>
//   <div className='bg-white xl:px-12 p-4'>
//     <div className='nav container-xl mx-auto  grid md:grid-cols-8 grid-cols-2'>
//         <div className='nav-logo md:col-span-1 flex items-center pb-1'>
//             <Link to="/">            <img src="/manglam_logo.png" alt="logo" className='w-20 md:w-24' onClick={()=>{setActivelink("home")}}/>
//             </Link>
//         </div>
//         <div className='nav-menu hidden md:flex items-center md:col-span-4'>
//             <ul className='flex space-x-4 '>
//                 <li className='p-3 flex flex-col items-center' onClick={()=>{setActivelink("home")}}><Link to="/">Home</Link> {activelink==="home"?<hr/>:<></>}</li>
//                 <li className='p-3 relative group flex flex-col items-center' onClick={()=>{setActivelink("product")}}><Link to="/product">Product</Link> {activelink==="product"?<hr/>:<></>}
//                 <div className='menu-list-drp absolute top-full left-0 w-45 h-auto  text-sm cursor-pointer hidden group-hover:block z-20'>
//                 <div className='bg-white shadow-xl'>
//                   <ul className='text-xs' >
//                   <Link to='/ci_document'><li className="p-2 hover:bg-gray-100 border-b border-gray-100 text-nowrap">CI Document</li></Link>
//                     <Link to='/department_document'><li className="p-2 hover:bg-gray-100 border-b border-gray-100 text-nowrap">Department Document</li></Link>

//                   </ul>
//                 </div>

//               </div>
//                 </li>
//                 <li className='p-3 flex flex-col items-center' onClick={()=>{setActivelink("deals")}}><Link to="/deals">Deals</Link> {activelink==="deals"?<hr/>:<></>}</li>
//                 <li className='p-3 flex flex-col items-center' onClick={()=>{setActivelink("about")}}><Link to="/about_us">About Us</Link> {activelink==="about"?<hr/>:<></>}</li>
//                 <li className='p-3 flex flex-col items-center' onClick={()=>{setActivelink("contact")}}><Link to="/contact_us">Contact Us</Link> {activelink==="contact"?<hr/>:<></>}</li>

//             </ul>
//         </div>
//         <div className='flex items-center col-span-2'>
//         <div className="relative rounded-md md:my-0 my-2 ">
//                 <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                   <span className="text-gray-500 sm:text-sm"><IoIosSearch /></span>
//                 </div>
//                 <input type="text" name="price" id="price" className="block rounded-md py-1.5 pl-7 pr-20 text-gray-900 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:shadow sm:text-sm sm:leading-6 overflow-hidden w-full" placeholder="Search By Document" />
//               </div>
//         </div>
//         <div className='md:col-span-1 flex items-center justify-end space-x-2 lg:space-x-3'>
//             <div className='relative flex
//             '><AiOutlineShoppingCart className='md:text-2xl text-xl'/>
//             <div className='absolute md:left-4 left-3 md:-top-1 -top-1 bg-[#cb6a02] text-center text-white rounded-full w-4 h-4 flex items-center justify-center'><span className='text-xs'>99</span></div>
//             </div>
//             <div><CgProfile className='md:text-2xl text-xl'/>
//             </div>
// <div><button type='button' className='text-sm md:text-md font-semibold py-1 px-2 rounded-lg bg-[#cb6a02] text-white'>Login</button></div>

//         </div>

//     </div>
//     </div>

// </>
<>
  <div className="bg-white xl:px-12 p-4">
    <div className="nav container-xl mx-auto grid lg:grid-cols-8 sm:grid-cols-3 grid-cols-2 gap-4">
      {/* Logo Section */}
      <div className="nav-logo md:col-span-1 flex items-center pb-1">
        <Link to="/">
          <img
            src="/manglam_logo.png"
            alt="logo"
            className="w-20 lg:w-24"
            onClick={() => {
              setActivelink("home");
            }}
          />
        </Link>
      </div>

      {/* Menu Section */}
      <div className="nav-menu hidden lg:flex items-center md:col-span-4">
        <ul className="flex space-x-4">
          <li
            className="p-3 flex flex-col items-center"
            onClick={() => {
              setActivelink("home");
            }}
          >
            <Link to="/">Home</Link> {activelink === "home" ? <hr /> : <></>}
          </li>
          <li
            className="p-3 relative group flex flex-col items-center"
            onClick={() => {
              setActivelink("product");
            }}
          >
            <Link to="/product">Product</Link> {activelink === "product" ? <hr /> : <></>}
            <div className="menu-list-drp absolute top-full left-0 w-45 h-auto text-sm cursor-pointer hidden group-hover:block z-20">
              <div className="bg-white shadow-xl">
                <ul className="text-xs">
                  <Link to="/ci_document">
                    <li className="p-2 hover:bg-gray-100 border-b border-gray-100 whitespace-nowrap">CI Document</li>
                  </Link>
                  <Link to="/department_document">
                    <li className="p-2 hover:bg-gray-100 border-b border-gray-100 whitespace-nowrap">Department Document</li>
                  </Link>
                </ul>
              </div>
            </div>
          </li>
          <li
            className="p-3 flex flex-col items-center"
            onClick={() => {
              setActivelink("deals");
            }}
          >
            <Link to="/deals">Deals</Link> {activelink === "deals" ? <hr /> : <></>}
          </li>
          <li
            className="p-3 flex flex-col items-center"
            onClick={() => {
              setActivelink("about");
            }}
          >
            <Link to="/about_us">About Us</Link> {activelink === "about" ? <hr /> : <></>}
          </li>
          <li
            className="p-3 flex flex-col items-center"
            onClick={() => {
              setActivelink("contact");
            }}
          >
            <Link to="/contact_us">Contact Us</Link> {activelink === "contact" ? <hr /> : <></>}
          </li>
        </ul>
      </div>

      {/* Search Bar */}
      <div className="hidden sm:flex items-center  col-span-1 lg:col-span-2">
        <div className="relative rounded-md w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">
              <IoIosSearch />
            </span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block rounded-md py-1 pl-10 pr-20 text-gray-900 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:shadow sm:text-sm sm:leading-6 w-full"
            placeholder="Search By Document"
          />
        </div>
      </div>

      {/* User and Cart Section */}
      <div className="md:col-span-1 flex items-center justify-end space-x-3">
        <div className="relative flex">
          <AiOutlineShoppingCart className="md:text-2xl text-xl" />
          <div className="absolute md:left-4 left-3 md:-top-1 -top-1 bg-[#cb6a02] text-center text-white rounded-full w-4 h-4 flex items-center justify-center">
            <span className="text-xs">99</span>
          </div>
        </div>
        <div>
          <CgProfile className="md:text-2xl text-xl" />
        </div>
        <div>
          <button
            type="button"
            className="text-sm md:text-md font-semibold py-1 px-2 rounded-lg bg-[#cb6a02] text-white"
          >
            Login
          </button>
        </div>
        <div className='flex sm:hidden'>
            {isMenu ? <RxCross2 className="md:text-2xl text-xl" onClick={()=>{handleMenu()}}/>:         <IoMenu className="md:text-2xl text-xl" onClick={()=>{handleMenu()}}/>
            }

        

        </div>
      </div>
    </div>
    {isMenu ? <div className='container-xl  bg-[white] z-50 transition duration-500 ease-in-out sm:hidden  overflow-y-scroll' >
        <div className='container-xl py-6 flex items-center mx-auto'>
          <ul className='font-Roboto flex flex-col gap-6  w-full  font-semibold '>
            <li className='hover:text-[20px]'><Link>Home</Link></li>
            <li className=' hover:text-[20px] relative group'><button><Link>Document</Link></button>
              <div className='hidden group-hover:block absolute left-32 -top-1 bg-white p-3 transition duration-500 ease-in-out mt-3 shadow-lg rounded-md z-10'>
                {/* <div className=' bg-white w-5 h-5 absolute top-1.5 -left-2 rotate-45 shadow-lg -z-20'></div> */}
                <ul className='font-thin text-sm space-y-3'>
                  <li><Link>Investment Details</Link></li>
                  <li><Link>Investment Details</Link></li>
                  <li><Link>Investment Details</Link></li>
                  <li><Link>Investment Details</Link></li>
                  <li><Link>Investment Details</Link></li>

                </ul>
              </div>
            </li>
            <li className='relative hover:text-[20px] group'><button><Link>Employee</Link></button>
            <div className='hidden group-hover:block absolute left-32 -top-1 bg-white p-3 transition duration-500 ease-in-out mt-3 shadow-lg rounded-md z-10'>
                {/* <div className=' bg-white w-5 h-5 absolute top-1.5 -left-2 rotate-45 shadow-lg -z-20'></div> */}
                <ul className='font-thin text-sm space-y-3'>
                  <li><Link>Investment Details</Link></li>
                  <li><Link>Investment Details</Link></li>
                  <li><Link>Investment Details</Link></li>
                  <li><Link>Investment Details</Link></li>
                  <li><Link>Investment Details</Link></li>

                </ul>
              </div>
              </li>
            <li className='relative hover:text-[20px] group'><button><Link>Settings</Link></button>
              <div className='hidden group-hover:block absolute left-32 -top-1 bg-white p-3 transition duration-500 ease-in-out mt-3 shadow-lg rounded-md z-10'>
                {/* <div className=' bg-white w-5 h-5 absolute top-1.5 -left-2 rotate-45 shadow-lg -z-20'></div> */}
                <ul className='font-thin text-sm space-y-3'>
                  <li><Link>Investment Details</Link></li>
                  <li><Link>Investment Details</Link></li>
                  <li><Link>Investment Details</Link></li>
                  <li><Link>Investment Details</Link></li>
                  <li><Link>Investment Details</Link></li>

                </ul>
              </div> 
              </li>
            <li className='relative hover:text-[20px] group'><button><Link>Timesheet</Link></button>
            <div className='hidden group-hover:block absolute left-32 -top-1 bg-white p-3 transition duration-500 ease-in-out mt-3 shadow-lg rounded-md z-10'>
                {/* <div className=' bg-white w-5 h-5 absolute top-1.5 -left-2 rotate-45 shadow-lg -z-20'></div> */}
                <ul className='font-thin text-sm space-y-3'>
                  <li><Link>Investment Details</Link></li>
                  <li><Link>Investment Details</Link></li>
                  <li><Link>Investment Details</Link></li>
                  <li><Link>Investment Details</Link></li>
                  <li><Link>Investment Details</Link></li>

                </ul>
              </div>
              </li>
            <li className=' hover:text-[20px]'><Link>To-Do</Link></li>
          </ul>
        </div>
      </div> : <></>}
  </div>
  <div className='hidden sm:flex lg:hidden bg-white xl:px-12 px-4 py-2 mt-2'>
  <div className="nav-menu items-center">
        <ul className="flex space-x-10">
          <li
            className=" flex flex-col items-center"
            onClick={() => {
              setActivelink("home");
            }}
          >
            <Link to="/">Home</Link> {activelink === "home" ? <hr /> : <></>}
          </li>
          <li
            className=" relative group flex flex-col items-center"
            onClick={() => {
              setActivelink("product");
            }}
          >
            <Link to="/product">Product</Link> {activelink === "product" ? <hr /> : <></>}
            <div className="menu-list-drp absolute top-full left-0 w-45 h-auto text-sm cursor-pointer hidden group-hover:block z-20">
              <div className="bg-white shadow-xl">
                <ul className="text-xs">
                  <Link to="/ci_document">
                    <li className=" hover:bg-gray-100 border-b border-gray-100 whitespace-nowrap">CI Document</li>
                  </Link>
                  <Link to="/department_document">
                    <li className=" hover:bg-gray-100 border-b border-gray-100 whitespace-nowrap">Department Document</li>
                  </Link>
                </ul>
              </div>
            </div>
          </li>
          <li
            className=" flex flex-col items-center"
            onClick={() => {
              setActivelink("deals");
            }}
          >
            <Link to="/deals">Deals</Link> {activelink === "deals" ? <hr /> : <></>}
          </li>
          <li
            className=" flex flex-col items-center"
            onClick={() => {
              setActivelink("about");
            }}
          >
            <Link to="/about_us">About Us</Link> {activelink === "about" ? <hr /> : <></>}
          </li>
          <li
            className=" flex flex-col items-center"
            onClick={() => {
              setActivelink("contact");
            }}
          >
            <Link to="/contact_us">Contact Us</Link> {activelink === "contact" ? <hr /> : <></>}
          </li>
        </ul>
      </div>
  </div>
  {!isMenu ? <div className='flex sm:hidden bg-white xl:px-12 px-4 py-2 mt-2'>
  <div className="nav-menu items-center overflow-x-scroll">
        <ul className="flex space-x-10 ">
          <li
            className=" flex flex-col items-center text-nowrap"
            
          >
            <Link to="#">Food & Kitchen</Link> 
          </li>
          <li
            className="flex flex-col items-center text-nowrap"
            
          >
            <Link to="#">Cloths</Link> 
           
          </li>
          <li
           
          >
            <Link to="#">Cosmetics</Link> 
          </li>
          <li
            className=" flex flex-col items-center text-nowrap"
           
          >
            <Link to="#">Cold-drinks</Link> 
          </li>
          <li
            className=" flex flex-col items-center text-nowrap"
           
          >
            <Link to="#">animal feed</Link> 
          </li>
        </ul>
      </div>
  </div> : <></>}
</>

  )
}

export default Navbar