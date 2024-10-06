"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BackgroundGradientDemo from '@/components/example/background-gradient-demo';
import GradientCard from '../../components/app/signupPage/GradientCard';
import GradientCard2 from '../../components/app/signupPage/GradientCard2';
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from '@solana/web3.js';
import * as anchor from '@project-serum/anchor';
import { getProvider, getProgram } from '../../utils/anchor';
import Navbar from '@/components/app/Navbar';

const page = () => {
  const router = useRouter(); // Initialize router
  const { connection } = useConnection();
  const { publicKey, connected } = useWallet();

  useEffect(() => {
    const checkUserRole = async () => {
      if (!connected || !publicKey) return; // Ensure the user is connected

      const provider = getProvider(connection, publicKey);
      const program = getProgram(provider);

      // Derive the PDA for the user
      const [userDataAccount] = await PublicKey.findProgramAddressSync(
        [Buffer.from("user-data"), publicKey.toBuffer()],
        program.programId
      );

      // Fetch the user data account
      try {
        const userData = await program.account.userDataAccount.fetch(userDataAccount);
        console.log(userData.role)
        const userRole = userData.role;
        // Redirect based on the user's role
        if (userRole && 'requester' in userRole) { 
          
          // Assuming 1 is for Requester
          router.push('/dashboard/createTask'); // Redirect to requester page
        } else if (userRole && 'worker' in userRole) { // Assuming 2 is for Worker
          router.push('/dashboard/explore'); // Redirect to worker page
        }
      } catch (err) {
        console.error('Error fetching user data account:', err);
        // If the account doesn't exist or another error occurs, stay on the same page
      }
    };

    checkUserRole();
  }, [connection, publicKey, connected]);

  return (
    <>
    <Navbar/>
      <div className='flex gap-y-5 flex-col md:flex-row align-middle items-center justify-evenly mt-[4rem]'>
        <div className='md:w-[25%] bg-black'>
          <GradientCard connected={connected} />
        </div>
        <div className='md:w-[25%] bg-black'>
          <GradientCard2 connected={connected} />
        </div>
      </div>
    </>
  );
};

export default page;
