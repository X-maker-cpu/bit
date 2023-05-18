import { Box} from "@mui/material"
import { useRouter } from "next/router"
import React from "react"

const Index = () => {
    const router = useRouter();
    return(
        <Box sx={{
            bgcolor: router.query.color,
            heught: "100vh",
            widht: "100vw",
        }}
        >
         color
        </Box>
    );
};

export default Index;
