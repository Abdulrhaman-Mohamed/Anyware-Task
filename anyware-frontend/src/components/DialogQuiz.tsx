import * as React from "react";

import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import QuestionInProgress from "./QuestionInProgress";
import { Box } from "@mui/material";
import { AppDispatch } from "../store";
import { useDispatch } from "react-redux";
import { calculateScore } from "../features/quiz/quizSlice";

type Props = {
  openDialgo: boolean;
  setOpenDialgo: Function;
};
export default function DialogQuiz({ openDialgo, setOpenDialgo }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  const handleClose = () => {
    setOpenDialgo(false);
    dispatch(
      calculateScore({
        courseName: "Quiz Test",
        finishTime: `${new Date().toUTCString()}`,
      })
    );
  };

  return (
    <React.Fragment>
      <Dialog
        onClose={handleClose}
        // aria-labelledby="customized-dialog-title"
        open={openDialgo}
        maxWidth="lg"
        fullWidth={true}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 2,
            top: 0,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <Box sx={{ padding: "16px", width: "100%" }}>
            <QuestionInProgress setOpenDialgo={setOpenDialgo}/>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
