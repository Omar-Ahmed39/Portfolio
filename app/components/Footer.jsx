import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'

export default function Footer({isDarkMode}) {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <a href="#top">
                    <h5 className={`font-semibold text-4xl ${isDarkMode ? 'text-white' : 'text-gray-800'}  mb-2`}>Omar<span className='text-red-500'>.</span></h5>
                </a>
                <div className='flex w-max items-center gap-2 mx-auto'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
                    omarahmed3915@gmail.com
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2025 Omar Ahmed. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/Omar-Ahmed39">GitHub</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/omar-ahmed-59b284364">LinkedIn</a></li>
                    <li><a target='_blank' href="https://www.facebook.com/omar.king.93">Facebook</a></li>
                </ul>
            </div>
        </div>
    )
}
