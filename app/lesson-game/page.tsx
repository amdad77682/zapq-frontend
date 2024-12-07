'use client';
import Sidebar from '@components/Layouts/common/Sidebar';
import K12Vertical from '@components/Layouts/lesson-game/create/K12Vertical';
import SkillsVertical from '@components/Layouts/lesson-game/create/SkillsVertical';
import { Dialog } from '@components/common/Dialog';
import Button from '@components/common/Form/Button';
import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [selectedTab, setSelectedTab] = useState('K12');
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex mt-1 ">
      <Sidebar />
      <Dialog
        isOpen={isModalOpen}
        closeModal={closeModal}
        children={
          <div className="p-6 h-full min-h-[500px]">
            <h2 className="text-[#111827] text-lg font-medium">
              Lesson background
            </h2>

            <div className="mt-8 mb-6">
              {/* Vertical Tab */}
              <div className="flex items-center justify-start gap-16">
                <p className="text-black font-medium text-sm">Vertical*</p>
                <div className="flex items-center gap-3">
                  <div
                    onClick={() => setSelectedTab('K12')}
                    className={`cursor-pointer ${
                      selectedTab === 'K12'
                        ? 'px-9 py-2 w-[100px] h-9 bg-black text-white rounded-[10px] text-sm font-medium'
                        : 'px-9 py-2 w-[100px] h-9 bg-white text-black rounded-[10px] text-sm font-medium border border-[#E5E7EB] border-solid'
                    }`}
                  >
                    K12
                  </div>
                  <div
                    onClick={() => setSelectedTab('Skills')}
                    className={`cursor-pointer ${
                      selectedTab === 'Skills'
                        ? 'px-9 py-2 w-[100px] h-9 bg-black text-white rounded-[10px] text-sm font-medium'
                        : 'px-9 py-2 w-[100px] h-9 bg-white text-black rounded-[10px] text-sm font-medium border border-[#E5E7EB] border-solid'
                    }`}
                  >
                    Skills
                  </div>
                </div>
              </div>

              {/* Selected Vertical Component */}
              <div className="mt-9">
                {selectedTab === 'K12' && <K12Vertical />}
                {selectedTab === 'Skills' && <SkillsVertical />}
              </div>
            </div>

            <div className="flex items-center justify-end gap-10 border-t pt-3 -mx-6 px-6">
              <p
                className="text-[#4B5563] hover:text-black text-center text-sm font-medium cursor-pointer"
                onClick={closeModal}
              >
                Skip
              </p>
              <Button type="primary" class_name="px-8 py-3.5 cursor-pointer">
                <Link href={'/lesson-game/create'}>Continue</Link>
              </Button>
            </div>
          </div>
        }
      />
    </div>
  );
}
