import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { fetchTasksForACreator } from "@/utils/fetchFunctions";
import { Approvals } from "./Approvals";
import { Dropdown } from "flowbite-react";
import ApproveWorker from "../approveRequest/approveRequestBtn";
const UserTasksList = () => {
  const { connection } = useConnection();
  const { wallet, publicKey } = useWallet();

  const [userTasks, setUserTasks] = useState();
  useEffect(() => {
    console.log(wallet.adapter.publicKey, publicKey);
    if (wallet && publicKey) {
      const tasks = fetchTasksForACreator(connection, wallet, publicKey).then(
        (result) => {
          console.log("tasks----->", result);
          setUserTasks(result);
        }
      );
    }
  }, []);
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
      <div className="  ">
        <div className="flex gap-4">
          <h5 className="text-2xl mx-2  tracking-tight text-gray-900 dark:text-white">
            Tasks Done
          </h5>
          <button
            onClick={fetchUserTasks}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:text-white dark:hover"
          >
            Refresh
          </button>
        </div>

        <div className=" flex flex-col">
          <Table className="rounded-xl mt-3 flex-grow">
            <Table.Head>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Instructions</Table.HeadCell>
              <Table.HeadCell>Submitted</Table.HeadCell>
              <Table.HeadCell>Approved</Table.HeadCell>
              <Table.HeadCell>Incoming Approvals</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {userTasks?.map((data, index) => {
                return (
                  <>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {data?.name || `Task ${index + 1}`}
                      </Table.Cell>
                      <Table.Cell>{data?.description}</Table.Cell>
                      <Table.Cell>Yes</Table.Cell>
                      <Table.Cell>{data?.approvedWorker || "None"}</Table.Cell>
                      <Table.Cell>
                        <Dropdown
                          label="See Requests"
                          dismissOnClick={false}
                        >
                          {data?.workerRequests?.map((item) => {
                            return(
                                <>
                                <Dropdown.Item>
                              <div className="flex justify-center items-center gap-2 px-3 py-1">
                                <div>{item}</div>
                                <ApproveWorker/>
                              </div>
                            </Dropdown.Item>
                                </>
                            )
                          })}
                        </Dropdown>
                      </Table.Cell>
                      <Table.Cell>
                        <a
                          href="#"
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Edit
                        </a>
                      </Table.Cell>
                    </Table.Row>
                  </>
                );
              })}

              {Array.from({ length: 2 }).map((_, index) => (
                <Table.Row
                  key={index}
                  className="bg-gray-100 dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap">&nbsp;</Table.Cell>
                  <Table.Cell>&nbsp;</Table.Cell>
                  <Table.Cell>&nbsp;</Table.Cell>
                  <Table.Cell>&nbsp;</Table.Cell>
                  <Table.Cell>&nbsp;</Table.Cell>
                  <Table.Cell>&nbsp;</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </>
  );
};

export default UserTasksList;
