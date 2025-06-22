import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import { dummyCards } from '@/constants' // أو المسار الصحيح للـ constants

const page = ({params }: ParamsWithSearch) => {
  const {id} =  params ;
  return (
    <div className='wrapper page'>
      <Header subHeader="Youremail@gmail.com" title="FullName" userImg="/assets/images/dummy.jpg" /> 

      <section className='video-grid'>

      {dummyCards.map((card) => ( // إضافة { } للـ JSX expression
        <VideoCard key={card.id} {...card} /> // إضافة key prop
      ))}
      </section>
      
      </div>
  )
}

export default page