import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar, Badge } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded"
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import Image from 'next/image';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {/* Home */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        {/* Popular */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <WhatshotRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Popular"} />
          </ListItemButton>
        </ListItem>
        {/* Categories */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FormatListBulletedRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Categiries"} />
          </ListItemButton>
        </ListItem>
        {/* Favarites */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FavoriteRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Favarites"} />
          </ListItemButton>
        </ListItem>
        {/* Your videos */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <VideocamRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Your videos"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: 13,
          color: "#A4A4A4",
          letterSpacing:1,
          P: "0 0 8px 0",
          ml: 2,
        }}
      >
        SUBSCRIPTIONS
      </Typography>
      <List>
        <ListItemButton>
          <ListItemIcon>
          <Badge
            color="success"
            overlap="circular"
            badgeContent=" "
            variant="dot"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCnuiDHpCwTM6Y9vr1KIcN6zGA8Sr0bvTIRL6IAgAe7Mcrj4e46WYpYItYNn9LJpEY_s&usqp=CAU"></Avatar>
          </Badge>
          </ListItemIcon>
          <ListItemText primary="NATHANAEL" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
          <Badge
            color="success"
            overlap="circular"
            badgeContent=" "
            variant="dot"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCnuiDHpCwTM6Y9vr1KIcN6zGA8Sr0bvTIRL6IAgAe7Mcrj4e46WYpYItYNn9LJpEY_s&usqp=CAU"></Avatar>
            </Badge>
          </ListItemIcon>
          <ListItemText primary="ABDIZO" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
          <Badge
            color="success"
            overlap="circular"
            badgeContent=" "
            variant="dot"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCnuiDHpCwTM6Y9vr1KIcN6zGA8Sr0bvTIRL6IAgAe7Mcrj4e46WYpYItYNn9LJpEY_s&usqp=CAU"></Avatar>
           </Badge>
          </ListItemIcon>
          <ListItemText primary="SUNDAY" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
          <Badge
            color="success"
            overlap="circular"
            badgeContent=" "
            variant="dot"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCnuiDHpCwTM6Y9vr1KIcN6zGA8Sr0bvTIRL6IAgAe7Mcrj4e46WYpYItYNn9LJpEY_s&usqp=CAU"></Avatar>
            </Badge>
          </ListItemIcon>
          <ListItemText primary="ISTARLIN" />
        </ListItemButton>
        <ListItemButton>
          <Badge
            color="success"
            overlap="circular"
            badgeContent=" "
            variant="dot"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCnuiDHpCwTM6Y9vr1KIcN6zGA8Sr0bvTIRL6IAgAe7Mcrj4e46WYpYItYNn9LJpEY_s&usqp=CAU"></Avatar>
          </Badge>
          <ListItemText primary="EDOUIGE" />
        </ListItemButton>
      </List>
      <Badge></Badge>
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
          bgcolor: "blue",
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
          <Paper component="form"
        sx={{ 
          backgroundColor: "grey",
          p: '2px 2px', 
          display: 'flex', 
          alignItems: 'center', 
          width: 700,
          height: 40,
          borderRadius: "50px"
          }}>
    <IconButton type="button" sx={{ p: '10px', color: "#DEDDDD" }} aria-label="search">
      <SearchIcon />
    </IconButton>
    <InputBase
      sx={{ ml: 1, flex: 1, color: "#DEDDDD"}}
      placeholder="Search"
      inputProps={{ 'aria-label': 'search google maps' }}/>
    </Paper>
    <Box sx=
    {{
      display: "flex",
      width: "35em",
      height: 40,
      alignItems: "center",
      justifyContent: "flex-end",
      float: "right"
      }}>

      <Stack spacing={2} direction="row">
          <Button variant="outlined" 
          sx={{
            border:"2px solid #8CC800", 
            color: "#8CC800", 
            borderRadius: "30px",
            margin: "0 60px 0 0",
            height: 30,
            width: 130,
            fontSize: 12,
            fontWeight: "bold"
            }}>ADD VIDEO</Button>
      </Stack>  
      <Avatar src="DSC_0556.png" />

      <Typography variant='subtitle1'sx={{p: "0 20px 0 18px"}}>ABDIZO</Typography>
      <ArrowDropDownTwoToneIcon sx={{margin: "0 30px 0 0"}}/>
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
          container={container}
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
        }}
      >
        <Toolbar />
        <Box sx={{
          display: "flex",
          gap: 5
        }}>
        <VideoComponent src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGvFJ9IINe0jYp35DlB7F9WlsC9iqE_wZCMQ&usqp=CAU" title="morning training" />
        <VideoComponent src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxIpNZHOdm6gPyn5EeJgtyzphnxz-PyS9Www&usqp=CAU" title="sunrise in the zoo" />
        </Box>
        <Typography >
          Explore by categories 
        </Typography>
        <Box sx={{
          display: "flex",
          gap: 6
        }}>
        <Button sx={{
          borderRadius:3,
          padding: 1,
        }} variant= "contained" color="action">
          Health Care
        </Button>
        <Button sx={{
          borderRadius:3,
          padding: 1,
          gap:50,
        }} variant= "contained" color="action">
          EDUCATION
        </Button>
        <Button sx={{
          borderRadius:3,
          padding: 1,
        }} variant= "contained" color="action">
          SPORTS
        </Button>
        <Button sx={{
          borderRadius:3,
          padding: 1,
        }} variant= "contained" color="action">
          CLASSES
        </Button>
        <Button sx={{
          borderRadius:3,
          padding: 1,
        }} variant= "contained" color="action">
          NATURE
        </Button>
        <Button sx={{
          borderRadius:3,
          padding: 1,
        }} variant= "contained" color="action">
          COOKING
        </Button>
        <Button sx={{
          borderRadius:3,
          padding: 1,
        }} variant= "contained" color="action">
          FASHION
        </Button>
        <Button sx={{
          borderRadius:3,
          padding: 1,
        }} variant= "contained" color="action">
          ANIMALS
        </Button>
        </Box>
      </Box>
    </Box>
  );
};
ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;

const VideoComponent = (prop) => {
  return(
  <Box >
    {/* image and duratin */}
    <Box sx={{
      position: "relative", width: 500,
      height: 400,
    }}
    >
    <Image src={prop.src} height={400} width= {500}/>
    <Typography 
    variant='caption'
    sx={{
      position: "absolute",
      bottom: 0,
      right: 10,
    }}
    >
     55:30
    </Typography>
    </Box>
    {/* Author Avatar, video tittle and author name*/}
    <Box sx={{ display: "flex"}}>
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIowiTvupIDXVcDEnmpeWkig90a4kXRgwW8g&usqp=CAU"></Avatar>
      <Box>
        <Typography variant='body1'>{prop.title}</Typography>
        <Typography variant='caption'>Bantuuuu legend </Typography>
      </Box>
    </Box>
  </Box>
  );
};
