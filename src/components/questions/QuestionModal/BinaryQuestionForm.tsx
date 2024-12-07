import React, { useState } from "react";
import QuestionField from "./common/QuestionField";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Switch } from "../../ui/switch";
import { Checkbox } from "./common/CheckBox";
import OverallFeedback from "./common/OverallFeedback";
import QuestionHintExplanations from "./common/QuestionHintExplanations";
import Button from "@components/common/Form/Button";
import OptionInputField from "./common/OptionInputField";

type FormValues = {
  question: string;
  options: { name: string; label: string }[];
};

export default function BinaryQuestionForm() {
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[#111827] text-lg font-medium">অপশন</h1>
              <p className="mt-0.5 text-[#9CA3AF] text-sm font-medium">
                সঠিক উত্তরগুলোতে চেকমার্ক দিয়ে রাখুন
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <p className="text-[#6B7280] text-base">Overall Feedback</p>
              <Switch
                id="overall-feedback-toggle"
                checked={isFeedbackEnabled}
                onCheckedChange={(checked) => setIsFeedbackEnabled(checked)}
              />
            </div>
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
                    <OptionInputField
                      label={option.label}
                      name={option.name}
                      value={value as string}
                      onChange={onChange}
                      feedbackEnabled={!isFeedbackEnabled}
                    />
                  )}
                />
                <Checkbox id={`checkbox-${index}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Overall Feedback Section */}
        {isFeedbackEnabled && (
          <div className="-mx-6 border-t-[1px] border-[#E5E7EB]">
            <div className="py-4 px-6">
              <OverallFeedback />
            </div>
          </div>
        )}

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
