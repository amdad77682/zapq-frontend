import Start from '@components/basic/Start';

import Rating from '@components/basic/Rating';
import End from '@components/basic/End';
import Result from '@components/basic/Result';
import Login from '@components/basic/Login';
import BinaryQue from '@components/questions/BinaryQue';
import McqQue from '@components/questions/McqQue';
import DragDropQue from '@components/questions/DragDropQue';
import TeaxtInputQue from '@components/questions/TextInputQue';
import FillInTheBlankQue from '@components/questions/FillIntheBlankQue';
import MultipleQue from '@components/questions/MultipleQue';
import Prompt from '@components/basic/Prompt';

const nodesType = {
  //basic nodes here
  basic_StartPage: Start,
  basic_PromptPage: Prompt,
  basic_RatingPage: Rating,
  basic_EndPage: End,
  basic_ResultPage: Result,
  basic_LoginPage: Login,
  //question nodes here
  question_BinaryAnswer: BinaryQue,
  question_MCQ: McqQue,
  question_DragAndDrop: DragDropQue,
  question_TextInput: TeaxtInputQue,
  question_FillInTheBlank: FillInTheBlankQue,
  question_MultipleQuestions: MultipleQue,
};

export { nodesType };
