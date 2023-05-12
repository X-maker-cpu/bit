import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";

const Home = () => {
  // Videos State

  const [videos, setVideos] = useState([]);
  const videoRef = useRef();

  //   Fetching Videos
  const fetchData = async () => {
    const response = await axios.get("/api/videos");
    console.log(response);
    setVideos(response.data);
  };

  useEffect(() => {
    const handleLoadedMetadata = () => {
      videoRef.current.play();
    };

    videoRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      videoRef.current.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );
    };
  }, []);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, 210px)",
        gap: 2,
        alignContent: "center",
        columnGap: "45px",
        rowGap: "15px",
      }}
    >
      {videos.map((video, i) => {
        return <VideoComponent key={i} id={video.id} />;
      })}
    </Box>
  );
};

export default Home;

const VideoComponent = (prop) => {
  return (
    <Box>
      <iframe
        width="auto"
        height="auto"
        src={`https://www.youtube.com/embed/${prop.id}`}
      ></iframe>
    </Box>
  );
};

