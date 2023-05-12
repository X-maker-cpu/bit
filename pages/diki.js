import { Home } from "@mui/icons-material";
import React, { useState } from "react";

const Home =()=>{
    const [videos. setVideos] = useState([]);
    // fetching video
    const fetData = async () =>{
        const response = await axios.get("/api/video")
        setVideos(response.data);
        
    }
}






export default Home;