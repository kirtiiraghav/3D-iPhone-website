import React from 'react'
import { footerLinks } from '../constants'

export default function Footer() {
    return (
        <footer className='py-5 sm:px-10 px-5'>
            <div className='screen-max-width'>
                <div>
                    <p className="font-semibold text-gray text-xs">More ways to shop:
                        <span className="underline text-blue"> Find an Apple Store </span>
                        or
                        <span className="underline text-blue"> other retailer </span>
                        near you.</p>
                    <p className="font-semibold text-gray text-xs">Or call 000800-123-4567.</p>
                </div>

                <div className="bg-neutral-700 my-5 h-[1px] w-full"></div>

                <div className="flex md:flex-row flex-col md:items-center justify-between">
                    <p className="font-semibold text-gray text-xs">Copyright © 2024 Apple Inc. All rights reserved.</p>
                    <div className='flex'>
                        {footerLinks.map((link, i) => (<p key={i} className='font-semibold text-gray text-xs'> {link}
                            {i !== footerLinks.length - 1 && (
                                <span className="mx-2" > | </span>)
                            }
                        </p>
                        ))}
                    </div>
                </div>

                <div className="bg-neutral-700 my-5 h-[1px] w-full"></div>

                <p className='text-center text-sm text-gray'>Code by 
                    <a target='_blank' className='hover:text-white text-gray my-5 h-[1px] w-full' href='https://github.com/kirtiiraghav/iPhone-website'> Kirti Raghav</a> | Connect on
                    <a target='_blank' className='hover:text-white text-gray' href='https://www.linkedin.com/in/kirtiiraghav/'> LinkedIn
                    </a>
                </p>

            </div >
        </footer >
    )
}
