"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../../ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import SubmitSolution from "./submitSolutionBtn";

export default function SubmitModal({taskCreator,taskCount}) {
 const [solution,setSolution] = useState("")
  return (
    (<div className="py-40  flex items-center justify-center">
      <Modal>
        <ModalTrigger
          className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span
            className=" text-center ">
            Submit
          </span>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
           
            Hi this is Submission Modal
          </ModalContent>
          <ModalFooter className="gap-4">
         
         <SubmitSolution taskCount={taskCount} taskCreator={taskCreator} solution={solution}/>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>)
  );
}

