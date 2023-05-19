import { Box, Typography, Avatar, Toolbar, Divider } from "@mui/material";
import { useRouter } from "next/router";
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
import React from "react";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';



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

  const homeSwitch = useRouter();
  const trendingSwitch = useRouter();
  const categoriesSwitch = useRouter();
  const favoritySwitch = useRouter();
  const yourvideosSwitch = useRouter();

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
        <ListItemButton onClick={() => homeSwitch.push('/')}>
          <ListItemIcon>
              <HomeIcon sx={{color:'#A4A4A4'}}/> 
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItemButton>
      </ListItem>
      {/* popural btn */}
      <ListItem  disablePadding>
        <ListItemButton onClick={() => trendingSwitch.push('/trending')}>
          <ListItemIcon>
          <WhatshotIcon sx={{color:'#A4A4A4'}}/> 
          </ListItemIcon>
          <ListItemText primary={"Popural"} />
        </ListItemButton>
      </ListItem>
      {/* categories btn */}
      <ListItem  disablePadding>
        <ListItemButton onClick={() => categoriesSwitch.push('/categories')}>
          <ListItemIcon>
          <ViewListIcon sx={{color:'#A4A4A4'}}/> 
          </ListItemIcon>
          <ListItemText primary={"Categories"} />
        </ListItemButton>
      </ListItem>
      {/* Favorites btn */}
      <ListItem  disablePadding>
        <ListItemButton onClick={() => favoritySwitch.push('/favorites')}>
          <ListItemIcon>
          <FavoriteIcon sx={{color:'#A4A4A4'}}/> 
          </ListItemIcon>
          <ListItemText primary={"Favorites"} />
        </ListItemButton>
      </ListItem>
      {/* Yourvideos btn */}
      <ListItem  disablePadding>
        <ListItemButton onClick={() => yourvideosSwitch.push('/yourvideos')}>
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

const [spacing, setSpacing] = React.useState(4);
const handleChange = (event) => {
  setSpacing(Number(event.target.value));
};

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
   {/*=========== opening tag for header =============*/}
    <Box sx={{   
      position: "relative",
      height:"30rem",
      width: '100%',
      backgroundImage : "url(https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
      backgroundRepeat : "no-repeat",
      backgroundPosition : "center",
      backgroundSize : "cover"
      }}>
      <Box sx=
      {{
        position : "absolute",
        height:"30rem",
        width: '100%',
        opacity: 0.78,
        backgroundImage: "linear-gradient(to right top, #0f0f11, #0d1113, #0b1313, #0d1411, #12140d)",
        }}>
        </Box>
        <Box sx={{zIndex: 100, position: 'absolute'}}>
          <Typography variant="h1" sx={{color : 'white', fontWeight : 'bold', p:4}}>Enjoy your videos</Typography>
          <Typography variant="subtitle1" sx={{color : 'white', pl:4, pr: 10, fontSize: 25}}>
            Join a million of movie streams around the world. Enjoy your latest videos Shorts, Pranks, Comedies, Animation, Seires and movie, plus other networks of your will.
          </Typography>
        </Box>
     </Box> {/*========>>>> closing tag for header */}

     
           <Grid sx={{ bgcolor: '#231F1F', height: '30rem' }}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={spacing}>
                {[0, 1, 2, 3, 4].map((value) => (
                  <Grid key={value} item>
                    <Paper
                      sx={{
                        height: 290,
                        width: 200,
                        bgcolor: 'blue'
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
     </Box>
  </Box>
);

}


export default Yourvideos;
