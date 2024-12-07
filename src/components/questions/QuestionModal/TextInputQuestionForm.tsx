import Button from "@components/common/Form/Button";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import OverallFeedback from "./common/OverallFeedback";
import QuestionField from "./common/QuestionField";
import QuestionHintExplanations from "./common/QuestionHintExplanations";
import TextInputField from "./common/TextInputField";

type FormValues = {
  question: string;
  options: { name: string; label: string }[];
};

export default function TextInputQuestionForm() {
  const { handleSubmit, control } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
  };

  const [options, setOptions] = useState([
    {
      name: "firstOption",
      label: "১ম অপশন",
    },
    {
      name: "secondOption",
      label: "২য় অপশন",
    },
  ]);

  const [isFeedbackEnabled, setIsFeedbackEnabled] = useState(false);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="question"
          control={control}
          rules={{ required: "Question is required." }}
          render={({ field: { onChange, value } }) => (
            <QuestionField
              label={"প্রশ্ন"}
              onChange={onChange}
              name="question"
              value={value}
            />
          )}
        />

        <div className="mt-6 pb-8">
          <div>
            <h1 className="text-[#111827] text-lg font-medium">
              Acceptable answers
            </h1>
            <p className="mt-0.5 text-[#9CA3AF] text-sm font-medium">
              সঠিক উত্তরগুলো নিচে লিখুন
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-6">
            {options.map((option, index) => (
              <div key={option.name} className="flex items-center gap-3">
                <button type="button">
                  <img
                    src="https://placehold.co/600x400.png"
                    alt="trash-icon"
                  />
                </button>
                <Controller
                  name={option.name as keyof FormValues}
                  control={control}
                  rules={{ required: `${option.label} is required.` }}
                  render={({ field: { onChange, value } }) => (
                    <TextInputField
                      label={option.label}
                      name={option.name}
                      value={value as string}
                      onChange={onChange}
                    />
                  )}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Overall Feedback Section */}
        <div className="-mx-6 border-t-[1px] border-[#E5E7EB]">
          <div className="py-4 px-6">
            <OverallFeedback />
          </div>
        </div>

        <div className="-mx-6 border-t-[1px] border-b-[1px] border-[#E5E7EB]">
          <div className="py-4 px-6">
            <QuestionHintExplanations />
          </div>
        </div>

        <Button
          type="primary"
          class_name="px-16 py-5 mt-4 ml-auto font-semibold"
        >
          সেভ করুন
        </Button>
      </form>
    </div>
  );
}
