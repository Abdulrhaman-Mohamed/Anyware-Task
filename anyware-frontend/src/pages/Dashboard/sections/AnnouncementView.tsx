import { Avatar, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function AnnouncementView() {
  return (
    <>
      <Box className="shadow" borderRadius={2} padding={1}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box>
            <Typography variant="h6" color="secondary">
              Announcement
            </Typography>
            <Typography color="gray" variant="subtitle2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Box>
          <Button variant="text">
            <Link to={"/announcement"}>All</Link>
          </Button>
        </Box>
        <Box padding={3} display={"flex"} flexDirection={"column"} gap={2}>
          <Box
            display={"flex"}
            gap={2}
            flexDirection={{ xs: "column", md: "row" }}
            textAlign={{ xs: "center", md: "start" }}
          >
            <Box
              display={"flex"}
              gap={1}
              width={{ xs: "100%", md: "40%" }}
              alignItems={"center"}
              flexDirection={{ xs: "column", md: "row" }}
            >
              <Avatar src="images/teacher.jpg" alt="Ahmed Mostafa" />
              <Box>
                <Typography color="secondary" fontWeight={700}>
                  Mr.Ahmed Mostafa
                </Typography>
                <Typography color="gray" variant="subtitle1">
                  Math 101
                </Typography>
              </Box>
            </Box>
            <Typography color="gray" width={"98%"}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              fugit veritatis vero maiores nesciunt exercitationem dolor nemo,
              explicabo omnis asperiores iure eius 😊.
            </Typography>
          </Box>
          <Box
            display={"flex"}
            gap={2}
            flexDirection={{ xs: "column", md: "row" }}
            textAlign={{ xs: "center", md: "start" }}
          >
            <Box
              display={"flex"}
              gap={1}
              width={{ xs: "100%", md: "40%" }}
              alignItems={"center"}
              flexDirection={{ xs: "column", md: "row" }}
            >
              <Avatar src="images/teacher.jpg" alt="Ahmed Mostafa" />
              <Box>
                <Typography color="secondary" fontWeight={700}>
                  Mr.Ahmed Mostafa
                </Typography>
                <Typography color="gray" variant="subtitle1">
                  Math 101
                </Typography>
              </Box>
            </Box>
            <Typography color="gray" width={"98%"}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              fugit veritatis vero maiores nesciunt exercitationem dolor nemo,
              explicabo omnis asperiores iure eius 😊.
            </Typography>
          </Box>
          <Box
            display={"flex"}
            gap={2}
            flexDirection={{ xs: "column", md: "row" }}
            textAlign={{ xs: "center", md: "start" }}
          >
            <Box
              display={"flex"}
              gap={1}
              width={{ xs: "100%", md: "40%" }}
              alignItems={"center"}
              flexDirection={{ xs: "column", md: "row" }}
            >
              <Avatar src="images/teacher.jpg" alt="Ahmed Mostafa" />
              <Box>
                <Typography color="secondary" fontWeight={700}>
                  Mr.Ahmed Mostafa
                </Typography>
                <Typography color="gray" variant="subtitle1">
                  Math 101
                </Typography>
              </Box>
            </Box>
            <Typography color="gray" width={"98%"}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              fugit veritatis vero maiores nesciunt exercitationem dolor nemo,
              explicabo omnis asperiores iure eius 😊.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
