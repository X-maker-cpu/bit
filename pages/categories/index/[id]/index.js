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
          <Typography variant="h6">Statistic</Typography>
          <Divider />
          <Box>
            <Typography variant="body2">
              Views {videoData.video.statistics.viewCount}
            </Typography>
            <Typography variant="body2">
              Likes {videoData.video.statistics.likeCount}
            </Typography>
            <Typography variant="body2">
              Comments {videoData.video.statistics.commentCount}
            </Typography>
          </Box>
          <Typography variant="h6">Description</Typography>
          <Divider />
          <Typography variant="body2">
            {String(videoData.video.snippet.description)
              .split(`\n`)
              .map((item, key) => {
                // match URLs and hashtags using regular expressions
                const urls = item.match(/https?:\/\/[^\s]+/g);
                const hashtags = item.match(/#\w+/g);

                // replace URLs and hashtags with links and colored text
                if (urls && urls.length > 0) {
                  urls.forEach((url) => {
                    item = item.replace(
                      url,
                      `<a style="color:#1565c0;padding:0px" target=_blank href=${url}>${url}</a>`
                    );
                  });
                }
                if (hashtags && hashtags.length > 0) {
                  hashtags.forEach((hashtag) => {
                    item = item.replace(
                      hashtag,
                      `<span style="color: #1565c0; font-weight: bold;">${hashtag}</span>`
                    );
                  });
                }

                return (
                  <span key={key}>
                    {ReactHtmlParser(item)}
                    <br />
                  </span>
                );
              })}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Index;

