import useGlobalStore from '@components/Layouts/lesson-game/store';
import { NodeProps } from '@xyflow/react';
import { MODE } from 'src/utils/helper';
import { Handle, Position } from '@xyflow/react';

function Result({ data, isConnectable }: NodeProps) {
  const { mode } = useGlobalStore();
  return (
    <>
      {mode == MODE.story ? (
        <div className="h-[640px] w-[365px] border rounded-md bg-[#FFF8EE]">
          <p>Result Page</p>
        </div>
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
            Result screen
          </div>
        </div>
      )}
    </>
  );
}

export default Result;
