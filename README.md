# Fetching

```jsx
import { useRouter } from "next/router";
import axios from "axios";

const App =()=>{
const [videos, setVideos] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/videos");
      setVideos(response.data);
    };

    fetchData();

    return () => {
      setVideos([]);
    };
  }, []);

  return(<Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 300px))",
            gap: 2,
          }}
        >
          {videos.map((video, i) => (
            <VideoComponent key={i} video={video} />
          ))}
        </Box>)
}

const VideoComponent = ({ video }) => {
  console.log(video);
  const router = useRouter();

  return (
    <Box
      sx={{
        height: 300,
        width: 300,
        borderRadius: 10,
        boxShadow: 3,
        mb: 1,
      }}
      onClick={() => router.push(`/categories/${video.id}`)}
    >
      {/* Video Image */}
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Image
          src={video.snippet.thumbnails.medium.url}
          height={200}
          width={300}
          alt="Zebra"
        />
        <Typography
          sx={{
            position: "absolute",
            right: 10,
            bottom: 15,
            color: "white",
            backgroundcolor: "GreyText",
            p: 0.5,
          }}
          variant="GrayText"
        >
          55:03
        </Typography>
      </Box>
      {/*video Details */}
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Avatar>PE</Avatar>
        <Box>
          <Typography>Zebra</Typography>
          <Typography>Author Name</Typography>
        </Box>
      </Box>
    </Box>
  );
};
```
