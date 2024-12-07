import useGlobalStore from '@components/Layouts/lesson-game/store';
import Button from '@components/common/Form/Button';
import { ICONS } from '@components/xyflow/utils/helper';
import { Handle, NodeProps, Position } from '@xyflow/react';
import Image from 'next/image';
import { MODE } from 'src/utils/helper';

function Prompt({ data, isConnectable }: NodeProps) {
  const { mode } = useGlobalStore();

  return (
    <div>
      {mode == MODE.story ? (
        <>
          <p>Prompt Page</p>

          <div className="h-[640px] w-[365px] border rounded-md bg-white">
            <div className="flex items-center justify-between border-b p-4 ">
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
            <div className="p-4">
              <h3 className="py-2">Section Title (Optional)</h3>
              <p>
                Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et.
              </p>
              <div className="bg-white mt-4 border rounded-md flex items-center justify-center h-[314px] w-full">
                <Image
                  alt="start_page"
                  src={ICONS.image_upload}
                  width={41}
                  height={41}
                />
              </div>
              <Button type="secondary" class_name="mt-4">
                <span>Proceed</span>
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
          <Handle
            type="source"
            position={Position.Right}
            isConnectable={isConnectable}
          />
          <div className="flex flex-col items-center justify-center w-[165px] h-[15px] border rounded-md bg-white py-8 px-16 whitespace-nowrap text-sm font-semibold">
            Prompt: screen title
          </div>
        </div>
      )}
    </div>
  );
}

export default Prompt;
