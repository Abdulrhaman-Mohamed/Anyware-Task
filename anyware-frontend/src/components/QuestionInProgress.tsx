import {
  Box,
  Button,
  Divider,
  LinearProgress,
  Typography,
} from "@mui/material";
import Question from "./Question";
import { AppDispatch, RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateScore,
  nextQuestion,
  previousQuestion,
} from "../features/quiz/quizSlice";

type Props = {
  setOpenDialgo: Function;
};

export default function QuestionInProgress({setOpenDialgo}: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const { questions, currentQuestionIndex} = useSelector(
    (state: RootState) => state.quiz
  );

  const finishHandle = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setOpenDialgo(false)
      dispatch(calculateScore({courseName:"Quiz Test" , finishTime:`${new Date().toUTCString()}`}));
    }
  };

  const progressPercentage = 100/questions.length;

  return (
    <>
      <Box
        border={"1px solid"}
        borderColor={"primary.light"}
        borderRadius={"8px"}
        padding={5}
        display={"flex"}
        flexDirection={"column"}
        gap={3}
      >
        <Typography variant="h4" color="info">
          Fast Quiz
        </Typography>
        <Divider />
        <LinearProgress value={progressPercentage * currentQuestionIndex } variant="determinate" />
        <Question />
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={
            currentQuestionIndex > 0 ? "space-between" : "flex-end"
          }
          flexDirection={{xs:'column',md:'row'}}
          gap={{xs:2 , md:0}}
        >
          {currentQuestionIndex > 0 && (
            <Button
              variant="outlined"
              color="info"
              onClick={() => dispatch(previousQuestion())}
            >
              Previous
            </Button>
          )}
          {questions.length - 1 > currentQuestionIndex && (
            <Button
              variant="outlined"
              color="info"
              onClick={() => dispatch(nextQuestion())}
            >
              Next
            </Button>
          )}
          {questions.length - 1 === currentQuestionIndex && (
            <Button
              variant="contained"
              disableElevation
              color="success"
              onClick={finishHandle}
            >
              Finish
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
}
