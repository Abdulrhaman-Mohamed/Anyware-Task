import { Box, Button, Typography } from "@mui/material";

import TimerIcon from "@mui/icons-material/Timer";
import { Link } from "react-router-dom";

export default function DueQuiz() {
  return (
    <>
      <Box className="shadow" borderRadius={2} padding={3}>
        <Box>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography variant="h6" color="secondary">
              What's due
            </Typography>
            <Button variant="text">
              <Link to={"/quiz"}>All</Link>
            </Button>
          </Box>
          <Typography color="gray" variant="subtitle2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </Box>

        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <Box py={2}>
            <Box display={"flex"} gap={1}>
              <TimerIcon color={"primary"} />
              <Typography color="secondary" fontWeight={500}>
                Unit 2 Quiz
              </Typography>
            </Box>
            <Typography color="gray">Course: physics 02</Typography>
            <Typography color="gray">Topic: Unit 2 Motion</Typography>
            <Typography color="gray">Due to: 22 Dec 2024 - 09:00 AM</Typography>
            <Button variant="outlined" fullWidth>
              <Link to={"/quiz"}>Start Quiz</Link>
            </Button>
          </Box>
          <Box py={2}>
            <Box display={"flex"} gap={1}>
              <TimerIcon color={"primary"} />
              <Typography color="secondary" fontWeight={500}>
                Unit 2 Quiz
              </Typography>
            </Box>
            <Typography color="gray">Course: physics 02</Typography>
            <Typography color="gray">Topic: Unit 2 Motion</Typography>
            <Typography color="gray">Due to: 22 Dec 2024 - 09:00 AM</Typography>
            <Button variant="outlined" fullWidth>
              <Link to={"/quiz"}>Start Quiz</Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
