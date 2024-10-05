// src/components/SubmitSolution.tsx
"use client";
import React, { useState, useCallback } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { getProvider, getProgram } from '../../../utils/anchor';
import { PublicKey } from '@solana/web3.js';
import * as anchor from '@project-serum/anchor';

const SubmitSolution = ({ taskCreator, taskCount,solution }) => {
  const { connection } = useConnection();
  const { publicKey, wallet,sendTransaction } = useWallet();


  const submitSolution = useCallback(
    async () => {
      if (!publicKey || !wallet || !solution) return;

      try {
        const provider = getProvider(connection, wallet);
        const program = getProgram(provider);

        const [taskAccount] = PublicKey.findProgramAddressSync(
          [Buffer.from("task"), taskCreator.toBuffer(), Buffer.from(new anchor.BN(taskCount).toArray("le", 8))],
          program.programId
        );

        const tx = await program.methods.submitSolution(solution).accounts({
          worker: publicKey,
          taskAccount,
        }).instruction();

         // Create the transaction and add the instruction
         const transaction = new anchor.web3.Transaction().add(tx);

         // Send the transaction using sendTransaction from the wallet adapter
         const signature = await sendTransaction(transaction, connection);
         
         // Confirm the transaction
         await connection.confirmTransaction(signature, 'processed');

         console.log(` Sent successfully! Transaction signature: ${signature}`);

        console.log("Solution submitted successfully!");
      } catch (err) {
        console.error('Error submitting solution:', err);
      }
    },
    [connection, publicKey, wallet, solution, taskCreator, taskCount]
  );

  return (
    <div>
      <button onClick={submitSolution}      
              className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28"
      >Submit</button>
    </div>
  );
};

export default SubmitSolution
