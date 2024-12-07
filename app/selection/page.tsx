'use client';

import Sidebar from '@components/Layouts/common/Sidebar';
import { Dialog } from '@components/common/Dialog';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex mt-1 ">
      <Sidebar />

      <Dialog
        isOpen={true}
        closeModal={() => {}}
        children={
          <div className="p-8">
            <h2 className="text-center font-semibold">
              What are you making today?
            </h2>
            <div className="grid grid-cols-3 gap-4 py-4">
              {[
                {
                  title: 'Lesson Game',
                  desc: 'Teach a topic to students by crafting original stories and characters',
                  icon: 'https://cdn.10minuteschool.com/images/arrow-square_1724062947549.png',
                  url: '/lesson-game',
                },
                {
                  title: 'Assessment',
                  desc: 'Assess a student’s understanding of a subject topic',
                  icon: 'https://cdn.10minuteschool.com/images/arrow-square_1724062947549.png',
                  url: '/lesson-game',
                },
                {
                  title: 'Learning Journey',
                  desc: 'Teach a course to students by creating a learning pathway',
                  icon: 'https://cdn.10minuteschool.com/images/Group_2085663245_1724064223793.png',
                  url: '/lesson-game',
                },
              ].map((item) => {
                return (
                  <Link key={item?.title} href={item?.url}>
                    <div className="border p-4 rounded-md flex flex-col items-center justify-center hover:bg-[#306BF4] hover:text-white">
                      <Image
                        alt={item?.title}
                        src={item?.icon}
                        height={69}
                        width={68}
                        className="hover:text-white"
                      />
                      <h2 className="font-semibold py-3 text-center hover:text-white">
                        {item?.title}
                      </h2>
                      <p className="text-center text-xs hover:text-white">
                        {item?.desc}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        }
      />
    </div>
  );
}
