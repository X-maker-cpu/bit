import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const lndex = () => {
    const router = useRouter();
    return (
        <Box 
        sx={{
            bgcolor:router.query.color,
            height: "100vh",
            width: "100vh",
        }}
        >
            color
        </Box>
    );
};
