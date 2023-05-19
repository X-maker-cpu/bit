import React from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

const index = () =>{
    const router=useRouter();
    return (
        <Box>
        <Box sx={{
            bgcolor: router.query.color,
height:"100vh",
width:"100vw",
        }}>
color
        </Box>

        
        </Box>
    )
}

export default index