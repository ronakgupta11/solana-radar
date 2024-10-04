// src/components/SubmitSolution.tsx
"use client";
import React, { useState, useCallback } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { getProvider, getProgram } from '../../../utils/anchor';
import { PublicKey } from '@solana/web3.js';
import * as anchor from '@project-serum/anchor';

const SubmitSolution = ({ taskCreator, taskCount }) => {
  const { connection } = useConnection();
  const { publicKey, wallet } = useWallet();
  const [solution, setSolution] = useState('');

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

        await program.methods.submitSolution(solution).accounts({
          worker: publicKey,
          taskAccount,
        }).rpc();

        console.log("Solution submitted successfully!");
      } catch (err) {
        console.error('Error submitting solution:', err);
      }
    },
    [connection, publicKey, wallet, solution, taskCreator, taskCount]
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Enter solution"
        value={solution}
        onChange={(e) => setSolution(e.target.value)}
      />
      <button onClick={submitSolution} className="btn-primary">Submit Solution</button>
    </div>
  );
};

export default SubmitSolution
