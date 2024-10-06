// src/components/ApproveWorker.tsx
"use client";
import React, { useCallback } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { getProvider, getProgram } from '../../../utils/anchor';
import { PublicKey } from '@solana/web3.js';
import * as anchor from '@project-serum/anchor';

const ApproveWorker = ({ taskCount, workerToApprove }) => {
  const { connection } = useConnection();
  const { publicKey, wallet,sendTransaction } = useWallet();

  const approveWorker = useCallback(
    async () => {
      if (!publicKey || !wallet) return;

      try {
        const provider = getProvider(connection, wallet);
        const program = getProgram(provider);

        const [taskAccount] = PublicKey.findProgramAddressSync(
          [Buffer.from("task"), publicKey.toBuffer(), Buffer.from(new anchor.BN(taskCount).toArray("le", 8))],
          program.programId
        );

        const tx = await program.methods.approveWorker(new PublicKey(workerToApprove)).accounts({
          creator: publicKey,
          taskAccount,
        }).instruction();

         // Create the transaction and add the instruction
         const transaction = new anchor.web3.Transaction().add(tx);

         // Send the transaction using sendTransaction from the wallet adapter
         const signature = await sendTransaction(transaction, connection);
         
         // Confirm the transaction
         await connection.confirmTransaction(signature, 'processed');

         console.log(`Approved Successfully!, Transaction signature: ${signature}`);

        console.log("Worker approved successfully!");
      } catch (err) {
        console.error('Error approving worker:', err);
      }
    },
    [connection, publicKey, wallet, taskCount, workerToApprove]
  );

  return (
    <button onClick={approveWorker} className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
   Approve
</button>
   
  );
};

export default ApproveWorker;
