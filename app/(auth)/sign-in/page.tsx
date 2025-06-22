          'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { authClient } from '@/lib/auth-client'

const page = () => {
  const handlSignIN = async () => {
    await authClient.signIn.social({ provider: 'google' });
  };
  



  return (
    <main className='sign-in'>
      <aside className='testimonial'>
        <Link href="/">
        <Image src="/assets/icons/logo.svg" alt=" image" width={32} height={32}  />
        <h1>SnapCat</h1>
        </Link>

        <div className='description'>
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image 
                  key={index} 
                  src="/assets/icons/star.svg"
                  alt="star" 
                  width={20} 
                  height={20} 
                />
              ))}
            </figure>
            <p>Snapcast make screnn recording esay.From quick walkthroughs to full presentation . its the smooth  , and shareable in seconds </p>
            <article>
              <Image 
                src="/assets/images/jason.png" 
                alt="user image" 
                width={46} 
                height={46 } 
                className='rounded-full' 
              />
              <div>
                <h2>
                  jason Rive
                </h2>
                <p>prodect designer , Meta</p>
              </div>
              
            </article>
          </section>



        </div>
        <p> SnapCat{new Date().getFullYear()}</p>

      </aside>

      <aside className='google-sign-in'>

        <section>
          <Link href="/"  >
            <Image 
              src="/assets/icons/logo.svg" 
              alt="logo" 
              width={41} 
              height={41} 
            />
            <h1>SnapCat</h1>
            
          
          </Link>
          <p>create and shart your vedeo <span>
            SnapCat</span> in any time</p>

            <button  onClick={handlSignIN}>
              <Image 
                src="/assets/icons/google.svg" 
                alt="google icon" 
                width={20} 
                height={20} 
              />
              <span>Sign in with Google</span>
            </button>
        </section>
      </aside>
      <div className='overlay'></div>

    </main>
  )
}

export default page