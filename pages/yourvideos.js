import { Box, Typography, Avatar, Toolbar, Divider } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ViewListIcon from "@mui/icons-material/ViewList";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VideocamIcon from "@mui/icons-material/Videocam";
import Button from "@mui/material/Button";
import Image from "next/image";
import vidBg from "../public/vidBg.mp4";
import React from "react";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';


const Yourvideos = () => {

  return <><ResponsiveDrawer/></>;
};

const drawerWidth = 200;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
const drawer = (
<div>
  <Toolbar sx={{bgcolor:"#322F2F", boxShadow: 4}}>
  <Typography variant="h6" sx={{color: 'white'}}>
          LoGo
        </Typography>
  </Toolbar>
  <Divider />
  <List sx={{color: '#A4A4A4'}}>
    {/* Home btn */}
  <ListItem  disablePadding>
        <ListItemButton>
          <ListItemIcon>
              <HomeIcon sx={{color:'#A4A4A4'}}/> 
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItemButton>
      </ListItem>
      {/* popural btn */}
      <ListItem  disablePadding>
        <ListItemButton>
          <ListItemIcon>
          <WhatshotIcon sx={{color:'#A4A4A4'}}/> 
          </ListItemIcon>
          <ListItemText primary={"Popural"} />
        </ListItemButton>
      </ListItem>
      {/* categories btn */}
      <ListItem  disablePadding>
        <ListItemButton>
          <ListItemIcon>
          <ViewListIcon sx={{color:'#A4A4A4'}}/> 
          </ListItemIcon>
          <ListItemText primary={"Categories"} />
        </ListItemButton>
      </ListItem>
      {/* Favorites btn */}
      <ListItem  disablePadding>
        <ListItemButton>
          <ListItemIcon>
          <FavoriteIcon sx={{color:'#A4A4A4'}}/> 
          </ListItemIcon>
          <ListItemText primary={"Favorites"} />
        </ListItemButton>
      </ListItem>
      {/* Yourvideos btn */}
      <ListItem  disablePadding>
        <ListItemButton>
          <ListItemIcon>
          <VideocamIcon sx={{color:'#A4A4A4'}}/> 
          </ListItemIcon>
          <ListItemText primary={"Your videos"} />
        </ListItemButton>
      </ListItem>
  </List>
  <Typography variant='subtitle1' sx={{fontSize: 13, color: "#A4A4A4", letterSpacing: 1,p:'0 0 8px 0', ml: 2}}>SUBSCRIPTIONS</Typography>
  <List>
      <ListItem  disablePadding>
        <ListItemButton>
          <ListItemIcon>
          <Badge sx={{bgcolor: '#3CF70E',height: 10,width:10,m:'20px 20px 0',position: 'absolute',zIndex: 1,borderRadius: 50}}/>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" sx={{height: 31,width: 31}}/>
          </ListItemIcon>
          <ListItemText primary={"Skyscraper"} sx={{color:'white'}}/>
        </ListItemButton>
      </ListItem>
      <ListItem  disablePadding>
        <ListItemButton>
          <ListItemIcon>
          <Avatar alt="ceddy moja" src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600" sx={{height: 31,width: 31}}/>
          </ListItemIcon>
          <ListItemText primary={"King kong"} sx={{color:'white'}}/>
        </ListItemButton>
      </ListItem>
      <ListItem  disablePadding>
        <ListItemButton>
          <ListItemIcon>
          <Avatar alt="joe smith" src="https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=600" sx={{height: 31,width: 31}}/>
          </ListItemIcon>
          <ListItemText primary={"Godzilla"} sx={{color:'white'}}/>
        </ListItemButton>
      </ListItem>
  </List>

</div>
);

const container = window !== undefined ? () => window().document.body : undefined;

return (
<Box sx={{ display: 'flex' }}>
  <CssBaseline />
  <AppBar position="fixed"
    sx={{
      width: { sm: `calc(100% - ${drawerWidth}px)` },
      ml: { sm: `${drawerWidth}px` },
      bgcolor : "#322F2F",
    }}>
    <Toolbar>
    
        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 3,display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>

        <Paper component="form"
        sx={{ 
          backgroundColor: "#231F1F",
          p: '2px 2px', 
          display: 'flex', 
          alignItems: 'center', 
          width: 800,
          height: 30,
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
      <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" />

      <Typography variant='subtitle1'sx={{p: "0 20px 0 18px"}}>User Name</Typography>
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
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth , border:"none", backgroundColor:'#322F2F', color:'#A4A4A4'},
      }}
      >
      {drawer}
    </Drawer>
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, border:"none", backgroundColor:'#322F2F', color:'#A4A4A4'},
       
      }}
      open
    >
      {drawer}
    </Drawer>
  </Box>




  <Box
    component="main"
    sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` }, bgcolor: '#231F1F',height: '100vh',color:'white'}}>
    <Toolbar />
    <Box sx={{
      height:"60%",
      width: '100%', 
      bgcolor: 'white'
      }}>
        <Video src={vidBg}/>
      <Box></Box>
      <Box></Box>
    </Box>
    
  </Box>
</Box>
);
}


export default Yourvideos;
