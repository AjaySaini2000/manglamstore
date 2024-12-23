import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../components/Footer';
import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

const Home = () => {
    const [showArrows, setShowArrows] = useState({
        slider1: false,
        slider2: false
    })
    const sliderSettings = (sliderKey) => ({
        dots: false,
        arrows: showArrows[sliderKey],
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        pauseOnHover: true,
        
        autoplay: false,
        responsive: [
            {
                breakpoint: 1536, // Large screens
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 1280, // Large screens
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1024, // Large screens
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768, // Medium screens
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 640, // Small screens
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    });
    const handleMouseEnter = (slider) => {
        setShowArrows((prevState) => ({ ...prevState, [slider]: true }));
    };

    const handleMouseLeave = (slider) => {
        setShowArrows((prevState) => ({ ...prevState, [slider]: false }));
    };
    const settings2 = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,

    };
    return (<>
        <div className="bg-[#f9f9f9] xl:px-12 px-4">
            <div className='grid md:grid-cols-2 grid-cols-1 gap-2 md:max-h-[100vh] max-h-[100vh] overflow-hidden'>
                <div className='flex justify-center items-center md:col-span-1  md:order-2 md:h-screen h-[50vh]'>
                    <div className=''>
                        <p className='tracking-widest text-center pb-2'>#NEW SUMMER COLLECTION 2019</p>
                        <h1 className='text-6xl font-bold text-center pb-7'>ARRIVALS SALES</h1>
                        <p className='text-center'>                    <button className='font-semibold p-2 bg-black text-white rounded-xl hover:bg-opacity-85 transition-all duration-300 text-xs'>SHOP NOW</button>
                        </p>
                    </div>

                </div>

                <div className='md:col-span-1  flex justify-center md:justify-start'>
                    <img src="/model_banner.png" alt="model_image" className="xl:max-w-[80%] md:max-w-full max-w-full"
                    />
                </div>

            </div>
        </div>

        <div className="bg-white xl:px-12 p-4">
            <div className='slider-container overflow-hidden'>
                <Slider {...settings2} className=''>
                    <div className='max-w-[100%]'><img src="/banner.png" alt="" /></div>
                    <div className='max-w-[100%]'><img src="/banner.png" alt="" /></div>
                    <div className='max-w-[100%]'><img src="/banner.png" alt="" /></div>
                </Slider>
            </div>

            {/* populer */}
            <div className='mt-10'>
                <h2 className='text-3xl font-Roboto font-normal tracking-wider text-center mb-6'>Our Populer Products</h2>
                <div className='mb-2 flex justify-end '>
                    <button className='bg-blue-600 px-2 py-1 rounded font-semibold text-white'>Sew All</button>
                </div>



                <div className='slider-container overflow-hidden' onMouseEnter={() => handleMouseEnter("slider1")}
                    onMouseLeave={() => handleMouseLeave("slider1")}>
                    <Slider {...sliderSettings("slider1")} className='flex '>



                        <div className='card-item hover:shadow-md overflow-hidden rounded-lg border border-gray-200'>
                            <div className='relative image-wraper flex justify-center p-4'>
                                <div className='card-img max-w-[200px] max-h-[200px] '>
                                    <Link to=""><img src="darkfantasy.webp" alt="berrymix" className='w-full h-40 object-center object-cover transform transition-transform duration-300 hover:scale-110' /></Link>
                                </div>
                                <button className='absolute right-1 top-2 text-xl'>
                                    {/* <IoIosHeartEmpty /> */}
                                    <IoMdHeart className='text-red-500' /></button>
                            </div>
                            <div className='card-details p-2 min-h-40 grid grid-cols-1'>
                                <div className='desc text-sm font-semibold '><Link to="" className='line-clamp-2'>Farmley Berries Mix 160g | 8-In-1 Healthly Snacks Contains Cranberry,Black</Link></div>
                                <div className='flex items-center price'><strong className='me-1 mb-1'>₹240</strong><span className='text-xs text-gray-400 font-semibold line-through'>₹199.00</span>
                                    <span className='text-xs text-red-500 font-semibold mb-1 ms-1 bg-slate-300 px-1 py-0.5'>50% OFF</span>

                                </div>

                                {/* <div><span className='text-sm text-red-500'><Link to="">More Details...</Link></span></div> */}
                                <button className='p-1 bg-orange-400 text-white text-sm rounded-full font-semibold place-self-end w-full'>Add Cart</button>
                            </div>

                        </div>
                        <div className='card-item hover:shadow-md overflow-hidden rounded-lg border border-gray-200 '>
                            <div className='relative image-wraper flex justify-center p-4'>
                                <div className='card-img max-w-[200px] max-h-[200px] '>
                                    <Link to=""><img src="mixnuts.webp" alt="berrymix" className='w-full h-40 object-center object-cover transform transition-transform duration-300 hover:scale-110' /></Link>
                                </div>
                                <button className='absolute right-1 top-2 text-xl'>
                                    {/* <IoIosHeartEmpty /> */}
                                    <IoMdHeart className='text-red-500' /></button>
                            </div>
                            <div className='card-details p-2 min-h-40 grid grid-cols-1'>
                                <div className='desc text-sm font-semibold '><Link to="" className='line-clamp-2'>Farmley Berries Mix 160g | 8-In-1 Healthly Snacks Contains Cranberry,Black</Link></div>
                                <div className='flex items-center price'><strong className='me-1 mb-1'>₹240</strong><span className='text-xs text-gray-400 font-semibold line-through'>₹199.00</span>
                                    <span className='text-xs text-red-500 font-semibold mb-1 ms-1 bg-slate-300 px-1 py-0.5'>50% OFF</span>

                                </div>

                                {/* <div><span className='text-sm text-red-500'><Link to="">More Details...</Link></span></div> */}
                                <button className='p-1 bg-orange-400 text-white text-sm rounded-full font-semibold place-self-end w-full'>Add Cart</button>
                            </div>

                        </div>
                        <div className='card-item hover:shadow-md overflow-hidden rounded-lg border border-gray-200 '>
                            <div className='relative image-wraper flex justify-center p-4'>
                                <div className='card-img max-w-[200px] max-h-[200px] '>
                                    <Link to=""><img src="berry_mix.webp" alt="berrymix" className='w-full h-40 object-center object-cover transform transition-transform duration-300 hover:scale-110' /></Link>
                                </div>
                                <button className='absolute right-1 top-2 text-xl'>
                                    {/* <IoIosHeartEmpty /> */}
                                    <IoMdHeart className='text-red-500' /></button>
                            </div>
                            <div className='card-details p-2 min-h-40 grid grid-cols-1'>
                                <div className='desc text-sm font-semibold '><Link to="" className='line-clamp-2'>Farmley Berries Mix 160g | 8-In-1 Healthly Snacks Contains Cranberry,Black</Link></div>
                                <div className='flex items-center price'><strong className='me-1 mb-1'>₹240</strong><span className='text-xs text-gray-400 font-semibold line-through'>₹199.00</span>
                                    <span className='text-xs text-red-500 font-semibold mb-1 ms-1 bg-slate-300 px-1 py-0.5'>50% OFF</span>

                                </div>

                                {/* <div><span className='text-sm text-red-500'><Link to="">More Details...</Link></span></div> */}
                                <button className='p-1 bg-orange-400 text-white text-sm rounded-full font-semibold place-self-end w-full'>Add Cart</button>
                            </div>

                        </div>
                        <div className='card-item hover:shadow-md overflow-hidden rounded-lg border border-gray-200 '>
                            <div className='relative image-wraper flex justify-center p-4'>
                                <div className='card-img max-w-[200px] max-h-[200px] '>
                                    <Link to=""><img src="sunfeast-dark-fantasy-choco-fills-275g-product-images.webp" alt="berrymix" className='w-full h-40 object-center object-cover transform transition-transform duration-300 hover:scale-110' /></Link>
                                </div>
                                <button className='absolute right-1 top-2 text-xl'>
                                    {/* <IoIosHeartEmpty /> */}
                                    <IoMdHeart className='text-red-500' /></button>
                            </div>
                            <div className='card-details p-2 min-h-40 grid grid-cols-1'>
                                <div className='desc text-sm font-semibold '><Link to="" className='line-clamp-2'>Farmley Berries Mix 160g | 8-In-1 Healthly Snacks Contains Cranberry,Black</Link></div>
                                <div className='flex items-center price'><strong className='me-1 mb-1'>₹240</strong><span className='text-xs text-gray-400 font-semibold line-through'>₹199.00</span>
                                    <span className='text-xs text-red-500 font-semibold mb-1 ms-1 bg-slate-300 px-1 py-0.5'>50% OFF</span>

                                </div>

                                {/* <div><span className='text-sm text-red-500'><Link to="">More Details...</Link></span></div> */}
                                <button className='p-1 bg-orange-400 text-white text-sm rounded-full font-semibold place-self-end w-full'>Add Cart</button>
                            </div>

                        </div>
                        <div className='card-item hover:shadow-md overflow-hidden rounded-lg border border-gray-200'>
                            <div className='relative image-wraper flex justify-center p-4'>
                                <div className='card-img max-w-[200px] max-h-[200px] '>
                                    <Link to=""><img src="britannia-good-day-goodday-cashew-biscuits-1-kg-product-images.webp" alt="berrymix" className='w-full h-40 object-center object-cover transform transition-transform duration-300 hover:scale-110' /></Link>
                                </div>
                                <button className='absolute right-1 top-2 text-xl'>
                                    {/* <IoIosHeartEmpty /> */}
                                    <IoMdHeart className='text-red-500' /></button>
                            </div>
                            <div className='card-details p-2 min-h-40 grid grid-cols-1'>
                                <div className='desc text-sm font-semibold '><Link to="" className='line-clamp-2'>Farmley Berries Mix 160g | 8-In-1 Healthly Snacks Contains Cranberry,Black</Link></div>
                                <div className='flex items-center price'><strong className='me-1 mb-1'>₹240</strong><span className='text-xs text-gray-400 font-semibold line-through'>₹199.00</span>
                                    <span className='text-xs text-red-500 font-semibold mb-1 ms-1 bg-slate-300 px-1 py-0.5'>50% OFF</span>

                                </div>

                                {/* <div><span className='text-sm text-red-500'><Link to="">More Details...</Link></span></div> */}
                                <button className='p-1 bg-orange-400 text-white text-sm rounded-full font-semibold place-self-end w-full'>Add Cart</button>
                            </div>

                        </div>
                        <div className='card-item hover:shadow-md overflow-hidden rounded-lg border border-gray-200'>
                            <div className='relative image-wraper flex justify-center p-4'>
                                <div className='card-img max-w-[200px] max-h-[200px] '>
                                    <Link to=""><img src="french_fries.webp" alt="berrymix" className='w-full h-40 object-center object-cover transform transition-transform duration-300 hover:scale-110' /></Link>
                                </div>
                                <button className='absolute right-1 top-2 text-xl'>
                                    {/* <IoIosHeartEmpty /> */}
                                    <IoMdHeart className='text-red-500' /></button>
                            </div>
                            <div className='card-details p-2 min-h-40 grid grid-cols-1'>
                                <div className='desc text-sm font-semibold '><Link to="" className='line-clamp-2'>Farmley Berries Mix 160g | 8-In-1 Healthly Snacks Contains Cranberry,Black</Link></div>
                                <div className='flex items-center price'><strong className='me-1 mb-1'>₹240</strong><span className='text-xs text-gray-400 font-semibold line-through'>₹199.00</span>
                                    <span className='text-xs text-red-500 font-semibold mb-1 ms-1 bg-slate-300 px-1 py-0.5'>50% OFF</span>

                                </div>

                                {/* <div><span className='text-sm text-red-500'><Link to="">More Details...</Link></span></div> */}
                                <button className='p-1 bg-orange-400 text-white text-sm rounded-full font-semibold place-self-end w-full'>Add Cart</button>
                            </div>

                        </div>
                    </Slider>
                </div>

            </div>

            <div className='mt-10'>
                <h2 className='text-3xl font-Roboto font-normal tracking-wider text-center mb-6'>New Arrivals</h2>
                <div className='slider-container overflow-hidden' onMouseEnter={() => handleMouseEnter("slider2")}
                    onMouseLeave={() => handleMouseLeave("slider2")}>
                    <Slider {...sliderSettings("slider2")} className='flex'>



                        <div className='card-item hover:shadow-md overflow-hidden rounded-lg border border-gray-200'>
                            <div className='relative image-wraper flex justify-center p-4'>
                                <div className='card-img max-w-[200px] max-h-[200px] '>
                                    <Link to=""><img src="darkfantasy.webp" alt="berrymix" className='w-full h-40 object-center object-cover transform transition-transform duration-300 hover:scale-110' /></Link>
                                </div>
                                <button className='absolute right-1 top-2 text-xl'>
                                    {/* <IoIosHeartEmpty /> */}
                                    <IoMdHeart className='text-red-500' /></button>
                            </div>
                            <div className='card-details p-2 min-h-40 grid grid-cols-1'>
                                <div className='desc text-sm font-semibold '><Link to="" className='line-clamp-2'>Farmley Berries Mix 160g | 8-In-1 Healthly Snacks Contains Cranberry,Black</Link></div>
                                <div className='flex items-center price'><strong className='me-1 mb-1'>₹240</strong><span className='text-xs text-gray-400 font-semibold line-through'>₹199.00</span>
                                    <span className='text-xs text-red-500 font-semibold mb-1 ms-1 bg-slate-300 px-1 py-0.5'>50% OFF</span>

                                </div>

                                {/* <div><span className='text-sm text-red-500'><Link to="">More Details...</Link></span></div> */}
                                <button className='p-1 bg-orange-400 text-white text-sm rounded-full font-semibold place-self-end w-full'>Add Cart</button>
                            </div>

                        </div>
                        <div className='card-item hover:shadow-md overflow-hidden rounded-lg border border-gray-200 '>
                            <div className='relative image-wraper flex justify-center p-4'>
                                <div className='card-img max-w-[200px] max-h-[200px] '>
                                    <Link to=""><img src="mixnuts.webp" alt="berrymix" className='w-full h-40 object-center object-cover transform transition-transform duration-300 hover:scale-110' /></Link>
                                </div>
                                <button className='absolute right-1 top-2 text-xl'>
                                    {/* <IoIosHeartEmpty /> */}
                                    <IoMdHeart className='text-red-500' /></button>
                            </div>
                            <div className='card-details p-2 min-h-40 grid grid-cols-1'>
                                <div className='desc text-sm font-semibold '><Link to="" className='line-clamp-2'>Farmley Berries Mix 160g | 8-In-1 Healthly Snacks Contains Cranberry,Black</Link></div>
                                <div className='flex items-center price'><strong className='me-1 mb-1'>₹240</strong><span className='text-xs text-gray-400 font-semibold line-through'>₹199.00</span>
                                    <span className='text-xs text-red-500 font-semibold mb-1 ms-1 bg-slate-300 px-1 py-0.5'>50% OFF</span>

                                </div>

                                {/* <div><span className='text-sm text-red-500'><Link to="">More Details...</Link></span></div> */}
                                <button className='p-1 bg-orange-400 text-white text-sm rounded-full font-semibold place-self-end w-full'>Add Cart</button>
                            </div>

                        </div>
                        <div className='card-item hover:shadow-md overflow-hidden rounded-lg border border-gray-200 '>
                            <div className='relative image-wraper flex justify-center p-4'>
                                <div className='card-img max-w-[200px] max-h-[200px] '>
                                    <Link to=""><img src="berry_mix.webp" alt="berrymix" className='w-full h-40 object-center object-cover transform transition-transform duration-300 hover:scale-110' /></Link>
                                </div>
                                <button className='absolute right-1 top-2 text-xl'>
                                    {/* <IoIosHeartEmpty /> */}
                                    <IoMdHeart className='text-red-500' /></button>
                            </div>
                            <div className='card-details p-2 min-h-40 grid grid-cols-1'>
                                <div className='desc text-sm font-semibold '><Link to="" className='line-clamp-2'>Farmley Berries Mix 160g | 8-In-1 Healthly Snacks Contains Cranberry,Black</Link></div>
                                <div className='flex items-center price'><strong className='me-1 mb-1'>₹240</strong><span className='text-xs text-gray-400 font-semibold line-through'>₹199.00</span>
                                    <span className='text-xs text-red-500 font-semibold mb-1 ms-1 bg-slate-300 px-1 py-0.5'>50% OFF</span>

                                </div>

                                {/* <div><span className='text-sm text-red-500'><Link to="">More Details...</Link></span></div> */}
                                <button className='p-1 bg-orange-400 text-white text-sm rounded-full font-semibold place-self-end w-full'>Add Cart</button>
                            </div>

                        </div>
                        <div className='card-item hover:shadow-md overflow-hidden rounded-lg border border-gray-200 '>
                            <div className='relative image-wraper flex justify-center p-4'>
                                <div className='card-img max-w-[200px] max-h-[200px] '>
                                    <Link to=""><img src="sunfeast-dark-fantasy-choco-fills-275g-product-images.webp" alt="berrymix" className='w-full h-40 object-center object-cover transform transition-transform duration-300 hover:scale-110' /></Link>
                                </div>
                                <button className='absolute right-1 top-2 text-xl'>
                                    {/* <IoIosHeartEmpty /> */}
                                    <IoMdHeart className='text-red-500' /></button>
                            </div>
                            <div className='card-details p-2 min-h-40 grid grid-cols-1'>
                                <div className='desc text-sm font-semibold '><Link to="" className='line-clamp-2'>Farmley Berries Mix 160g | 8-In-1 Healthly Snacks Contains Cranberry,Black</Link></div>
                                <div className='flex items-center price'><strong className='me-1 mb-1'>₹240</strong><span className='text-xs text-gray-400 font-semibold line-through'>₹199.00</span>
                                    <span className='text-xs text-red-500 font-semibold mb-1 ms-1 bg-slate-300 px-1 py-0.5'>50% OFF</span>

                                </div>

                                {/* <div><span className='text-sm text-red-500'><Link to="">More Details...</Link></span></div> */}
                                <button className='p-1 bg-orange-400 text-white text-sm rounded-full font-semibold place-self-end w-full'>Add Cart</button>
                            </div>

                        </div>
                        <div className='card-item hover:shadow-md overflow-hidden rounded-lg border border-gray-200'>
                            <div className='relative image-wraper flex justify-center p-4'>
                                <div className='card-img max-w-[200px] max-h-[200px] '>
                                    <Link to=""><img src="britannia-good-day-goodday-cashew-biscuits-1-kg-product-images.webp" alt="berrymix" className='w-full h-40 object-center object-cover transform transition-transform duration-300 hover:scale-110' /></Link>
                                </div>
                                <button className='absolute right-1 top-2 text-xl'>
                                    {/* <IoIosHeartEmpty /> */}
                                    <IoMdHeart className='text-red-500' /></button>
                            </div>
                            <div className='card-details p-2 min-h-40 grid grid-cols-1'>
                                <div className='desc text-sm font-semibold '><Link to="" className='line-clamp-2'>Farmley Berries Mix 160g | 8-In-1 Healthly Snacks Contains Cranberry,Black</Link></div>
                                <div className='flex items-center price'><strong className='me-1 mb-1'>₹240</strong><span className='text-xs text-gray-400 font-semibold line-through'>₹199.00</span>
                                    <span className='text-xs text-red-500 font-semibold mb-1 ms-1 bg-slate-300 px-1 py-0.5'>50% OFF</span>

                                </div>

                                {/* <div><span className='text-sm text-red-500'><Link to="">More Details...</Link></span></div> */}
                                <button className='p-1 bg-orange-400 text-white text-sm rounded-full font-semibold place-self-end w-full'>Add Cart</button>
                            </div>

                        </div>
                        <div className='card-item hover:shadow-md overflow-hidden rounded-lg border border-gray-200'>
                            <div className='relative image-wraper flex justify-center p-4'>
                                <div className='card-img max-w-[200px] max-h-[200px] '>
                                    <Link to=""><img src="french_fries.webp" alt="berrymix" className='w-full h-40 object-center object-cover transform transition-transform duration-300 hover:scale-110' /></Link>
                                </div>
                                <button className='absolute right-1 top-2 text-xl'>
                                    {/* <IoIosHeartEmpty /> */}
                                    <IoMdHeart className='text-red-500' /></button>
                            </div>
                            <div className='card-details p-2 min-h-40 grid grid-cols-1'>
                                <div className='desc text-sm font-semibold '><Link to="" className='line-clamp-2'>Farmley Berries Mix 160g | 8-In-1 Healthly Snacks Contains Cranberry,Black</Link></div>
                                <div className='flex items-center price'><strong className='me-1 mb-1'>₹240</strong><span className='text-xs text-gray-400 font-semibold line-through'>₹199.00</span>
                                    <span className='text-xs text-red-500 font-semibold mb-1 ms-1 bg-slate-300 px-1 py-0.5'>50% OFF</span>

                                </div>

                                {/* <div><span className='text-sm text-red-500'><Link to="">More Details...</Link></span></div> */}
                                <button className='p-1 bg-orange-400 text-white text-sm rounded-full font-semibold place-self-end w-full'>Add Cart</button>
                            </div>

                        </div>
                    </Slider>
                </div>
               
            </div>
            <div className='mt-10'>
                <div className='grid md:grid-cols-5 grid-cols-1  gap-6'>
                    <div className="bg-[url('/discountbannercar.jpg')] bg-cover bg-no-repeat bg-center md:col-span-3 col-span-1 w-full h-60 relative">

                        <div className='absolute inset-0 text-white flex flex-col justify-center p-8'>
                            <div>
                                <h3 className='text-2xl font-semibold mb-2'>Items on SALE</h3>
                                <p className='font-medium'>Discount up to 15%</p>
                                <button className='mt-3 font-semibold border-b-2 border-transparent hover:border-white rounded-md transition-all transform-cpu duration-500 pb-1'>Shop Now</button>
                            </div>

                        </div>

                    </div>
                    <div className='grid grid-rows-2 md:col-span-2 col-span-1  gap-4'>
                        <div className="bg-[url('/combo_offer.jpg')] bg-cover bg-no-repeat bg-center w-full h-28  relative">
                            <div className='absolute inset-0 text-white flex flex-col justify-center p-8'>
                                <div>
                                    <h3 className='text-2xl font-semibold mb-2'>Combo offers</h3>
                                    <p className='font-medium'>Discount up to 15%</p>
                                    <button className='mt-3 font-semibold border-b-2 border-transparent hover:border-white rounded-md transition-all transform-cpu duration-500 pb-1'>Shop Now</button>
                                </div>

                            </div>
                        </div>
                        <div className="bg-[url('/playingcard_banner.jpg')] bg-cover bg-no-repeat bg-center w-full h-28 relative">
                            <div className='absolute inset-0 text-white flex flex-col justify-center p-8'>
                                <div>
                                    <h3 className='text-2xl font-semibold mb-2'>Discount Coupons</h3>
                                    <p className='font-medium'>Discount up to 15%</p>
                                    <button className='mt-3 font-semibold border-b-2 border-transparent hover:border-white rounded-md transition-all transform-cpu duration-500 pb-1'>Shop Now</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        <Footer />
    </>
    )
}

export default Home