"use client"
import React from 'react'
import BackgroundGradientDemo from '@/components/example/background-gradient-demo'
import GradientCard from '../../components/app/signupPage/GradientCard'
import GradientCard2 from '../../components/app/signupPage/GradientCard2'
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

const page = () => {
  const {connection } = useConnection()
  const {connected} = useWallet()
  return (
    <>
    <div className='flex gap-y-5 flex-col md:flex-row align-middle items-center justify-evenly mt-[4rem]'>

    <div className='md:w-[25%] bg-black'>
        <GradientCard connected={connected} />
    </div>
    <div className='md:w-[25%] bg-black'>
        <GradientCard2 connected = {connected}/>
    </div>
    </div>
    </>
  )
}

export default page