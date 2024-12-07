import { DropdownMenuCheckboxes } from '@components/common/Dropdown';
import React, { useState } from 'react';

export default function K12Vertical() {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const classes = [
    'Class 5',
    'Class 6',
    'Class 7',
    'Class 8',
    'Class 9',
    'Class 10',
    'HSC',
  ];

  const subjectOptions = [
    {
      label: 'Bangla',
      checked: selectedSubject === 'Bangla',
      onCheckedChange: () => setSelectedSubject('Bangla'),
    },
    {
      label: 'English',
      checked: selectedSubject === 'English',
      onCheckedChange: () => setSelectedSubject('English'),
    },
    {
      label: 'Math',
      checked: selectedSubject === 'Math',
      onCheckedChange: () => setSelectedSubject('Math'),
    },
  ];

  const topicOptions = [
    {
      label: 'Grammar',
      checked: selectedTopic === 'Grammar',
      onCheckedChange: () => setSelectedTopic('Grammar'),
    },
    {
      label: 'Literature',
      checked: selectedTopic === 'Literature',
      onCheckedChange: () => setSelectedTopic('Literature'),
    },
    {
      label: 'Arithmetic',
      checked: selectedTopic === 'Arithmetic',
      onCheckedChange: () => setSelectedTopic('Arithmetic'),
    },
  ];

  const handleSelect = (className: string) => {
    setSelectedClass(className);
  };

  return (
    <div className="flex flex-col gap-9">
      {/* Select Class */}
      <div className="flex items-start gap-[88px]">
        <p className="text-black font-medium text-sm">Class</p>
        <div className="grid grid-cols-4 gap-3">
          {classes.map((className, index) => (
            <div
              key={index}
              onClick={() => handleSelect(className)}
              className={`px-4 py-2 min-w-[100px] h-9 rounded-[10px] text-sm font-medium border border-[#E5E7EB] flex items-center justify-center cursor-pointer
            ${
              selectedClass === className
                ? 'bg-black text-white'
                : 'bg-white text-black'
            }
            hover:bg-black hover:text-white`}
            >
              {className}
            </div>
          ))}
        </div>
      </div>

      {/* Select Subject */}
      <div className="flex items-center justify-start gap-[74px]">
        <p className="text-black font-medium text-sm">Subject</p>
        <div className="p-3 border border-[#E5E7EB] rounded-[10px]">
          <DropdownMenuCheckboxes
            title={selectedSubject || 'Select Subject'}
            options={subjectOptions}
            className="text-[#111827] text-sm font-normal min-w-52 flex justify-between"
          />
        </div>
      </div>

      {/* Select Topic */}
      <div className="flex items-center justify-start gap-[88px]">
        <p className="text-black font-medium text-sm">Topic</p>{' '}
        <div className="p-3 border border-[#E5E7EB] rounded-[10px]">
          <DropdownMenuCheckboxes
            title={selectedTopic || 'Select Topic'}
            options={topicOptions}
            className="text-[#111827] text-sm font-normal min-w-52 flex justify-between"
          />
        </div>
      </div>
    </div>
  );
}
