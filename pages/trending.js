import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList';
import { Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';

import InputBase from '@mui/material/InputBase';
import Image from 'next/image';






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
      <List sx={{
        color: "red"

      }}>
        {['Inbox', 'Message', ' email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />


      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Stack direction="" spacing={3}>



      </Stack>



      <div>

        <List>
          {/* 1 */}
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Badge badgeContent={1} color="primary">
                  <Avatar
                    sx={{
                      width: "200"


                    }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgI-nKcXHtaLzZtffyoYLPrA-nd8TecPrhLqHTY9fUTQ&s" />
                </Badge>         </ListItemIcon>
              <ListItemText primary="Julia" />
            </ListItemButton>

          </ListItem>
          {/* 2 */}
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Badge badgeContent={100} color="primary">
                  <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgI-nKcXHtaLzZtffyoYLPrA-nd8TecPrhLqHTY9fUTQ&s" />              </Badge>
              </ListItemIcon>
              <ListItemText primary="diclot" />
            </ListItemButton>

          </ListItem>

          {/* 3 */}
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Badge badgeContent={77} color="primary">
                  <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgI-nKcXHtaLzZtffyoYLPrA-nd8TecPrhLqHTY9fUTQ&s" />              </Badge>
              </ListItemIcon>
              <ListItemText primary="Ramathan" />
            </ListItemButton>

          </ListItem>
        </List>


      </div>

    </div >
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  let videos = [
    "https://images.pexels.com/photos/15174712/pexels-photo-15174712.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load","https://images.pexels.com/photos/14530188/pexels-photo-14530188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]
  return (
    <Box sx={{
      display: 'flex',
      borderRadius: "20% ,20%",
    
      backgroundImage:"url(https://th.bing.com/th/id/R.b11f80865be4702c1445db25470039ab?rik=mTyDura6CfC7kw&pid=ImgRaw&r=0) ",
      backgroundRepeat:"no-repeat"   }}>
      <CssBaseline />
      <AppBar



        // position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>


          < InputBase />
        </Box>
        {/* <Toolbar:> */}

        {/* </Toolbar> */}
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />


        {/* <Box>
          
          <MyVideo src=" https://d227.d2mefast.net/tb/d/e7/diamond_platnumz_yatapita_official_music_video_h264_46841.mp4?play"/>
          <MyVideo src=" https://d227.d2mefast.net/tb/d/e7/diamond_platnumz_yatapita_official_music_video_h264_46841.mp4?play"/>
        
          </Box> */}



        <Typography sx={{
          width: "100", height: "100", color: "blue",
        }}>
          MY TRENDING PAGES CREATED BY DICLOT
        </Typography>
        <Divider />
        <Box>
          <Button sx={{
            width: "100", height: "100", color: "blue"
          }}>Primary</Button>

          <Button sx={{
            width: "100", height: "100", color: "red"
          }}>Disabled</Button>

          <Button href="#text-buttons" sx={{
            width: "100", height: "100", color: "black"
          }}>tanzania</Button>

          <Button href="#text-buttons" sx={{
            width: "100", height: "100", color: "yelow"
          }}>kenya</Button>

          <Button href="#text-buttons" sx={{
            width: "100", height: "100", color: "blue"
          }}>canada</Button>

          <Button href="#text-buttons" sx={{
            width: "100", height: "100", color: "red"
          }}>somali</Button>

          <Button href="#text-buttons" sx={{
            width: "100", height: "100", color: "black"
          }}>burundi</Button>

          <Button href="#text-buttons" sx={{
            width: "100", height: "100", color: "green"
          }}>my classment</Button>
          <Button href="#text-buttons" sx={{
            width: "100", height: "100", color: "red"
          }}>all refuge</Button>

          <Button href="#text-buttons" sx={{
            width: "100", height: "100", color: "black"
          }}>all student</Button>
        </Box>
        <Typography sx={{
          width: "100", height: "100", color: "blue",
        }}>
          ALL VIDEO IS ALOWED HERE
        </Typography>
        <Box sx={{
          display: "flex"
        }} >
          {/* <MyVideo src=" https://d227.d2mefast.net/tb/d/e7/diamond_platnumz_yatapita_official_music_video_h264_46841.mp4?play"/>
          <MyVideo src=" https://d227.d2mefast.net/tb/d/e7/diamond_platnumz_yatapita_official_music_video_h264_46841.mp4?play"/>
          <MyVideo src=" https://d227.d2mefast.net/tb/d/e7/diamond_platnumz_yatapita_official_music_video_h264_46841.mp4?play"/>
          <MyVideo src=" https://d227.d2mefast.net/tb/d/e7/diamond_platnumz_yatapita_official_music_video_h264_46841.mp4?play"/>
           */}
        </Box>

        <Box sx={{
          display: "flex"

        }}>

          <Box sx={{
            display: "flex",


          }}>
            <img src="" />


          </Box>





        </Box>


<Box sx={{
  display:"grid",
  gridTemplateColumns:"300px 300px 300px",
  gap:10,
  
}}>

{videos.map(videoSrc=>
       {
        console.log("Video SRC :>>", videoSrc)
        return( <MyVideoComponent src={videoSrc} />)
      }
  )}
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

export default ResponsiveDrawer;



// const MyVideo =(props)=>{  
//   return(
//     <iframe  src={props.src} width={400} height={200} Padding={200}>

//     </iframe>)

// }


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const MyVideoComponent = (prop) => {
  return (
    <Box >


      <Box sx={{ display: "flex", gap: 5, position: "relative" }}>
        <Image src={prop.src} width={500} height={500} />

      </Box>
      {/* <Box >
        <Avatar src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/a-zebra-george-stubbs.jpg" width={100} height={100} />
        <Box>
          <Typography variant="body1">our animals</Typography>
          <Typography variant="caption">john smith</Typography>
        </Box>
      </Box> */}


    </Box>
  )
}
