"use client"
import React,{useState,useEffect} from "react";
import TaskCardForLabeler from "../../components/app/labelerboard/TaskCardForLabeler";
import Navbar from "@/components/app/Navbar";
import { fetchAllTasks } from "@/utils/fetchFunctions";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
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
          console.error('Error fetching tasks:', error);
        }
      };
  
      loadTasks();
    }, [connection, wallet]);

    console.log(tasks)

  return (
    <>
      <Navbar/>
      <div class="flex flex-col items-center gap-10 py-[60px] self-stretch">
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-10 pb-10">
      {tasks.length > 0 ? (
          tasks.map((task, index) => (
           <TaskCardForLabeler cardData={task} key={index}/>
          ))
        ) : (
          <p className="text-center">No tasks found.</p>
        )}
      </div>
    </>
  );
};

export default page;
