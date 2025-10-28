import React, { useEffect, useRef, useState } from 'react'
import { assets } from "@/public/assets/assets";

import Image from 'next/image';

export default function Navbar({isDarkMode , setIsDarkMode}) {

    const [isScroll, setIsScroll] = useState(false)

    const sideMenuRef = useRef()

    const openMenu = () =>{
        sideMenuRef.current.style.transform = 'translatex(-16rem)'
    }

    const closeMenu = () =>{
        sideMenuRef.current.style.transform = 'translatex(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if (scrollY > 50) {
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        })
    },[])


    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={ assets.header_bg_color} alt='img' className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? " bg-white/50 backdrop-blur-lg shadow-sm dark:bg-dark-them dark:shadow-white/20" : undefined}`}>
                <a href="#top">
                    <h5 className={`font-semibold text-3xl ${ isDarkMode ? 'text-white' :  'text-gray-800'}`}>Omar<span className='text-red-500'>.</span></h5>
                </a>
                <ul className={`hidden md:flex gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"} `}>
                    <li><a className='!font-Ovo' href="#top">Home</a></li>
                    <li><a className='!font-Ovo' href="#about">About me</a></li>
                    <li><a className='!font-Ovo' href="#work">My Work</a></li>
                    <li><a className='!font-Ovo' href="#contact">Contact me</a></li>
                </ul>
                <div className='flex items-center gap-4'>
                    <button onClick={()=>setIsDarkMode(prev => !prev)} className='cursor-pointer'>
                        <Image src={ isDarkMode ? assets.sun_icon :assets.moon_icon} alt='toggle' className='w-6' />
                    </button>

                    <a href="#contact" className='!font-Ovo hidden lg:flex items-center gap-2 px-10 py-2.5 rounded-full border border-gray-500 ml-4 dark:border-white/50 '>Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-3' /></a>

                    <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white :  assets.menu_black} alt='menu' className='w-6' />
                    </button>
                </div>

                {/* -------mobail menu------- */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 w-64 z-50 fixed -right-64 top-0 bottom-0 h-screen bg-rose-50 transition duration-500 dark:bg-dark-hover dark:text-white'>
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={isDarkMode ?  assets.close_white : assets.close_black} alt='close ' className='cursor-pointer w-5'/>
                    </div>

                    <li><a className='!font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='!font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className='!font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className='!font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}
