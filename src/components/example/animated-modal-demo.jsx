"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AnimatedModalDemo() {
 
  return (
    (<div className="py-40  flex items-center justify-center">
      <Modal>
        <ModalTrigger
          className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span
            className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Submit
          </span>
          <div
            className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✈️
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
           
            Hi this is Submission Modal
          </ModalContent>
          <ModalFooter className="gap-4">
         
            <button
              className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Submit Now
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>)
  );
}

