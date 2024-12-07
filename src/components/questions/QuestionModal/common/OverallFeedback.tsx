import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import QuestionField from './QuestionField';

type FormValues = {
  correctAnswerFeedback: string;
  wrongAnswerFeedback: string;
};

export default function OverallFeedback() {
  const { control } = useForm<FormValues>();

  return (
    <div>
      <div className="flex justify-between items-center">
        <h4 className="text-[#111827] text-lg font-medium">Overall Feedback</h4>
        {/* <p className="text-[#4B5563] text-base font-normal underline cursor-pointer">
          উপরে একক ফিডব্যাক দেই
        </p> */}
      </div>

      <div className="mt-4 mb-6 flex flex-col gap-5">
        <Controller
          name="correctAnswerFeedback"
          control={control}
          rules={{ required: 'Answer is required.' }}
          render={({ field: { onChange, value } }) => (
            <QuestionField
              label={'সঠিক উত্তরের ফিডব্যাক'}
              onChange={onChange}
              name="correctAnswerFeedback"
              value={value}
            />
          )}
        />

        <Controller
          name="wrongAnswerFeedback"
          control={control}
          rules={{ required: 'Answer is required.' }}
          render={({ field: { onChange, value } }) => (
            <QuestionField
              label={'ভুল উত্তরের ফিডব্যাক'}
              onChange={onChange}
              name="wrongAnswerFeedback"
              value={value}
            />
          )}
        />
      </div>
    </div>
  );
}
