import { useRouter } from "next/router";
import React from 'react';

const Index =()=>{
    const router =useRouter();
    return (
        <div>
            <iframe
                width="1280"
                height="720"
                src={`https://www.youtube.com/embed/${router.query.id}`}
                frameborder="0"
                allowfullscreen

            ></iframe>
            </div>
    );
};
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
    const router =useRouter();
    return(
        <div>
            <iframe
            width="1280"
            height="720"
            src={`https://www.youtube.com/embed/${router.query.id}`}
            frameborder="0"
            allowFullScreen
            ></iframe>
        </div>
    );
};

export default Index;