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
                    width:"200"
                  

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

  return (
    <Box sx={{ display: 'flex' }}>
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
     

         < InputBase/>
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


        <Box>
          
          <MyVideo src=" https://d227.d2mefast.net/tb/d/e7/diamond_platnumz_yatapita_official_music_video_h264_46841.mp4?play"/>
          <MyVideo src=" https://d227.d2mefast.net/tb/d/e7/diamond_platnumz_yatapita_official_music_video_h264_46841.mp4?play"/>
        
          </Box>

          
          <Box >
         
          <Box sx={{
            display:"flex"
            
          }}>
         
              
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgI-nKcXHtaLzZtffyoYLPrA-nd8TecPrhLqHTY9fUTQ&s" />              
          
            <ListItemText primary="Ramadhan" />
          

        
              
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgI-nKcXHtaLzZtffyoYLPrA-nd8TecPrhLqHTY9fUTQ&s" />              
            
            <ListItemText primary="diclot" />
        

       
      </Box>
     </Box>
      
      
      <Typography>
        my trending page again
      </Typography>
       <Divider/>
       <Box>
      <Button  sx={{
        width:"100" ,height:"100",color:"blue"
       }}>Primary</Button>

      <Button  sx={{
        width:"100" ,height:"100",color:"red"
       }}>Disabled</Button>

      <Button href="#text-buttons" sx={{
        width:"100" ,height:"100",color:"green"
       }}>tanzania</Button>

      <Button href="#text-buttons" sx={{
        width:"100" ,height:"100",color:"yelow"
       }}>kenya</Button>

      <Button href="#text-buttons" sx={{
        width:"100" ,height:"100",color:"blue"
       }}>canada</Button>

      <Button href="#text-buttons" sx={{
        width:"100" ,height:"100",color:"red"
       }}>somali</Button>

      <Button href="#text-buttons" sx={{
        width:"100" ,height:"100",color:"green"
       }}>burundi</Button>

      <Button href="#text-buttons" sx={{
        width:"100" ,height:"100",color:"yelow"
       }}>my classment</Button>
      <Button href="#text-buttons" sx={{
        width:"100" ,height:"100",color:"red"
       }}>all refuge</Button>

      <Button href="#text-buttons"  sx={{
        width:"100" ,height:"100",color:"black"
       }}>all student</Button>
      </Box>
      <Typography  sx={{
        width:"100" ,height:"100",color:"green",
       }}>
        ALL VIDEO IS ALOWED HERE
      </Typography>
      <Box sx={{
        display:"flex"
      }} >
      <MyVideo src=" https://d227.d2mefast.net/tb/d/e7/diamond_platnumz_yatapita_official_music_video_h264_46841.mp4?play"/>
          <MyVideo src=" https://d227.d2mefast.net/tb/d/e7/diamond_platnumz_yatapita_official_music_video_h264_46841.mp4?play"/>
          <MyVideo src=" https://d227.d2mefast.net/tb/d/e7/diamond_platnumz_yatapita_official_music_video_h264_46841.mp4?play"/>
          <MyVideo src=" https://d227.d2mefast.net/tb/d/e7/diamond_platnumz_yatapita_official_music_video_h264_46841.mp4?play"/>
          
      </Box>
      
      <Box sx={{
            display:"flex"
            
          }}>
         
              
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgI-nKcXHtaLzZtffyoYLPrA-nd8TecPrhLqHTY9fUTQ&s" />              
          
            <ListItemText primary="Ramadhan" />
          

        
              
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgI-nKcXHtaLzZtffyoYLPrA-nd8TecPrhLqHTY9fUTQ&s" />              
            
            <ListItemText primary="diclot" />
        
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgI-nKcXHtaLzZtffyoYLPrA-nd8TecPrhLqHTY9fUTQ&s" />              
                <ListItemText primary="diclot" />

                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgI-nKcXHtaLzZtffyoYLPrA-nd8TecPrhLqHTY9fUTQ&s" />
                <ListItemText primary="diclot" />
       
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgI-nKcXHtaLzZtffyoYLPrA-nd8TecPrhLqHTY9fUTQ&s" />              
                <ListItemText primary="diclot" />
      </Box>

  
      
     




    

            {/* icon folder.................... */}
        {/* <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button><Avatar sx={{ bgcolor: pink[500] }}>
            <FolderIcon />
          </Avatar>Folder</Button> */}
          {/* 25 icon */}

          {/* <Button><Avatar sx={{ bgcolor: pink[500] }}>
            <AssignmentIcon />
          </Avatar>Assignment</Button>
        </ButtonGroup> */}



        {/* video 11 */}
        {/* <Box>
        <MyVideo src="https://d291.d2mefast.net/tb/2/29/ayra_starr_rush_official_music_video_h264_43732.mp4?play"/>
        <MyVideo src="https://d291.d2mefast.net/tb/2/29/ayra_starr_rush_official_music_video_h264_43732.mp4?play"/>
        <Divider/>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra 
        </Typography>
        <MyVideo src="https://d291.d2mefast.net/tb/2/29/ayra_starr_rush_official_music_video_h264_43732.mp4?play"/>
        <MyVideo src="https://d291.d2mefast.net/tb/2/29/ayra_starr_rush_official_music_video_h264_43732.mp4?play"/>
        <Divider/>
        
        </Box> */}
        {/*video11  */}


        <Typography paragraph>
       
        </Typography>
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



const MyVideo =(props)=>{  
  return(
    <iframe  src={props.src} width={400} height={200} Padding={200}>
     
    </iframe>


  
    // <video controls width="70%" className="videoPlayer" src={{props}}></video>
   )
   
}


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
