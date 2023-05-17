import{Box} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Index = () =>{
    const router = useRouter();
    return(
        <Box 
        SX={{
            bgcolor:router.query.color,
            height: "100vh",
            width: "100vw",
        }}
        >
            color
        </Box>
    )
}

export default Index;