"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useState, useEffect } from "react";
import TaskCardForLabeler from "../../../components/app/labelerboard/TaskCardForLabeler";
import Navbar from "@/components/app/Navbar";
import { fetchAllTasks } from "@/utils/fetchFunctions";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import SendRequest from "@/components/app/sendRequest/sendRequestBtn";
const page = () => {
  const { connection } = useConnection();
  const { wallet } = useWallet();
  const [tasks, setTasks] = useState([]);

  // Fetch all tasks on component mount
  useEffect(() => {
    const loadTasks = async () => {
      if (!connection || !wallet) return;

      try {
        const fetchedTasks = await fetchAllTasks(connection, wallet);
        setTasks(fetchedTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    loadTasks();
  }, [connection, wallet]);

  console.log(tasks);

  return (
    <>
      <div class="flex flex-col items-center gap-10 self-stretch">
        <div>
          <h2 class="text-white text-center font-work-sans text-[51px] font-semibold leading-[1.1] capitalize">
            Browse Marketplace
          </h2>
          <p class="text-white text-center font-work-sans text-[22px] font-normal leading-[1.6]">
            Empower AI by labeling data, earn rewards, and help build the future
            with precision.
          </p>
        </div>
      </div>
      <div className="flex flex-col    mt-3 pb-10">
        <Table className="rounded-xl w-full  text-white mt-3 flex-grow">
          <TableHeader>
            <TableRow className="text-white">
              <TableHead className="text-white">Name</TableHead>
              <TableHead className=" text-white">
                Instructions
              </TableHead>
              <TableHead className="text-white">Creator</TableHead>
              <TableHead className="text-white">Approval Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks?.map((data, index) => (
              <TableRow key={index} className="bg-black">
                <TableCell className="font-medium text-gray-900 dark:text-white">
                  {data?.name || `Task ${index + 1}`}
                </TableCell>
                <TableCell>{data?.description}</TableCell>
                <TableCell>{data?.creator}</TableCell>
                <TableCell><SendRequest/></TableCell>
                
              </TableRow>
            ))}

            {/* Add empty rows to fill space */}
            {Array.from({ length: 2 }).map((_, index) => (
              <TableRow key={index} className="bg-black">
                <TableCell>&nbsp;</TableCell>
                <TableCell>&nbsp;</TableCell>
                <TableCell>&nbsp;</TableCell>
                <TableCell>&nbsp;</TableCell>
             
              </TableRow>
            ))}
          </TableBody>
        </Table>
       
      </div>
    </>
  );
};

export default page;
