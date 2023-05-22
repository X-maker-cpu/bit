# /{}/id

```jsx
import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";

const Index = () => {
  const router = useRouter();
  const id = router.query.id;
  const [videoData, setVideoData] = useState(null);
  useEffect(() => {
    const getVideoData = async (videoId) => {
      if (videoId) {
        const response = await axios.get(`/api/videos/${videoId}`);
        setVideoData(response.data);
      }
    };
    getVideoData(id);

    return () => {
      setVideoData(null);
    };
  }, [id]);

  console.log(
    "Video Data:>>",
    videoData && typeof videoData.video.snippet.description
  );
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <iframe
          width="1100"
          height="620"
          src={`https://www.youtube.com/embed/${id}`}
          frameborder="0"
          allowfullscreen
        ></iframe>
        {videoData ? (
          <Box sx={{ display: "flex" }}>
            <Avatar
              sx={{
                height: 100,
                width: 100,
              }}
              src={videoData.channelProfileImage}
            ></Avatar>
            <Box>
              <Typography variant="h5">
                {videoData.video.snippet.channelTitle}
              </Typography>
              <Typography variant="h6">
                {videoData.video.snippet.title}
              </Typography>
            </Box>
          </Box>
        ) : null}
      </Box>
      {videoData && (
        <Box
          sx={{
            p: 1,
          }}
        >
          55:03
        </Typography>
      </Box>
      {/*video Details */}
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Avatar>PE</Avatar>
        <Box>
          <Typography>Zebra</Typography>
          <Typography>Author Name</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Index;

```
