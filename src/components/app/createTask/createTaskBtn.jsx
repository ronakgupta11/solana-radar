// src/components/CreateTask.tsx
"use client";
import React, { useState, useCallback } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { getProvider, getProgram } from '../../../utils/anchor';
import { PublicKey } from '@solana/web3.js';
import * as anchor from '@project-serum/anchor';

const CreateTask = () => {
  const { connection } = useConnection();
  const { publicKey, wallet } = useWallet();
  const [taskDescription, setTaskDescription] = useState('');

  const createTask = useCallback(
    async () => {
      if (!publicKey || !wallet || !taskDescription) return;

      try {
        const provider = getProvider(connection, wallet);
        const program = getProgram(provider);

        const [userDataAccount] = PublicKey.findProgramAddressSync(
          [Buffer.from("user-data"), publicKey.toBuffer()],
          program.programId
        );

        const userAccount = await program.account.userDataAccount.fetch(userDataAccount);
        const taskCount = userAccount.taskCount;

        const [taskAccount] = PublicKey.findProgramAddressSync(
          [Buffer.from("task"), publicKey.toBuffer(), Buffer.from(new anchor.BN(taskCount).toArray("le", 8))],
          program.programId
        );

        await program.methods.createTask(taskDescription).accounts({
          user: publicKey,
          userDataAccount,
          taskAccount,
          systemProgram: anchor.web3.SystemProgram.programId,
        }).rpc();

        console.log("Task created successfully!");
      } catch (err) {
        console.error('Error creating task:', err);
      }
    },
    [connection, publicKey, wallet, taskDescription]
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button onClick={createTask} className="btn-primary">Create Task</button>
    </div>
  );
};

export default CreateTask;
