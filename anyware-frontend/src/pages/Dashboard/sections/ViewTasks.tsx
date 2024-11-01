import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ViewTasks() {
  return (
    <>
      <Box className="shadow" borderRadius={2} padding={3}>
        <Grid container alignItems={"center"}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h3" fontWeight={700} color="primary">
              EXAMS TIME
            </Typography>
            <Typography color="secondary" pb={2}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              omnis quam magnam minus, doloribus quod repellendus praesentium
            </Typography>
            <Typography color="gray" pb={3}>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            </Typography>
            <Button variant="contained" color="primary">
              <Link to={'/quiz'}>View exams tips</Link>
            </Button>
          </Grid>
          <Grid display={{ xs: "none", md: "block" }} size={{ md: 4 }}>
            <img
              src="images/quiz show-bro.png"
              alt="Quiz intro image"
              className="w-full"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
