'use client'

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'

const DropdownList = () => {
const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='relative'>
        <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <div className='filter-trigger'>
                <figure>
                    <Image src="/assets/icons/hamburger.svg" alt="Filter Icon" width={14} height={14} />Most recent
                </figure>
            </div>
        </div>

        {isOpen && (
          <ul className='dropdown
          
        '>
            {["Most Viewed", "Most Recent"].map((option, index) => (
                <li key={option} className='px-3 py-2.5 text-sm font-medium -tracking-[0.8px] relative text-dark-100 cursor-pointer hover:bg-pink-100 hover:text-white transition-colors duration-200 ease-in-out rounded-md'>
                {option}
                </li>
            ))}
          </ul>
        )}
    </div>
  )
}

export default DropdownList