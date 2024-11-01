import Grid from "@mui/material/Grid2";

import AnnouncementView from "./sections/AnnouncementView";
import DueQuiz from "./sections/DueQuiz";
import ViewTasks from "./sections/ViewTasks";



export default function Dashboard() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={12}>
          <ViewTasks />
        </Grid>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 9 }}>
            <AnnouncementView />
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <DueQuiz />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
