import { useEffect, useState } from "react";

import { Avatar, Box, Stack, Typography } from "@mui/material";

import CampaignIcon from "@mui/icons-material/Campaign";
import { getAnnouncements } from "../../service/announcementService";
import { formatDistanceToNow } from "date-fns";

type Props = {};

type Announcement = {
  _id: string;
  content: string;
  author: {
    username: string;
  };
  updatedAt: string;
};

export default function Announcement({}: Props) {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);  

  useEffect(() => {
    const AnnouncementsReq = async () => {
      const res: Announcement[] = await getAnnouncements();
      setAnnouncements(res.reverse());
    };
    AnnouncementsReq();
  }, []);
  return (
    <>
      <Box display={"flex"} alignItems={"center"} gap={1} padding={"30px 0"}>
        <CampaignIcon sx={{ fontSize: "40px" }} color={"third"} />{" "}
        <Typography variant="h4" color="third">
          Announcement
        </Typography>
      </Box>

      <Box
        padding={3}
        borderRadius={"8px"}
        border={"1px solid"}
        borderColor={"gray.main"}
      >
        <Typography variant="h6" padding={"10px 0"}>
          {announcements?.length} Announcement
        </Typography>
        <Stack spacing={2}>
          {announcements?.map((item) => (
            <Box
            key={item._id}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                backgroundColor: "third.main",
                color: "white !important",
                padding: "20px",
                borderRadius: 1,
              }}
            >
              <Typography>
                {item?.content}
              </Typography>
              <Box display={"flex"} justifyContent={"space-between"} flexDirection={{xs:'column' , md:'row'}} alignItems={'center'}>
                <Box display={"flex"} alignItems={"center"} gap={1} flexDirection={{xs:'column' , md:'row'}} >
                  <Avatar src="/static/images/avatar/2.jpg" alt={item?.author.username} sx={{ width: "30px", height: "30px" }} />
                  <Typography variant="subtitle1">{item?.author.username}</Typography>
                </Box>
                <Typography variant="subtitle1" color="gray">{item?.updatedAt && formatDistanceToNow(new Date(item.updatedAt), { addSuffix: true })}</Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </>
  );
}
