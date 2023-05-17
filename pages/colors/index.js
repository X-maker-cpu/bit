import {Box} from "@mui/material";
import { useRouter} from "next/router";
import React from "react";

const Index = () => { 
  const useRouter=useRouter();
    return (
        <Box
        sx={{
            bgcolor: Router.query.color,

            width: "100vh",
            height: "100vh",
        }}
        >
       
        </Box>
    );
};

export default Index;