
"use client";


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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

    
    <Card className="w-[28rem] mt-4">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-y-3">
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
        </div>
      </CardContent>
      
    </Card>
    </div>
    </>
  );
}
