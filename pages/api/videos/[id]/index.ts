import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    if (req.query.id) {
      // Handle request to /api/videos/:id
      const videoId = req.query.id.toString();

      // Fetch video details using the provided ID
      const videoDetails = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyAGbJaPxHjWPEDVuDI09Mki1lqgmlVdLCE&id=${videoId}&part=contentDetails,statistics,topicDetails,snippet`
      );

      // Check if the video was found
      if (videoDetails.data.items.length === 0) {
        res.status(404).json({ error: "Video not found" });
        return;
      }

      // Extract the channel ID from the video details
      const channelId = videoDetails.data.items[0].snippet.channelId;

      // Fetch channel details using the channel ID
      const channelDetails = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?key=AIzaSyAGbJaPxHjWPEDVuDI09Mki1lqgmlVdLCE&id=${channelId}&part=snippet`
      );

      // Check if the channel was found
      if (channelDetails.data.items.length === 0) {
        res.status(404).json({ error: "Channel not found" });
        return;
      }

      // Return the specific video data with channel profile image
      const videoData = videoDetails.data.items[0];
      const channelData = channelDetails.data.items[0];
      const responseData = {
        video: videoData,
        channelProfileImage: channelData.snippet.thumbnails.high.url,
      };
      res.json(responseData);
    } else {
      // Handle request to /api/videos
      const youtubeVideos = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyAGbJaPxHjWPEDVuDI09Mki1lqgmlVdLCE&chart=mostPopular&part=contentDetails,statistics,topicDetails,snippet&maxResults=50&regionCode=KE`
      );
      res.json(youtubeVideos.data.items);
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
