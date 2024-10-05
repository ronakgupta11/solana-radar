"use client"
import React, { useEffect, useState } from 'react'
import { cn } from "@/lib/utils";
import Image from "next/image";
import SendRequest from '../sendRequest/sendRequestBtn';
import { useWallet } from '@solana/wallet-adapter-react';
import SubmitModal from '../submitSolution/submitModal';

const TaskCardForLabeler = ({cardData}) => {
  const {publicKey} = useWallet()
  const [status,setStatus] = useState("none")
  const isWorkerInRequests = (workerPublicKey, workerRequests) => {
    // Check if the workerPublicKey exists in the workerRequests array
    return workerRequests.some(request => (request == workerPublicKey));
  };

  useEffect(()=>{
    if (isWorkerInRequests(publicKey, cardData?.workerRequests)) {
    
      setStatus("waiting")
      console.log('Worker is in requests!');
    } 
  
  
  if(cardData?.approvedWorker == publicKey.toString()){
    setStatus("approved")
  }else if(cardData?.approvedWorker){
    setStatus("rejected")
  }
    
  },[publicKey,cardData])




  return (<div className="max-w-xs w-full group/card ">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-auto rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "border-gray-800 border-[0.1px]"
        )}>
          

        <div
          className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          
          <div className="flex flex-col">
            <p className="text-sm text-gray-400">{cardData?.creator || "0xc0E3...B79C"}</p>
            <img className="my-4" src="https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80" alt="Data Labeling Image" />
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {cardData?.name || "Data Lablelling for Healthcare records"}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
           {cardData?.description || "Data Lablelling for ICE  for highlighting health records"} 
          </p>
          <p className="font-normal text-sm text-gray-400 relative z-10 my-4">
           {(cardData?.workerRequests)?.length>0 ?`Worker Requests: ${(cardData?.workerRequests)?.length}`: "New Task"} 
          </p>
{status =="none" && <SendRequest taskCount={cardData?.taskID} taskCreator={cardData?.creator}/>}
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
  </button>}
        </div>
      </div>
    </div>
  )
}

export default TaskCardForLabeler

