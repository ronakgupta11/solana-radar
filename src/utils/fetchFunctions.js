import { PublicKey } from '@solana/web3.js';
import { getProvider, getProgram } from './anchor';

export const fetchAllTasks = async (connection, wallet) => {
  if (!connection || !wallet) return;

  try {
    const provider = getProvider(connection, wallet);
    const program = getProgram(provider);

    // Fetch all accounts of type "task" from the program
    const allTaskAccounts = await program.account.taskAccount.all();

    const tasks = allTaskAccounts.map(account => ({
      publicKey: account.publicKey.toString(),
      creator: account.account.creator.toString(),
      taskID : account.account.taskCount.toString(),
      description: account.account.taskDescription,
      approvedWorker: account.account.approvedWorker?.toString(),
      workerRequests: account.account.workerRequests.map(worker => worker.toString()),
    }));

    return tasks; // Returns the array of task objects
  } catch (err) {
    console.error('Error fetching all tasks:', err);
    return [];
  }
};


export const fetchTasksForACreator = async (connection, wallet, creatorPublicKey) => {
  if (!connection || !wallet || !creatorPublicKey) return;

  try {
    const provider = getProvider(connection, wallet);
    const program = getProgram(provider);

    // Fetch all task accounts filtered by the creator's public key
    const taskAccounts = await program.account.taskAccount.all([
      {
        memcmp: {
          offset: 8, // Offset where creator is stored in the task account
          bytes: creatorPublicKey.toBase58(),
        },
      },
    ]);

    const tasks = taskAccounts.map(account => ({
      publicKey: account.publicKey.toString(),
      description: account.account.description,
      approvedWorker: account.account.approvedWorker?.toString(),
      workerRequests: account.account.workerRequests.map(worker => worker.toString()),
    }));

    return tasks; // Returns the array of task objects for this creator
  } catch (err) {
    console.error('Error fetching tasks for creator:', err);
    return [];
  }
};




export const fetchWorkerRequestsOnTask = async (connection, wallet, taskCreatorPublicKey, taskCount) => {
  if (!connection || !wallet || !taskCreatorPublicKey || taskCount === undefined) return;

  try {
    const provider = getProvider(connection, wallet);
    const program = getProgram(provider);

    // Derive the task PDA using the task creator's public key and task count
    const [taskAccount] = PublicKey.findProgramAddressSync(
      [Buffer.from("task"), taskCreatorPublicKey.toBuffer(), Buffer.from(new anchor.BN(taskCount).toArray("le", 8))],
      program.programId
    );

    const taskData = await program.account.taskAccount.fetch(taskAccount);

    // Map the worker requests to return readable public key strings
    const workerRequests = taskData.workerRequests.map(worker => worker.toString());

    return workerRequests; // Returns the array of worker public keys that requested to work on this task
  } catch (err) {
    console.error('Error fetching worker requests on task:', err);
    return [];
  }
};



export const fetchApprovedWorkerOnTask = async (connection, wallet, taskCreatorPublicKey, taskCount) => {
  if (!connection || !wallet || !taskCreatorPublicKey || taskCount === undefined) return;

  try {
    const provider = getProvider(connection, wallet);
    const program = getProgram(provider);

    // Derive the task PDA using the task creator's public key and task count
    const [taskAccount] = PublicKey.findProgramAddressSync(
      [Buffer.from("task"), taskCreatorPublicKey.toBuffer(), Buffer.from(new anchor.BN(taskCount).toArray("le", 8))],
      program.programId
    );

    const taskData = await program.account.taskAccount.fetch(taskAccount);

    // Return the approved worker's public key as a string
    return taskData.approvedWorker?.toString() || null;
  } catch (err) {
    console.error('Error fetching approved worker on task:', err);
    return null;
  }
};
