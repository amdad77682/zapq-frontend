import { useState, DragEvent } from 'react';
import Image from 'next/image';
import { ICONS } from '@components/xyflow/utils/helper';
import Button from '@components/common/Form/Button';
import { Option } from '@components/common/models';
import { Handle, NodeProps, Position } from '@xyflow/react';
import useGlobalStore from '@components/Layouts/lesson-game/store';
import { MODE } from '@utils/helper';


function DragDropQue({ data, isConnectable }: NodeProps) {
  const { mode } = useGlobalStore();
  // Option type

  const [options] = useState<Option[]>([
    {
      id: '1',
      image:
        'https://cdn.10minuteschool.com/images/option_one_1723532711155.svg',
      label: 'Option 1',
    },
    {
      id: '2',
      image:
        'https://cdn.10minuteschool.com/images/option_one_1723532711155.svg',
      label: 'Option 2',
    },
  ]);
  const [draggedOption, setDraggedOption] = useState<Option | null>(null);

  const handleDragStart = (e: DragEvent<HTMLDivElement>, option: Option) => {
    e.dataTransfer.setData('text/plain', option.id);
    setDraggedOption(option);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const optionId = e.dataTransfer.getData('text/plain');
    const droppedOption = options.find((option) => option.id === optionId);
    if (droppedOption) {
      setDraggedOption(droppedOption);
    }
  };
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
          <div className="mt-4 flex flex-col items-center gap-1">
            {options.map((option, index) => {
              const handleId = `target-handle-${index + 1}`;
              return (
                <div
                  key={index}
                  className="w-full relative flex items-center text-[#6B7280] text-sm font-medium px-4"
                >
                  <p>{index + 1}. </p>
                  <img src={option.image} alt="option-image" />
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
      <p>Drag & Drop</p>
      <div className="h-[930px] w-[365px] border rounded-md bg-[#FFF]">
        <div className="flex items-center justify-between border-b p-4">
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

          <div
            className="bg-white border rounded-md mx-auto mt-6 flex items-center justify-center h-[188px] w-full max-w-[314px]"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            {draggedOption ? (
              <Image
                alt="selected_option"
                src={draggedOption.image}
                width={188}
                height={188}
              />
            ) : (
              <Image
                alt="image_upload"
                src={ICONS.image_upload}
                width={41}
                height={41}
              />
            )}
          </div>

          <Button
            type="secondary"
            class_name="mt-3.5 max-w-[140px] max-h-[48px]"
          >
            এগিয়ে যাই
          </Button>
        </div>

        {/* Text Input Section */}
        <div className="bg-[#F5F5F5] px-4 pt-4 pb-7">
          <p className="text-[#6B7280] text-xs font-medium">প্রশ্ন ১</p>
          {/* Question */}
          <p className="text-[#4B5563] text-base font-semibold ml-1 mt-1">
            এখানে সম্পূর্ণ প্রশ্ন লিখুন
          </p>
          {/* Answer */}
          <div className="flex flex-col flex-1 gap-4 mt-3">
            <div
              className="mx-auto flex justify-center items-end w-[130px] h-[130px] border border-[#9CA3AF]
              shadow-[0px_3px_0px_0px_#8E9196_inset] rounded-[10px] border-solid bg-[#E5E7EB] p-2 text-[#6B7280]"
            >
              {draggedOption ? draggedOption.label : 'Answer'}
            </div>

            {/* Draggable Options */}
            <div className="flex justify-between mx-4">
              {options.map((option) => (
                <div
                  key={option.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, option)}
                  className="flex flex-col justify-end items-center gap-[var(--spacing-0,21.388px)]
                  border border-[#E5E7EB] shadow-[0px_-3px_0px_0px_#E5E7EB_inset] rounded-[10px]
                  border-solid bg-[#FFF] px-10 py-6 text-[#E5E7EB]"
                >
                  <img src={option.image} alt="option-image" />
                  {option.label}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-start gap-3 mt-7">
            {/* Check Button */}
            <Button type="secondary" class_name="max-w-[122px] max-h-[44px]">
              চেক করি
            </Button>

            {/* Hint Button */}
            <Button type="outline" class_name="max-w-[122px] max-h-[44px]">
              <span className="flex items-center justify-center gap-1">
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
    </>
  );
}

export default DragDropQue;
