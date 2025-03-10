"use client";
import { ToggleState } from "@components/common/ToggelState";
import { ICONS } from "@components/xyflow/utils/helper";
import { nodesType } from "@components/xyflow/utils/nodesType";
import useStore from "@components/xyflow/utils/store";
import Image from "next/image";
import React from "react";
import useGlobalStore from "../lesson-game/store";
import TOASTER from "@components/common/Toaster";

const BASIC = [
  {
    name: "Start Page",
    icon: "https://placehold.co/200x200.png",
    nodeType: "basic_StartPage",
    description:
      "Start page shows the introduction of the game the user is about to play, such as the game title, description, etc.",
  },
  {
    name: "Prompt Page",
    icon: "https://placehold.co/200x200.png",
    nodeType: "basic_PromptPage",
    description:
      "Start page shows the introduction of the game the user is about to play, such as the game title, description, etc.",
  },
  {
    name: "Login Page",
    icon: "https://placehold.co/200x200.png",
    nodeType: "basic_LoginPage",
    description:
      "Start page shows the introduction of the game the user is about to play, such as the game title, description, etc.",
  },
  {
    name: "Result Page",
    icon: "https://placehold.co/200x200.png",
    nodeType: "basic_ResultPage",
    description:
      "Start page shows the introduction of the game the user is about to play, such as the game title, description, etc.",
  },
  //End page
  {
    name: "End Page",
    icon: "https://placehold.co/200x200.png",
    nodeType: "basic_EndPage",
    description:
      "Start page shows the introduction of the game the user is about to play, such as the game title, description, etc.",
  },
  //Rating
  {
    name: "Rating",
    icon: "https://placehold.co/200x200.png",
    nodeType: "basic_RatingPage",
    description:
      "Start page shows the introduction of the game the user is about to play, such as the game title, description, etc.",
  },
];

const QUESTION = [
  //binary answer
  {
    name: "Binary Answer",
    icon: "https://placehold.co/200x200.png",
    nodeType: "question_BinaryAnswer",
  },
  //MCQ
  {
    name: "MCQ",
    icon: "https://placehold.co/200x200.png",
    nodeType: "question_MCQ",
  },
  //Drag and Drop
  {
    name: "Drag and Drop",
    icon: "https://placehold.co/200x200.png",
    nodeType: "question_DragAndDrop",
  },
  //text input
  {
    name: "Text Input",
    icon: "https://placehold.co/200x200.png",
    nodeType: "question_TextInput",
  },
  //fill in the blank
  {
    name: "Fill in the blank",
    icon: "https://placehold.co/200x200.png",
    nodeType: "question_FillInTheBlank",
  },
  //multiple questions
  {
    name: "Multiple Questions",
    icon: "https://placehold.co/200x200.png",
    nodeType: "question_MultipleQuestions",
  },
];

export default function Sidebar() {
  const createNode = useStore((state) => state.createNode);
  const mode = useGlobalStore((state) => state.mode);
  const renderCard = (
    item: {
      name: string;
      icon: string;
      nodeType: string;
    },
    index: number
  ) => (
    <li
      key={index}
      className={`flex flex-col items-center justify-between gap-2 p-6 border-b hover:bg-slate-100 cursor-pointer
              ${index % 2 === 0 ? "border-r" : ""}`}
      onClick={() => {
        if (mode === "branching") {
          TOASTER.failed({
            title: "Failed",
            message: "You cannot add a node in branching mode",
          });
          return;
        }
        createNode({ nodeType: item.nodeType as keyof typeof nodesType });
      }}
    >
      <Image src={item.icon} alt={item.name} height={24} width={24} />
      <span className="text-xs font-medium text-center">{item.name}</span>
    </li>
  );
  return (
    <div className="w-[225px] h-screen bg-[#FFFFFF]">
      <div className="flex items-center justify-between p-3 border-b">
        <h5 className="font-medium">Templates</h5>
        <Image src={ICONS?.template} alt="template" height={20} width={20} />
      </div>
      <ToggleState
        isActive={true}
        render={({ isOpen, toggle }) => (
          <>
            <button
              onClick={toggle}
              className="flex items-center justify-between w-full p-3 border-b"
            >
              <h5 className="font-medium">Basic Pages</h5>
              <Image
                src={ICONS?.arrow_up}
                alt="arrow_up"
                height={20}
                width={20}
              />
            </button>
            {isOpen && (
              <ul className="grid grid-cols-2">
                {BASIC.map((item, index) => renderCard(item, index))}
              </ul>
            )}
          </>
        )}
      ></ToggleState>
      <ToggleState
        isActive={true}
        render={({ isOpen, toggle }) => (
          <>
            <button
              onClick={toggle}
              className="flex items-center justify-between w-full p-3 border-b"
            >
              <h5 className="font-medium">Questions</h5>

              <Image src={ICONS?.arrow_up} alt="arrow" height={20} width={20} />
            </button>
            {isOpen && (
              <ul className="grid grid-cols-2">
                {QUESTION.map((item, index) => renderCard(item, index))}
              </ul>
            )}
          </>
        )}
      ></ToggleState>
    </div>
  );
}
