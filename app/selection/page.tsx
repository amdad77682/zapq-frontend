"use client";
import { v4 as uuidv4 } from "uuid";
import Sidebar from "@components/Layouts/common/Sidebar";
import { Dialog } from "@components/common/Dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useFireStore from "src/hooks/useFireStore";

export default function Page() {
  const router = useRouter();
  const { writeMessage } = useFireStore();
  const onSelectProcess = (type: string, data = {}, url: string) => {
    const id = uuidv4();
    writeMessage(`${type}/${id}`, JSON.stringify(data));
    router.push(`${url}/${id}`);
  };
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
                  title: "MicroSurvey Builder",
                  desc: "Form create, share to the user get analytics",
                  icon: "https://placehold.co/600x800.png",
                  url: "/microsurvey",
                  type: "microsurvey",
                },
                {
                  title: "Quiz Fight",
                  desc: "Assess a student’s understanding of a subject topic",
                  icon: "https://placehold.co/600x800.png",
                  url: "/quiz-fight",
                  type: "quiz",
                },
                {
                  title: "Exam",
                  desc: "Teach a course to students by creating a learning pathway",
                  icon: "https://placehold.co/600x800.png",
                  url: "/exam",
                  type: "exam",
                },
              ].map((item) => {
                return (
                  <button
                    onClick={() => onSelectProcess(item?.type, {}, item?.url)}
                    key={item?.title}
                  >
                    <div className="border p-4 rounded-md flex flex-col items-center justify-center hover:bg-[#306BF4] hover:text-white">
                      <Image
                        alt={item?.title}
                        src={item?.icon}
                        height={800}
                        width={600}
                        className="hover:text-white"
                      />
                      <h2 className="font-semibold py-3 text-center hover:text-white">
                        {item?.title}
                      </h2>
                      <p className="text-center text-xs hover:text-white">
                        {item?.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        }
      />
    </div>
  );
}
