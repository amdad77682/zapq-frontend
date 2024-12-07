import React, { useState } from 'react';
import { Handle, NodeProps, Position } from '@xyflow/react';
import Image from 'next/image';
import { ICONS } from '@components/xyflow/utils/helper';
import Button from '@components/common/Form/Button';
import useGlobalStore from '@components/Layouts/lesson-game/store';
import { MODE } from 'src/utils/helper';

function End({ data, isConnectable }: NodeProps) {
  const [imageError, setImageError] = useState(false);
  const { mode } = useGlobalStore();
  return (
    <>
      {mode == MODE.story ? (
        <>
          <p>End Page</p>
          <div className="h-[640px] w-[365px] border rounded-md bg-[#FFF] flex flex-col">
            <div className="flex items-center justify-between border-b p-4">
              <Image
                alt="start_page"
                src={ICONS.cross}
                width={24}
                height={24}
              />
              <Image
                alt="start_page"
                src={ICONS.option}
                width={24}
                height={24}
              />
            </div>

            <div className="flex flex-col items-center mt-[70px] mx-6 flex-1">
              {/* Image */}
              <div
                className={`w-80 h-[230px] rounded-[14px] ${
                  imageError ? 'bg-[#D9D9D9]' : ''
                }`}
              >
                <img
                  src=""
                  alt="end-page-image"
                  className="w-full h-full rounded-[14px] object-cover"
                  onError={() => setImageError(true)}
                />
              </div>

              <p className="text-[#111827] text-center text-lg font-bold mt-5">
                Hooray! You did it!
              </p>
              <p className="text-[#111827] text-center text-base font-medium mt-1 max-w-[255px]">
                You’ve successfully completed the lesson
              </p>
            </div>

            {/* Button */}
            <div className="px-6 pb-7">
              <Button type="secondary" class_name="w-full">
                Finish
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div>
          <Handle
            type="target"
            position={Position.Left}
            isConnectable={isConnectable}
          />

          <div className="flex flex-col items-center justify-center w-[165px] h-[15px] border rounded-md bg-white py-8 px-16 whitespace-nowrap text-sm font-semibold">
            End Page
          </div>
        </div>
      )}
    </>
  );
}

export default End;
