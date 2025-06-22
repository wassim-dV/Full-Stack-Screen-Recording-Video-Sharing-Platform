import React from 'react'
import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import { dummyCards } from '@/constants' // أو المسار الصحيح للـ constants

const Page = () => {
  return (
    <main className='wrapper page'>
      <Header subHeader='Your SubHeader Text' title='Your Title Text' />
      {/* Add your header content here */}

      <h1 className='text-2xl font-karla'>test 1</h1> {/* تصحيح fond إلى font */}
      
      <section className='video-grid'>

      {dummyCards.map((card) => ( // إضافة { } للـ JSX expression
        <VideoCard key={card.id} {...card} /> // إضافة key prop
      ))}
      </section>
    </main>
  )
}

export default Page