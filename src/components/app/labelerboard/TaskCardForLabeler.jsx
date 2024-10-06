"use client"
import React, { useEffect, useState } from 'react'
import SendRequest from '../sendRequest/sendRequestBtn';
import { useWallet } from '@solana/wallet-adapter-react';
import SubmitModal from '../submitSolution/submitModal';
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
const TaskCardForLabeler = ({cardData,index}) => {
  const data = cardData
  const {publicKey} = useWallet()
  const [status,setStatus] = useState("none")
  const isWorkerInRequests = (workerPublicKey, workerRequests) => {
    // Check if the workerPublicKey exists in the workerRequests array
    return workerRequests.some(request => (request == workerPublicKey));
  };
  useEffect(()=>{
    if(!publicKey){
      setStatus("none")
    }
    else if (isWorkerInRequests(publicKey, cardData?.workerRequests)) {
      setStatus("waiting")
      console.log('Worker is in requests!');
    } 
  if(cardData?.approvedWorker === publicKey.toString()){
    setStatus("approved")
  }else if(cardData?.approvedWorker){
    setStatus("rejected")
  }

  },[publicKey,cardData])





  return (
    <TableRow className="bg-black">
    <TableCell className="font-medium text-gray-900 dark:text-white">
      {data?.name || `Task ${index + 1}`}
    </TableCell>
    <TableCell>{data?.description}</TableCell>
    <TableCell>{data?.creator}</TableCell>
    <TableCell>{status =="none" && <SendRequest taskCount={cardData?.taskID} taskCreator={cardData?.creator}/>}
{status =="waiting" &&   <button
disabled={true}
className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
<span
className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
<span
className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
Waiting Approval
</span>
</button>}
{status =="approved" && <SubmitModal/>}
{status =="rejected" &&   <button
disabled={true}
className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
<span
className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
<span
className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
Rejected
</span>
</button>}</TableCell>
    
  </TableRow>
  )
}

export default TaskCardForLabeler

