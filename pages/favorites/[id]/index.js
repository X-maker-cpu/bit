import { useRouter } from "next/router";
import React from "react";

const Index =() => {
    const router = useRouter();
    return (
        <div>
            <iframe
            width="1280"
            height="750"
            src={`https://www.youtube.com/embed/${router.query.id}`}
            frameborder="0"
            ></iframe>
        </div>
    );
};

export default Index;