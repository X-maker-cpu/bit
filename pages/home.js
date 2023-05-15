import { Avatar, Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Duration } from "luxon";

import Image from "next/image";

const Home = () => {
  const router = useRouter();
  // Videos State

  const [videos, setVideos] = useState([]);

  //   Fetching Videos

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/videos");
      setVideos(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        sx={{
          textTransform: "none",
        }}
        onClick={() => router.push("/trending")}
      >
        Go to Trending page
      </Button>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, 300px)",
          gap: 2,
          alignContent: "center",
          columnGap: "45px",
          rowGap: "15px",
        }}
      >
        {videos.map((video, i) => {
          return <VideoComponent key={i} video={video} />;
        })}
      </Box>
    </>
  );
};

export default Home;

const VideoComponent = (prop) => {
  const durationString = prop.video.contentDetails.duration;
  const duration = Duration.fromISO(durationString);

  const totalSeconds = duration.as("seconds");
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <Box>
      {/* Image box */}
      <Box
        sx={{
          position: "relative",
          height: 200,
          width: 300,
        }}
      >
        <Image
          src={prop.video.snippet.thumbnails.standard.url}
          height={200}
          width={300}
          alt="Thumbnail"
        />
        <Typography
          sx={{
            position: "absolute",
            bottom: 1,
            right: 15,
            bgcolor: "white",
          }}
          variant="caption"
        >{`${minutes}:${seconds}`}</Typography>
      </Box>
      {/* Author Data and Video Title*/}
      <Box>
        <Avatar />
        <Box>
          <Typography variant="body1">Title</Typography>
          <Typography variant="body2"></Typography>
        </Box>
      </Box>
    </Box>
  );
};
