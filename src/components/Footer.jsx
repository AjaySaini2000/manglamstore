import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <>
            <div className="bg-white xl:px-12 p-4 mt-4">
                <div className='footer-container grid lg:grid-cols-6 sm:grid-cols-4 xl:gap-8 sm:gap-4 gap-6'>
                    <div className='footer-menu flex flex-col col-span-2 gap-2 sm:items-start items-center'>
                        <img src="/manglam_logo.png" alt="logo" className='max-w-36 mb-4' />
                        <p className='about tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum maxime ipsa perspiciatis </p>
                        <span>Since:24_July_2000</span>

                    </div>
                    <div className='footer-menu md:col-span-1 col-span-2 flex flex-col gap-2 sm:items-start items-center'>
                        <h6 className='text-xl font-semibold tracking-wide mb-3'>Quik Links</h6>
                        <ul className='flex flex-col gap-2 tracking-wide' >
                            <li><Link to="" className='hover:text-red-500'>Home</Link></li>
                            <li><Link to="" className='hover:text-red-500'>Product</Link></li>
                            <li><Link to="" className='hover:text-red-500'>Deals</Link></li>
                            <li><Link to="" className='hover:text-red-500'>About</Link></li>
                            <li><Link to="" className='hover:text-red-500'>Contact</Link></li>

                        </ul>
                    </div>
                    <div className='footer-menu md:col-span-1 col-span-2 flex flex-col gap-2 sm:items-start items-center'>
                        <h6 className='text-xl font-semibold tracking-wide mb-3'>Contact Info</h6>
                        <div>
                            <table className=''>
                                <tr className=''>
                                    <td className='flex items-start text-nowrap py-2 mr-3'><FaLocationDot className='text-red-500' /></td>
                                    <td className='tracking-wide'>Lorem ipsum dolor sit amet.</td>
                                </tr>
                                <tr>
                                    <td className='flex items-start text-nowrap py-2 mr-3'><MdPhoneIphone className='text-red-500' />
                                    </td>
                                    <td className='tracking-wide'><Link to="" className='hover:text-red-500'>56*********</Link></td>
                                </tr>
                            </table>
                        </div>
                        <h6 className='text-lg tracking-wide'>Social Media</h6>
                        <div className='flex gap-8'>
                            <Link to=""><FaXTwitter className='text-red-500 text-xl' /></Link>
                            <Link to=""><FaInstagram className='text-red-500 text-xl' /></Link>
                            <Link to=""><BsYoutube className='text-red-500 text-xl' /></Link>

                        </div>

                    </div>
                    <div className='footer-menu col-span-2 flex flex-col gap-2 sm:items-start items-center'>
                        <h6 className='text-xl font-semibold tracking-wide mb-3'>Subscribe Us</h6>
                        <p className='tracking-wide mb-2'>Subscribe to our newsletter to get updates about our grand offers. </p>
                        <form action="" method="post" className='mt-6'>

                            <div
                                className="relative border border-gray-300  focus-within:border-red-500 "
                                tabIndex="0"
                            >

                                <input
                                    type="email"
                                    name="email"
                                    id=""
                                    className=" p-2 pr-20 w-full focus:outline-none sm:text-sm sm:leading-6 "
                                    placeholder="Your Email"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center p-1">
                                    <button className='p-1 bg-red-400 hover:bg-red-500 text-white'>Subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-white xl:px-12 p-4">
                <div className='text-center px-3'>
                Copyright ©2024 All rights reserved | This template is made with  by Ajay Parasme
                </div>
            
            </div>


        </>
    )
}

export default Footer