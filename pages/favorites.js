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
  const router = useRouter();
  // video state

  const [video, setVideo] = useState([]);
  const videoRef = useRef();

  // fetching video
  const fetchData =async() => {
    const rensponse = await axios.get("/api/videos");
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <>
    <button
    variant="contained"
    color="secontary"
    sx={{
      textTransform: "none",
    }}
    onClick={() =>router.push("/trending")}
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

<Home/>
    
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
 const VideoComponent = (prop) => {
  return (
    <Box>
      <iframe
        width="auto"
        height="auto"
        src={"https://youtu.be/my0EWweUzmw"}
      ></iframe>
    </Box>
  );
 };
  
