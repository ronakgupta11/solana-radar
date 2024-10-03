import React from 'react'
import GlobeDemo from '@/components/example/globe-demo'
import Features from './Features'
const MidDescription = () => {
  return (
    <>
    <div className='bg-[black] flex justify-evenly h-[95vh]'>
     <div className='w-[50%]'>
      <Features/>
     </div>
     <div className='w-[40%] '>
     <GlobeDemo/>
     </div>
    </div>
    </>
  )
}

export default MidDescription