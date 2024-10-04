// src/components/ApproveWorker.tsx
"use client";
import React, { useCallback } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { getProvider, getProgram } from '../../../utils/anchor';
import { PublicKey } from '@solana/web3.js';
import * as anchor from '@project-serum/anchor';

const ApproveWorker = ({ taskCreator, taskCount, workerToApprove }) => {
  const { connection } = useConnection();
  const { publicKey, wallet,sendTransaction } = useWallet();

  const approveWorker = useCallback(
    async () => {
      if (!publicKey || !wallet) return;

      try {
        const provider = getProvider(connection, wallet);
        const program = getProgram(provider);

        const [taskAccount] = PublicKey.findProgramAddressSync(
          [Buffer.from("task"), taskCreator.toBuffer(), Buffer.from(new anchor.BN(taskCount).toArray("le", 8))],
          program.programId
        );

        const tx = await program.methods.approveWorker(workerToApprove).accounts({
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
    [connection, publicKey, wallet, taskCreator, taskCount, workerToApprove]
  );

  return (
    <button onClick={approveWorker} className="btn-primary">Approve Worker</button>
  );
};

export default ApproveWorker;
