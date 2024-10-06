// src/components/CreateTask.tsx
"use client";
import React, { useState, useCallback } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { getProvider, getProgram } from '../../../utils/anchor';
import { PublicKey } from '@solana/web3.js';
import * as anchor from '@project-serum/anchor';
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { cn } from "@/lib/utils"; 

import { Loader } from '../Loader';
const CreateTask = () => {
  const { connection } = useConnection();
  const { publicKey, wallet ,sendTransaction} = useWallet();
  const [taskDescription, setTaskDescription] = useState('');
  const [isLoading,setIsLoading]=useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const createTask = useCallback(
    async () => {
      if (!publicKey || !wallet || !taskDescription) return;

      try {
        setIsLoading(true)
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

        const tx = await program.methods.createTask(taskDescription).accounts({
          user: publicKey,
          userDataAccount,
          taskAccount,
          systemProgram: anchor.web3.SystemProgram.programId,
        }).instruction()


                // Create the transaction and add the instruction
                const transaction = new anchor.web3.Transaction().add(tx);

                // Send the transaction using sendTransaction from the wallet adapter
                const signature = await sendTransaction(transaction, connection);
                
                // Confirm the transaction
                await connection.confirmTransaction(signature, 'processed');

                console.log(`task created successfully! Transaction signature: ${signature}`);
        setIsLoading(false)

        console.log("Task created successfully!");
      } catch (err) {
        console.error('Error creating task:', err);
      }
    },
    [connection, publicKey, wallet, taskDescription]
  );

  return (
    <div>
    {isLoading &&  <div className='absolute left-[50%] top-[50%]'>
        <Loader message={"Creating New Task..."}/>
      </div>}
   {!isLoading &&  <div
      className="max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Upload Your Task
      </h2>
      
      <form className="my-8" onSubmit={handleSubmit}>
      <LabelInputContainer className="mb-4">
          <Label htmlFor="TaskName">Task Name</Label>
          <Input id="TaskName" placeholder="Data Labelling"  />
        </LabelInputContainer>
      <LabelInputContainer className="mb-4">
          <Label htmlFor="documentLink">Document Link</Label>
          <Input id="documentLink" placeholder="https://"  />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label  htmlFor="instructions">Instructions</Label>
          <Input onChange={(e)=>{setTaskDescription(e.target.value)}}  id="instructions"  />
        </LabelInputContainer>
        <button
      onClick={createTask}
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit">
          Create Task &rarr;
          <BottomGradient />
        </button>
        <div
          className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />  
      </form>
    </div>}
      
    </div>
  );
};

const BottomGradient = () => {
  return (<>
    <span
      className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span
      className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>);
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    (<div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>)
  );
};

export default CreateTask;
