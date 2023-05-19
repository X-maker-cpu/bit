import { box } from "@mui/material";
import { useaRouter } from "next/router";
import React from "react"

const Index = () => {
    const router = useRouter();
    return (
        <box
        sx={{
            bgcolor:router.query.color,
            height: "100vh",
            width: "100vw",
        }}
        >
            color

        </box>
    );
};