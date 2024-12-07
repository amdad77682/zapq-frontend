import useGlobalStore from '@components/Layouts/lesson-game/store';
import Button from '@components/common/Form/Button';
import { ICONS } from '@components/xyflow/utils/helper';
import { Handle, NodeProps, Position } from '@xyflow/react';
import Image from 'next/image';
import { MODE } from 'src/utils/helper';

function Start({ data, isConnectable }: NodeProps) {
  const { mode } = useGlobalStore();

  return (
    <div>
      {mode == MODE.story ? (
        <>
          <p>Start Page</p>
          <div className="flex flex-col items-center justify-center h-[640px] w-[365px] border rounded-md bg-[#FFF8EE] p-4">
            <div className="flex items-center justify-center">
              <Image
                alt="start_page"
                src={ICONS.lesson_game}
                width={140}
                height={90}
              />
            </div>
            <div className="bg-white border rounded-md m-4 flex items-center justify-center h-[314px] w-full">
              <Image
                alt="start_page"
                src={ICONS.image_upload}
                width={41}
                height={41}
              />
            </div>
            <p>class • subject • topic</p>
            <h2 className="font-semibold text-base ">Game title</h2>
            <p className="text-center tex-xs">
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
            <Button type="secondary" class_name="mt-4">
              <span>Start</span>
              <Image
                alt="arrow_right"
                src={ICONS.arrow_right_white}
                width={10}
                height={10}
              />
            </Button>
          </div>
        </>
      ) : (
        <div>
          <Handle
            type="source"
            position={Position.Right}
            id="start"
            isConnectable={isConnectable}
          />
          <div className="flex flex-col items-center justify-center w-[165px] h-[15px] border-1 bg-white py-8 px-16 whitespace-nowrap text-sm font-semibold shadow rounded-lg">
            Start screen
          </div>
        </div>
      )}
    </div>
  );
}

export default Start;
