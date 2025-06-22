import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ICONS } from '@/constants'
import DropdownList from './DropdownList'

const Header = ({subHeader , title , userImg}: SharedHeaderProps) => {
  return (
    <header className='header'>
        <section className=' header-container'>

            <div className='ditails flex items-center gap-4'>
            {userImg &&(
                 <Image src={userImg || '/assets/images/dummy.jpg'} alt="User profile image" width={60} height={60} className='rounded-full' />


            )}
            <article>
                <p >{subHeader}</p>
                <h1 >{title}</h1>
            </article>
            </div>

            <aside>
                <Link href="/upload">
                    <Image src="/assets/icons/upload.svg" alt="upload Icon" width={16} height={16}  />
                    <span> upload the videa</span>

                </Link>

                <div className='record '>
                <button className=' primary-btn'>
                    <Image src={ICONS.record} alt="record " width={16} height={16}  />
                    <span> logout</span>
                </button>

                </div>
              
            </aside>
                

        </section>

        <section className='search-filter relative'>
            <div className=' search '>
     <input type="text" placeholder='serach for videos ,tags ,folders,...'/>

     <Image src="/assets/icons/search.svg" alt="search " width={16} height={16}  />

            </div>

            <DropdownList />
        </section>
    </header>
  )
}

export default Header