// src/components/SendRequest.tsx
"use client";
import React, { useCallback } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { getProvider, getProgram } from '../../../utils/anchor';
import { PublicKey } from '@solana/web3.js';
import * as anchor from '@project-serum/anchor';

const SendRequest = ({ taskCreator, taskCount }) => {
  const { connection } = useConnection();
  const { publicKey, wallet } = useWallet();

  const sendRequest = useCallback(
    async () => {
      if (!publicKey || !wallet) return;

      try {
        const provider = getProvider(connection, wallet);
        const program = getProgram(provider);

        const [taskAccount] = PublicKey.findProgramAddressSync(
          [Buffer.from("task"), taskCreator.toBuffer(), Buffer.from(new anchor.BN(taskCount).toArray("le", 8))],
          program.programId
        );

        await program.methods.sendRequest().accounts({
          worker: publicKey,
          taskAccount,
        }).rpc();

        console.log("Request sent to task successfully!");
      } catch (err) {
        console.error('Error sending request:', err);
      }
    },
    [connection, publicKey, wallet, taskCreator, taskCount]
  );

  return (
    <button onClick={sendRequest} className="btn-primary">Send Request</button>
  );
};

export default SendRequest;
