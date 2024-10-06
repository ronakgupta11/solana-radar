
"use client";


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useWallet,useConnection } from "@solana/wallet-adapter-react";
import { FiCopy } from 'react-icons/fi';
export default function ProfileCard() {
   const userData = {
        name: "John Doe",
        address : "0xc0E3...B79C",
        tasksCreated:"2",
        tasksCompleted:"0"
    }
  const { wallet,publicKey } = useWallet();
  const truncateAddress = (address) => {
    if (!address) return '';
    const firstPart = address.slice(0, 5);
    const lastPart = address.slice(-4);
    return `${firstPart}...${lastPart}`;
  };

  // Function to copy the address to clipboard
  const copyAddress = () => {
    if (publicKey) {
      navigator.clipboard.writeText(publicKey.toBase58());
      setCopied(true);

      // Reset the copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    }
  };
  return (
    <>
    <div className="flex flex-col gap-10">

    
  { publicKey && <Card className="w-[28rem] mt-4">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-y-3">
      <div className="flex justify-between ">
        <p>Name </p>
        <p>{wallet?.name||"User"}</p>
      </div>
      <div className="flex justify-between ">
        <p>Address </p>
        <div className="flex gap-2">
        <p> {truncateAddress(publicKey?.toBase58())}</p>
        <button onClick={copyAddress} className="text-gray-400 hover:text-white">
            <FiCopy />
          </button>
        </div>
      </div>
      <div className="border-t border-gray-600  "></div>
      <div className="flex justify-between ">
        <p>Tasks Created </p>
        <p>{userData.tasksCreated}</p>
      </div>
      <div className="flex justify-between ">
        <p>Tasks Complted </p>
        <p>{userData.tasksCompleted}</p>
      </div>
      <div className="border-t border-gray-600  "></div>
        </div>
      </CardContent>
      
    </Card>}
    </div>
    </>
  );
}
