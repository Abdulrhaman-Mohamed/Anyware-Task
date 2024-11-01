import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { answerQuestion } from "../features/quiz/quizSlice";


export default function Question() {
  const dispatch = useDispatch<AppDispatch>();
  const { questions, currentQuestionIndex , userAnswers} = useSelector(
    (state: RootState) => state.quiz
  );
  const question = questions[currentQuestionIndex];
  const selectedAnswer = userAnswers[question?._id] || "";

  const handleAnswer = (answer: string) => {
    dispatch(answerQuestion({ questionId: question._id, answer }));
    
  };

  return (
    <>
      <Box
      >
        <Box
          bgcolor={"primary.light"}
          padding={"40px 15px"}
          borderRadius={"8px"}
        >
          <Typography>{question?.questionText}</Typography>
        </Box>
        <Box pt={2}>
          <FormControl>
            <FormLabel id={question?._id}>
              Question {currentQuestionIndex + 1}
            </FormLabel>
            <RadioGroup
              aria-labelledby={question?._id}
              name={question?._id}
              onChange={(e)=>handleAnswer(e.currentTarget.value)}
              value={selectedAnswer}
            >
              {question?.options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </>
  );
}
