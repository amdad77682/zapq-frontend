import Image from 'next/image';
import { useState } from 'react';
import { ICONS } from '@components/xyflow/utils/helper';
import Button from '@components/common/Form/Button';
import QuestionModal from './QuestionModal';
import { Handle, NodeProps, Position } from '@xyflow/react';
import useGlobalStore from '@components/Layouts/lesson-game/store';
import { MODE } from '@utils/helper';

function BinaryQue({ data, isConnectable }: NodeProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mode } = useGlobalStore();

  // Close modal
  const closeQuestionModal = () => {
    setIsModalOpen(false);
  };

  // Options array
  const options = ['অপশন ১', 'অপশন ২'];
  if (mode == MODE.branching) {
    return (
      <div>
        <Handle
          type="target"
          position={Position.Left}
          isConnectable={isConnectable}
        />
        <div className="flex flex-col w-[224px] h-[235px] border-1 bg-white whitespace-nowrap text-sm font-semibold shadow rounded-lg">
          <p className="text-[#6B7280] text-xs font-medium p-4">প্রশ্ন ১</p>
          <div className="flex flex-col items-center gap-1 mt-4">
            {options.map((option, index) => {
              const handleId = `target-handle-${index + 1}`;
              return (
                <div
                  key={index}
                  className="w-full relative px-3 flex items-start  text-[#6B7280] text-sm font-medium"
                >
                  <p>{index + 1}. </p>
                  <p>{option}</p>
                  <Handle
                    type="source"
                    id={handleId}
                    position={Position.Right}
                    isConnectable={isConnectable}
                    style={{ top: '50%' }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <p>Binary Answer</p>
      <div
        className="h-[780px] w-[365px] border rounded-md bg-[#FFF]"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Image alt="start_page" src={ICONS.cross} width={24} height={24} />
          <Image alt="start_page" src={ICONS.option} width={24} height={24} />
        </div>

        <div className="px-4 pt-6 pb-8">
          <p className="text-[#9CA3AF] text-lg font-bold">
            সেকশন টাইটেল (Optional)
          </p>
          <p className="mt-1 text-[#9CA3AF] text-base font-medium">
            নিশ্চয়ই তোমার চাঁদ সম্পর্কে জানার আগ্রহ আছে! চলো এই লেসনটিতে চাঁদ
            সম্পর্কে জেনে আসি!
          </p>

          <div className="bg-white border rounded-md mx-auto mt-6 flex items-center justify-center h-[188px] w-full max-w-[314px]">
            <Image
              alt="image_upload"
              src={ICONS.image_upload}
              width={41}
              height={41}
            />
          </div>

          <Button
            type="secondary"
            class_name="mt-3.5 max-w-[140px] max-h-[48px]"
          >
            এগিয়ে যাই
          </Button>
        </div>

        {/* Binary Question Section */}
        <div className="bg-[#F5F5F5] px-4 pt-4 pb-7">
          <p className="text-[#6B7280] text-xs font-medium">প্রশ্ন ১</p>
          <p className="text-[#4B5563] text-base font-semibold ml-1 mt-1">
            এখানে সম্পূর্ণ প্রশ্ন লিখুন
          </p>
          {/* Options */}
          <div className="flex flex-col items-center gap-4 mt-4">
            {options.map((option, index) => (
              <div
                key={index}
                className="w-full flex items-start bg-white border border-[#E5E7EB] shadow-[0px_-3.005px_0px_0px_#E5E7EB_inset] rounded-[10px] border-solid p-4
                text-[#6B7280] text-sm font-medium"
              >
                <p>{option}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-start gap-3 mt-7">
            {/* Check Button */}
            <Button type="secondary" class_name="max-w-[122px] max-h-[44px]">
              চেক করি
            </Button>

            {/* Hint Button */}
            <Button type="outline" class_name="max-w-[122px] max-h-[44px]">
              <span className="flex items-center justify-center gap-1 ">
                <Image
                  alt="start_page"
                  src={ICONS.bulb_green}
                  width={24}
                  height={24}
                />
                <p className="mb-0">হিন্ট</p>
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Question edit modal */}
      <QuestionModal isOpen={isModalOpen} closeModal={closeQuestionModal} />
    </>
  );
}

export default BinaryQue;
