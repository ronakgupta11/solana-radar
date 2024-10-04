// src/utils/anchor.ts
import * as anchor from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';

export const PROGRAM_ID = new PublicKey('4ptzi7XATHyFPSTapfFQrxPa8PXWkfjG2PSYXQo13Exg');

export const getProvider = (connection, wallet) => {
    const provider = new anchor.AnchorProvider(
        connection,
        wallet,
        anchor.AnchorProvider.defaultOptions(),
    );
    return provider;
};

export const getProgram = (provider) => {
    const idl = require('../idl/data_labeling_marketplace.json'); // The IDL file
    const program = new anchor.Program(idl, PROGRAM_ID, provider);
    return program;
};
