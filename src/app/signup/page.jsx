import React from 'react'
import BackgroundGradientDemo from '@/components/example/background-gradient-demo'
import GradientCard from '../components/signupPage/GradientCard'
import GradientCard2 from '../components/signupPage/GradientCard2'
const page = () => {
  return (
    <>
    <div className='flex gap-y-5 flex-col md:flex-row align-middle items-center justify-evenly mt-[4rem]'>

    <div className='md:w-[25%] bg-black'>
        <GradientCard />
    </div>
    <div className='md:w-[25%] bg-black'>
        <GradientCard2/>
    </div>
    </div>
    </>
  )
}

export default page