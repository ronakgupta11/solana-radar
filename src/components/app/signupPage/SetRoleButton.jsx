"use client"
import React, { useCallback } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { getProvider, getProgram } from '../../../utils/anchor';
import { PublicKey } from '@solana/web3.js';
import * as anchor from '@project-serum/anchor';

const SetRole = ({role}) => {
    const { connection } = useConnection();
    const { publicKey, wallet, sendTransaction } = useWallet();
    
    const setRole = useCallback(
        async (role) => {
            if (!publicKey || !wallet) return;

            try {
                const provider = getProvider(connection, wallet);
                const program = getProgram(provider);

                // Derive the PDA for the user
                const [userDataAccount, bump] = await PublicKey.findProgramAddressSync(
                    [Buffer.from("user-data"), publicKey.toBuffer()],
                    program.programId
                );

                // Create the transaction instruction
                let tx;
                if (role === 'requester') {
                    tx = await program.methods.setRequester()
                        .accounts({
                            userDataAccount,
                            user: publicKey,
                            systemProgram: anchor.web3.SystemProgram.programId,
                        })
                        .instruction();  // Only create instruction
                } else if (role === 'worker') {
                    tx = await program.methods.setWorker()
                        .accounts({
                            userDataAccount,
                            user: publicKey,
                            systemProgram: anchor.web3.SystemProgram.programId,
                        })
                        .instruction();
                }

                // Create the transaction and add the instruction
                const transaction = new anchor.web3.Transaction().add(tx);

                // Send the transaction using sendTransaction from the wallet adapter
                const signature = await sendTransaction(transaction, connection);
                
                // Confirm the transaction
                await connection.confirmTransaction(signature, 'processed');

                console.log(`${role} role set successfully! Transaction signature: ${signature}`);
            } catch (err) {
                console.error('Error setting role:', err);
            }
        },
        [connection, publicKey, wallet, sendTransaction]
    );

    return (
        <button 
            onClick={() => setRole(role)}
            className="rounded-full pl-3 pr-2 py-2 text-white flex items-center space-x-1  mt-4 text-xs font-bold bg-zinc-800"
        >
            <span>{role === "requester" ? "Set as Requester" : "Set as Worker"}</span>
        </button>
    );
};

export default SetRole;
