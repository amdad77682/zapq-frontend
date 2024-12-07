import * as React from 'react';
import { Dialog } from '@components/common/Dialog';
import { DropdownMenuCheckboxes } from '@components/common/Dropdown';
import Button from '@components/common/Form/Button';
import { IoIosAdd } from 'react-icons/io';
import { TbFileUpload } from 'react-icons/tb';
import BinaryQuestionForm from './BinaryQuestionForm';
import McqQuestionForm from './McqQuestionForm';
import DragDropQuestionForm from './DragDropQuestionForm';
import TextInputQuestionForm from './TextInputQuestionForm';

interface QuestionModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const questions = ['প্রশ্ন ১', 'প্রশ্ন ২'];

export default function QuestionModal({
  isOpen,
  closeModal,
}: QuestionModalProps) {
  const [selectedOption, setSelectedOption] =
    React.useState<string>('Binary question');

  const dropDownOptions = [
    {
      label: 'Binary question',
      checked: selectedOption === 'Binary question',
      onCheckedChange: () => setSelectedOption('Binary question'),
    },
    {
      label: 'MCQ',
      checked: selectedOption === 'MCQ',
      onCheckedChange: () => setSelectedOption('MCQ'),
    },
    {
      label: 'Drag & Drop',
      checked: selectedOption === 'Drag & Drop',
      onCheckedChange: () => setSelectedOption('Drag & Drop'),
    },
    {
      label: 'Text Input',
      checked: selectedOption === 'Text Input',
      onCheckedChange: () => setSelectedOption('Text Input'),
    },
  ];

  return (
    <Dialog
      isOpen={isOpen}
      closeModal={closeModal}
      children={
        <div className="flex">
          {/* Questions Column */}
          <div className="bg-[#F3F4F6] h-full p-2 flex flex-col items-center justify-start gap-5 rounded-l-lg rounded-bl-lg">
            {questions.map((question, index) => (
              <Button
                key={index}
                type="primary"
                class_name="w-[74px] flex items-center justify-center"
              >
                <p>{question}</p>
              </Button>
            ))}
            <IoIosAdd color="#6B7280" className="cursor-pointer" />
          </div>

          {/* Question Edit Form */}
          <div className="flex flex-col w-full">
            {/* Top Section */}
            <div className="border-b-[1px] border-[#E5E7EB] px-6 py-4 flex justify-between">
              {/* Question Type Dropdown */}
              <DropdownMenuCheckboxes
                title={selectedOption}
                options={dropDownOptions}
              />
              {/* Import */}
              <div className="mr-5 flex items-center gap-1 border-r-[1px] border-[#E5E7EB] -my-4 pr-3 cursor-pointer">
                <TbFileUpload color="#4B5563" />
                <p className="text-[#4B5563] font-medium">ইম্পোর্ট</p>
              </div>
            </div>

            {/* Question Edit Form */}
            <div className="py-4 px-6 h-[600px] overflow-y-auto">
              {selectedOption === 'Binary question' && <BinaryQuestionForm />}
              {selectedOption === 'MCQ' && <McqQuestionForm />}
              {selectedOption === 'Drag & Drop' && <DragDropQuestionForm />}
              {selectedOption === 'Text Input' && <TextInputQuestionForm />}
            </div>
          </div>
        </div>
      }
    />
  );
}
