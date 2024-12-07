'use client';
import Button from '@components/common/Form/Button';
import OverlayLoader from '@components/common/OverlayLoader';
import CustomTab from '@components/common/Tabs/CustomTab';
import ToastComponent from '@components/common/Toaster/ToastComponent';
import { ICONS } from '@components/xyflow/utils/helper';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import '../../../../styles/global.css';
import useGlobalStore, { IMode } from './store';
import useStore from '@components/xyflow/utils/store';

function Layout({
  children,
}: {
  children: ReactNode;
  header?: boolean;
  footer?: boolean;
}) {
  const pathname = usePathname();

  const isLoginPage = pathname?.includes('/login');

  return (
    <main className="min-h-screen  dark:bg-[#19181E] relative">
      <div className="">
        <Header />
        <div className={`bg-[#F3F4F6] dark:bg-[#19181E]`}>
          <div className="overflow-y-auto">{children}</div>
          <ToastComponent />
          <OverlayLoader />
          <div id="__loader" />
        </div>
      </div>
    </main>
  );
}

export default Layout;

function Header() {
  const { onModeChange, mode } = useGlobalStore();
  const switchViewMode = useStore((state) => state.switchViewMode);

  return (
    <div className="sticky top-0 z-50  p-4 h-[80px] bg-[#FFFFFF]">
      <div className="flex justify-between ">
        <div className="flex items-center justify-center gap-4">
          <div>
            <Image
              alt="arrow_right"
              src={ICONS.arrow_back_black}
              width={24}
              height={24}
            />
          </div>
          <CustomTab
            selectedTab={mode}
            tabs={[
              { name: 'Story', value: 'story' },
              {
                name: 'Branching',
                value: 'branching',
              },
            ]}
            onSwitchTab={(value: IMode) => {
              onModeChange(value);
              switchViewMode(value);
            }}
          />
        </div>
        <div className="flex gap-4">
          <Button type="primary">Share</Button>
        </div>
      </div>
    </div>
  );
}
