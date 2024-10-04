// src/components/SendRequest.tsx
"use client";
import React, { useCallback } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { getProvider, getProgram } from '../../../utils/anchor';
import { PublicKey } from '@solana/web3.js';
import * as anchor from '@project-serum/anchor';

const SendRequest = ({ taskCreator, taskCount }) => {
  const { connection } = useConnection();
  const { publicKey, wallet,sendTransaction } = useWallet();

  const sendRequest = useCallback(
    async () => {
      if (!publicKey || !wallet) return;

      try {
        const provider = getProvider(connection, wallet);
        const program = getProgram(provider);
        const taskCreatorPK = new PublicKey(taskCreator)

        const [taskAccount] = PublicKey.findProgramAddressSync(
          [Buffer.from("task"), taskCreatorPK.toBuffer(), Buffer.from(new anchor.BN(taskCount).toArray("le", 8))],
          program.programId
        );

        const tx = await program.methods.sendRequest().accounts({
          worker: publicKey,
          taskAccount,
        }).instruction();
          // Create the transaction and add the instruction
          const transaction = new anchor.web3.Transaction().add(tx);

          // Send the transaction using sendTransaction from the wallet adapter
          const signature = await sendTransaction(transaction, connection);
          
          // Confirm the transaction
          await connection.confirmTransaction(signature, 'processed');

          console.log(`Request Sent successfully! Transaction signature: ${signature}`);
        console.log("Request sent to task successfully!");
      } catch (err) {
        console.error('Error sending request:', err);
      }
    },
    [connection, publicKey, wallet, taskCreator, taskCount]
  );

  return (
    <button
    onClick={sendRequest}
    className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
    <span
      className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span
      className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
      Request Task
    </span>
  </button>
  );
};

export default SendRequest;
