import  React ,{useState,useEffect,useRef,} from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import CategoryIcon from '@mui/icons-material/Category';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SwitchVideoIcon from '@mui/icons-material/SwitchVideo';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import Stack from '@mui/material/Stack';
import Image from "next/image";
import axios from "axios";
 
import { useRouter } from "next/router";



const favourites = () => {


  return (
    <>
    <button
    variant="contained"
    color="secontary"
    sx={{
      textTransform: "none",
    }}
    onClick={() =>router.push("/favorites")}
    >
      go to trinding page
    </button>
    </>
  )

}

 



const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const router = useRouter();
  // video state

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
  const drawer = (
    <Box>
      <Toolbar />
      <Divider />
      <List>
        {/* home */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        {/*  trending*/}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <WhatshotIcon />
            </ListItemIcon>
            <ListItemText primary={"popular"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <CategoryIcon />
            </ListItemIcon>
            <ListItemText primary={"categories"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary={"favourites"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SwitchVideoIcon />
            </ListItemIcon>
            <ListItemText primary={"Your videos"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      
      <ListItem disablePadding>
      <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/102448/pexels-photo-102448.jpeg?auto=compress&cs=tinysrgb&w=400" />
          <ListItemButton>
            <ListItemText primary={"Chrissbuzzi"} />
          </ListItemButton>
        </ListItem> 
        
      <ListItem disablePadding>
      <Avatar alt="Remy Sharp" src="https://i.pinimg.com/originals/95/0a/02/950a02f986810fc5ae647c52cd814aee.jpg" />
          <ListItemButton>
            <ListItemText primary={"igiraneza rieve"} />
          </ListItemButton>
        </ListItem> 
        <ListItem disablePadding>
      <Avatar alt="Remy Sharp" src="https://i.pinimg.com/originals/95/0a/02/950a02f986810fc5ae647c52cd814aee.jpg" />
          <ListItemButton>
            <ListItemText primary={"Alphonnsine uwimana"} />
          </ListItemButton>
        </ListItem> 
   </Box>
  )
  

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Typography variant="h6" noWrap component="div">
             Favorites
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {/*  */}
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
<Toolbar />

<Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 300px))",
            gap: 2,
          }}
        >
          {videos.map((video, i) => (
            <VideoComponent key={i} video={video} />
          ))}
        </Box>    
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

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
      onClick={() => router.push(`/favorites/${video.id}`)}
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
}

export default ResponsiveDrawer;
const Home= ()=>{
  // video state
  const [videos,setVideos] =useState([]);
  const videoRef =useRef();

  //fetching videos
  const fetchData = async () => {
    const response = await axios.get("https://youtu.be/my0EWweUzmw");
    console.log(response);
    setVideos(response.data);
  };
  useEffect(() => {
    fetchData()
  },[]);

  return (
    <box
    sx={{
      display:"grid",
      griTemplatecolums: "repeat(auto-fit, 210px)",
      gap:2,
      alignContent:"center",
      columGap: "45px",
      rowGap:"15px",
    }}
    >
      {videos.map((video,i) =>{
        return <VideoComponent key={i} id={video.id}/>;
      }) }
    </box>
  )
}
