"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import CreateTask from "../app/createTask/createTaskBtn";


export default function SignupFormDemo() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    (<div
      className="max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Upload Your Task
      </h2>
      
      <form className="my-8" onSubmit={handleSubmit}>
      <LabelInputContainer className="mb-4">
          <Label htmlFor="TaskName">Task Name</Label>
          <Input id="TaskName" placeholder="Data Labelling"  />
        </LabelInputContainer>
      <LabelInputContainer className="mb-4">
          <Label htmlFor="documentLink">Document Link</Label>
          <Input id="documentLink" placeholder="https://"  />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="instructions">Instructions</Label>
          <Input id="instructions"  />
        </LabelInputContainer>
        

        

        <div
          className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />  
      </form>
    </div>
    )
  );
}

const BottomGradient = () => {
  return (<>
    <span
      className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span
      className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>);
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    (<div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>)
  );
};
