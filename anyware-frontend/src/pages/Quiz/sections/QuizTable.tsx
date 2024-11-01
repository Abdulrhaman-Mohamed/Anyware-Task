import { Box, Button, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";
import TimerIcon from "@mui/icons-material/Timer";
import { AppDispatch } from "../../../store";
import { useDispatch } from "react-redux";
import { startQuiz } from "../../../features/quiz/quizSlice";
import { useState } from "react";
import DialogQuiz from "../../../components/DialogQuiz";
import { deleteQuiz } from "../../../service/quizService";
import { useNavigate } from "react-router-dom";





type Props ={
  quizzes:any[];
}
export default function QuizTable({quizzes}:Props) {
  const [openDialgo, setOpenDialgo] = useState(false);
  const Navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const deleteHandle = async (id:string) =>{
    const res = await deleteQuiz(id);
    console.log(res);
    if(res?.message === "Quiz Deleted Successfully") Navigate(0)
  }

  const handleClickOpen = (ques:any , courseName:string) => {
    dispatch(startQuiz({questons:ques, quizName:courseName}))
    setOpenDialgo(true);
  };
  return (
    <>
      <Typography variant="h4" my={2} color="primary">
        Quiz Table
      </Typography>
      <TableContainer className="md:shadow rounded-lg">
        <Table sx={{ width: "100%" }} aria-label="simple table">
          <TableBody>
            {quizzes?.map((row) => (
              <TableRow
                key={row?._id}
                
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "@media (max-width: 780px)": {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border:"1px solid",
                    borderColor:"primary.main",
                    borderRadius:'8px',
                    marginY:'10px'
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  {row?.title}
                </TableCell>
                <TableCell align="right">
                  <Typography color="gray" variant="overline">
                    {row?.questions.length} Questions
                  </Typography>{" "}
                  <Typography color="gray" variant="overline">
                    | {row?.questions.length *2 } MIN
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Box display={"flex"} justifyContent={"end"} gap={1}>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={()=>handleClickOpen(row?.questions,row?.title)}
                    >
                      <TimerIcon />
                    </Button>
                    <Button variant="outlined" color="info" size="small" disabled>
                      <SettingsIcon />
                    </Button>
                    <Button variant="outlined" color="error" size="small" onClick={()=> deleteHandle(row?._id)}>
                      <DeleteIcon />
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <DialogQuiz setOpenDialgo={setOpenDialgo} openDialgo={openDialgo} />
    </>
  );
}


