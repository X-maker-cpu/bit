import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import FavoriteIcon from '@mui/icons-material/Favorite';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import VideocamIcon from '@mui/icons-material/Videocam';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Image from "next/image";
import{useRouter} from "next/router";



const Home =()=>{

  // video state 

 const [Videos,setVideos]  =useState([]);
 const VideoRef =userRef();

// Fetching Videos
const fetchingData =async() => {
  const response =await axios.get("/api/videos");
  setVideos(response.data);
};

useEffect(() => {
  fetchingData();
}, []);

return (
  <>
  <button varriant ="container"
  color="secondary"
  sx={{
    textTransformation:"home",
  }}
  >
    Go to Trending page
  </button>
  <button varriant ="container"
  color="secondary"
  sx={{
    textTransformation:"home",
  }}
  >
    Go to home
  </button>
  <button varriant ="container"
  color="secondary"
  sx={{
    textTransformation:"home",
  }}
  >
    Go to Favorite page
  </button>
  </>
)

}


const drawerWidth = 240;
function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router=useRouter();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar >
      </Toolbar>
      <Divider />
      <List>
        {/* home */}
        <ListItem disablePadding>
            <ListItemButton onClick ={() =>router.push("/home")}>
              <ListItemIcon>
              <HomeIcon />
              </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        
        {/*  trending*/}
        <ListItem disablePadding>
          <ListItemButton onClick ={() =>router.push("/trending")}>
            <ListItemIcon>
              <WhatshotIcon />
            </ListItemIcon>
            <ListItemText primary={"Popular"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FormatListBulletedIcon />
            </ListItemIcon>
            <ListItemText primary={"categories"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary={"Favourites"} />
          </ListItemButton >
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick ={() =>router.push("/trending")}>
            <ListItemIcon>
              <VideocamIcon />
            </ListItemIcon>
            <ListItemText primary={"Your videos"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Typography
        variant="h6"
        FontFamily={"robot"}
        fontWeight={"50"}
        fontSize={"1rem"}
        padding={"2rem"}
      >
        SUBSCRIPTIONS
      </Typography>

      <List>
      <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <Badge color="success"  badgeContent=" " variant="dot"   anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}>

<Avatar alt="Y" src="https://i.pinimg.com/564x/90/62/55/90625588b0fc8ec87aad6f70a5515204.jpg"/>
  </Badge>


          
            </ListItemIcon>
            <ListItemText primary={"Yoga with Kim"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
      <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <Badge color="success"  badgeContent=" " variant="dot"   anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}>
              <Avatar alt="B" src="https://images.unsplash.com/photo-1615791287388-6f1bd87ace4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMHJldmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"/>

  </Badge>

            </ListItemIcon>
          
            <ListItemText primary={"Books Review"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
      <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <Badge color="success"  badgeContent=" " variant="dot"   anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}>
              <Avatar alt="Br" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIC38MwoYtW4L7x1z5o4FVzgwdRBcHbA1QRQ&usqp=CAU"/>

  </Badge>
            </ListItemIcon>
          
            <ListItemText primary={"Brittary Bathgats"} />
                      </ListItemButton>
          </ListItem>
      </List>
      <List>
      <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <Badge color="success"  badgeContent=" " variant="dot"   anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}>
              <Avatar alt="G" src ="https://thumbs.dreamstime.com/b/portrait-funny-cute-ginger-dog-big-ears-looks-straight-camera-background-isolated-194579466.jpg"/>

  </Badge>
            </ListItemIcon>
          
            <ListItemText primary={"GingerDog"} />
            </ListItemButton>
          </ListItem>
      </List>
      <List>
      <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <Badge color="success"  badgeContent=" " variant="dot"   anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}>
              <Avatar alt="A" src="https://media.istockphoto.com/id/545286388/photo/chinese-food-blank-background.webp?s=612x612&w=is&k=20&c=yn2iMa8SUVvOTjMX5kMaebQEWkT00PZqYI5Dr0FFxZU="/>

  </Badge>
            </ListItemIcon>
          
            <ListItemText primary={"Asian Recipies"} />
            </ListItemButton>
          </ListItem>
      </List>
  <Box sx={{
    m:1,
    p:1,
    backgroundColor:"whitesmoke"
  }}> 
    <Typography variant="body1" fontWeight={700} >Get 3 months of premium for free</Typography>
    <Typography variant="body2">Enjoy ad-free content,offline watching and more</Typography>
  </Box>
  <Box sx={{
    borderRadius:20,
    border: '2px solid green',
    backgroundColor: "black",
    padding: 1,
    
  }}>
  <Typography variant="h5" color="green" alignItems="center">GET PREMIUM</Typography>

  </Box>
  </div>
  );
  
  
  const container =
    window !== undefined ? () => window().document.body : undefined;

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
              Responsive drawer
            </Typography>
          </Box>
         <Box sx={{gap:30 ,marginLeft:90}}>
      <Avatar alt="M" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7OpvCyhmhGki-ZZ2Ly4LZIF-EavKqSUHCuA&usqp=CAU" />
    </Box>
      <Typography >May Harmon</Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
             // Better open performance on mobile.
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

export default ResponsiveDrawer
const videoComponent = ({youtubeVideoUrl}) => {
  return (
    <Box>
      sx={{
        height:200,
        width:300,
        borderRadius: 10,
        bcolor:"dodgerblue",
      }}
      {/* Video Image */}
      <Box 
      sx={{
        position:"relative",
      }}>
        <Image
        src="https://images.pexels.com/photos/2862070/pexels-photo-2862070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        height={200}
        width={300}
        alt="Zebra"
        />
        <Typography
        sx={{
          position:"absolute",
          right:10,
          bottom:15,
          color:"white",
          backgroundcolor: "GreyText",
          p:0.5,
        }}
        variant="GrayText"
        >55:03</Typography>
       </Box>
       {/*video Details */}
       <Box
       sx={{
        display:"flex",
       }}
       >


       <Avatar>PE</Avatar>
       <Box>
        <Typography>Title</Typography>
        <Typography>Author Name</Typography>
       </Box>
       </Box>
    </Box>
  );
};              

function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 800 }}
    >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
 
    </Paper>
  );
}

