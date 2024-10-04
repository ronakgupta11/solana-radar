
"use client";

import { Card } from "flowbite-react";

export default function ProfileCard() {
   const userData = {
        name: "John Doe",
        address : "0xc0E3...B79C",
        tasksCreated:"2",
        tasksCompleted:"3"
    }
    
  return (
    <>
    <div className="flex flex-col gap-10">
    <div >
    <h5 className="text-2xl mx-2  tracking-tight text-gray-900 dark:text-white">
        User Overview
      </h5>
    <Card href="#"  className="w-[28rem]  mt-2">
      <div className="flex justify-between ">
        <p>Name </p>
        <p>{userData.name}</p>
      </div>
      <div className="flex justify-between ">
        <p>Address </p>
        <p>{userData.address}</p>
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
    </Card>
    </div>

    {/* Earnings Tab */}

    <div>
    <h5 className="text-2xl mx-2  tracking-tight text-gray-900 dark:text-white">
        Earnings 
      </h5>
    <Card href="#" className="w-[28rem]  mt-2">
      <div className="flex justify-between ">
        <p>Approved Tasks </p>
        <p>{userData.name}</p>
      </div>
      <div className="border-t  border-gray-600  "></div>
      <div className="flex justify-between ">
        <p>Bonuses </p>
        <p>${userData.tasksCreated}</p>
      </div>
      <div className="border-t border-gray-600  "></div>
      <div className="flex justify-between ">
        <p>Total Earnings </p>
        <p>${userData.tasksCompleted}</p>
      </div>
      <div className="border-t border-gray-600  "></div>
    </Card>
    </div>
    </div>
    </>
  );
}
