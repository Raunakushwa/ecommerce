import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='my-10 mt-40 text-sm'>

      {/* Main 3-column section */}
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14'>
        {/* Logo + description */}
        <div>
          <img src={assets.logo} alt="Logo" className='mb-5 w-32'/>
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis odit vel et. 
            Reprehenderit, corrupti fugiat. Nam asperiores quod optio quas at animi delectus? Veritatis, reprehenderit.
          </p>
        </div>

        {/* Company links */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-555-0123</li>
            <li>info@example.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright line */}
      <div>
        <hr className='mt-10'/>
        <p className='py-5 text-sm text-center text-gray-600'>
          Copyright 2024 © forever.com — All rights reserved.
        </p>
      </div>

    </div>
  )
}

export default Footer
