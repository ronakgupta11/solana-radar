"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
    Modal,
    ModalBody,
    ModalContent,

    ModalTrigger,
  } from "../../ui/animated-modal";
import React, { useEffect, useState } from "react";
import { useConnection } from "@solana/wallet-adapter-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { fetchTasksForACreator } from "@/utils/fetchFunctions";
import { Loader } from "../Loader";
import ApproveWorker from "../approveRequest/approveRequestBtn";
const UserTasksList = () => {
  const { connection } = useConnection();
  const { wallet, publicKey } = useWallet();
  const [isLoading,setIsLoading]=useState(true);
  const [userTasks, setUserTasks] = useState();
  useEffect(() => {
    if (wallet && publicKey) {
       
      const tasks = fetchTasksForACreator(connection, wallet, publicKey).then(
        (result) => {
          console.log("tasks----->", result);
          setUserTasks(result);
          setIsLoading(false)
        }
      );
    }else{
        setTimeout(()=>{
            setIsLoading(false)
        },5000)
    }
  }, [wallet,publicKey]);
  const fetchUserTasks = () => {
    if (wallet && publicKey) {
      const tasks = fetchTasksForACreator(connection, wallet, publicKey).then(
        (result) => {
          console.log("tasks----->", result);
          setUserTasks(result);
        }
      );
    }
  };
  return (
    <>
       {isLoading &&  <div className='absolute top-[50%] left-[50%]'>
        <Loader message={"Fetching Data..."}/>
      </div>}
     {!isLoading && <div className="  ">
        <div className="flex gap-4">
          <h5 className="text-2xl mx-2  tracking-tight text-gray-900 dark:text-white">
            Tasks Created
          </h5>
          <button
            onClick={fetchUserTasks}
            className="shadow-[0_0_0_3px_#000000_inset] px-3 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
          >
            Refresh
          </button>
        </div>
        <div></div>
        <div className="flex flex-col mt-3   border-2">
          <Table className="rounded-xl  text-white mt-3 flex-grow">

            <TableHeader>
              <TableRow className="text-white" >
                <TableHead className="text-white">Name</TableHead>
                <TableHead className="text-center text-white">Instructions</TableHead>
                <TableHead className="text-white">Submitted</TableHead>
                <TableHead className="text-white">Approved</TableHead>
                <TableHead className="text-white">Incoming Approvals</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody >
              {userTasks?.map((data, index) => (
                <TableRow key={index} className="bg-black">
                  <TableCell className="font-medium text-gray-900 dark:text-white">
                    {data?.name || `Task ${index + 1}`}
                  </TableCell>
                  <TableCell>{data?.description}</TableCell>
                  <TableCell>Yes</TableCell>
                  <TableCell>{data?.approvedWorker || "None"}</TableCell>
                  <TableCell>
                    {data?.workerRequests?.map((item, idx) => (
                     
                      <Modal>
                        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                          <span className=" text-center ">See Requests</span>
                        </ModalTrigger>
                        <ModalBody>
                          <ModalContent>
                          <div className="flex justify-center items-center gap-2 px-3 py-1">
                           <div>{item}</div>
                          <ApproveWorker />
                        </div>
                          </ModalContent>
                          
                        </ModalBody>
                      </Modal>
                    ))}
                  </TableCell>
                </TableRow>
              ))}

              {/* Add empty rows to fill space */}
              {Array.from({ length: 2 }).map((_, index) => (
                <TableRow key={index} className="bg-black">
                  <TableCell>&nbsp;</TableCell>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell>&nbsp;</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>}
    </>
  );
};

export default UserTasksList;
