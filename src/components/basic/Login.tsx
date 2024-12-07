import { Handle, NodeProps, Position } from '@xyflow/react';
import Image from 'next/image';
import { ICONS } from '@components/xyflow/utils/helper';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Button from '@components/common/Form/Button';
import InputBox from '@components/common/Form/InputBox';
import useGlobalStore from '@components/Layouts/lesson-game/store';
import { MODE } from 'src/utils/helper';

type FormValues = {
  phoneOrEmail: string;
  password: string;
};

function Login({ data, isConnectable }: NodeProps) {
  const { mode } = useGlobalStore();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Login Form Data:', data);
  };

  return (
    <div>
      {mode == MODE.story ? (
        <>
          <p>Login Page</p>
          <div className="h-[640px] w-[365px] border rounded-md bg-[#FFF]">
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

            <div className="bg-white border rounded-md mx-6 mt-6 flex items-center justify-center h-[188px] w-full max-w-[314px]">
              <Image
                alt="image_upload"
                src={ICONS.image_upload}
                width={41}
                height={41}
              />
            </div>

            <div className="flex flex-col items-center justify-center mt-3 text-[#9CA3AF]">
              <p className="text-lg font-bold">Title</p>
              <p className="text-base">Ekhon ki hobe, jante login korun</p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3.5 px-6 mt-4"
            >
              {/* Phone or Email */}
              <Controller
                name="phoneOrEmail"
                control={control}
                rules={{ required: 'Phone or email is required.' }}
                render={({ field: { onChange, value } }) => (
                  <InputBox
                    title=""
                    placeholder="Phone/email"
                    error_message={errors.phoneOrEmail?.message}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />

              {/* Password */}
              <Controller
                name="password"
                control={control}
                rules={{ required: 'Password is required.' }}
                render={({ field: { onChange, value } }) => (
                  <InputBox
                    title=""
                    placeholder="Password"
                    error_message={errors.password?.message}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />

              <Button type="secondary" class_name="mt-2">
                Login
              </Button>
            </form>
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
            Login Page
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
