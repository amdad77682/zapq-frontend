import { DropdownMenuCheckboxes } from '@components/common/Dropdown';
import React, { useState } from 'react';

export default function SkillsVertical() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const courseOptions = [
    {
      label: 'Bangla',
      checked: selectedCourse === 'Bangla',
      onCheckedChange: () => setSelectedCourse('Bangla'),
    },
    {
      label: 'English',
      checked: selectedCourse === 'English',
      onCheckedChange: () => setSelectedCourse('English'),
    },
    {
      label: 'Math',
      checked: selectedCourse === 'Math',
      onCheckedChange: () => setSelectedCourse('Math'),
    },
  ];

  const moduleOptions = [
    {
      label: 'Module 1',
      checked: selectedModule === 'Module 1',
      onCheckedChange: () => setSelectedModule('Module 1'),
    },
    {
      label: 'Module 2',
      checked: selectedModule === 'Module 2',
      onCheckedChange: () => setSelectedModule('Module 2'),
    },
    {
      label: 'Module 3',
      checked: selectedModule === 'Module 3',
      onCheckedChange: () => setSelectedModule('Module 3'),
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

  return (
    <div className="flex flex-col gap-[52px]">
      {/* Select Course */}
      <div className="flex items-center justify-start gap-[74px]">
        <p className="text-black font-medium text-sm">Course</p>
        <div className="p-3 border border-[#E5E7EB] rounded-[10px]">
          <DropdownMenuCheckboxes
            title={selectedCourse || 'Select Course'}
            options={courseOptions}
            className="text-[#111827] text-sm font-normal min-w-52 flex justify-between"
          />
        </div>
      </div>

      {/* Select Module */}
      <div className="flex items-center justify-start gap-[70px]">
        <p className="text-black font-medium text-sm">Module</p>
        <div className="p-3 border border-[#E5E7EB] rounded-[10px]">
          <DropdownMenuCheckboxes
            title={selectedModule || 'Select Module'}
            options={moduleOptions}
            className="text-[#111827] text-sm font-normal min-w-52 flex justify-between"
          />
        </div>
      </div>

      {/* Select Topic */}
      <div className="flex items-center justify-start gap-[86px]">
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
