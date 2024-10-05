import React from 'react'
import GlobeDemo from '@/components/example/globe-demo'
import Features from './Features'
const MidDescription = () => {
  return (
    <>
    <div className='bg-[black] flex flex-col-reverse sm:flex-row justify-evenly  mt-10'>
     <div className='sm:w-[50%] w-full'>
      <Features/>
     </div>
     <div className='sm:w-[40%] w-full hidden sm:block '>
     <GlobeDemo/>
     </div>
    </div>
    </>
  )
}

export default MidDescription