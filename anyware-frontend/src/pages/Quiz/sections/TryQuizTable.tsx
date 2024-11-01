import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";




export default function TryQuizTable() {
  const {attempts , questions} = useSelector((state: RootState) => state.quiz);
  return (
    <>
      <Typography variant="h4" my={2} color="primary">
        Quiz Result
      </Typography>
      <TableContainer className="md:shadow">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                "@media (max-width: 780px)": {
                  display: "none",
                },
              }}
            >
              <TableCell>Course Name</TableCell>
              <TableCell align="right">Score</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Finish Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attempts?.map((row) => (
              <TableRow
                key={row.finishTime}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "@media (max-width: 780px)": {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: "1px solid",
                    borderColor: "info.main",
                    borderRadius: "8px",
                    marginY: "10px",
                  },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.score} / {questions.length}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.finishTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
