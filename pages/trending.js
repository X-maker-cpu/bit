import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { useRouter } from 'next/router'
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
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import MovingText from  'moving-text'
import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
import InputBase from '@mui/material/InputBase';
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2';





const drawerWidth = 240;


function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter()
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
    "https://images.pexels.com/photos/15174712/pexels-photo-15174712.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/models-at-a-beach-louise-dahl-wolfe.jpg",
    "https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/a-model-wearing-a-corset-by-detolle-horst-p-horst.jpg",
    
  ]
  return (

    // back ground image.....................
    <Box sx={{
      display: 'flex',
      borderRadius: "20% ,20%",
      height:"500",
      width:"500",
      backgroundImage:"url(https://scontent.fnbo9-1.fna.fbcdn.net/v/t1.6435-9/69256722_153812735767772_6797131980413599744_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeF7Uqn-h6tWZUyLH_o2G3Hzv8EHznkAlB2_wQfOeQCUHZf8yAaUqeUK8mlrxLXSqG8psoIDLjaBZqCMM1DBEeVD&_nc_ohc=2AajZBG7Id4AX900Uld&_nc_pt=5&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfDND4y_ClNmgaNfNvPCsuNnlJlIR0XduehLVLu2BipDjQ&oe=6486E3F7) ",
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



        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} minHeight={160}>
      
        <Grid xs display="flex" justifyContent="center" alignItems="center">
        < Badge badgeContent={9} color='primary'>
          <Avatar src="https://scontent.fnbo9-1.fna.fbcdn.net/v/t1.6435-9/137648146_418386059310437_8173974305911207792_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFcnlv_VVvx9UYlzaiyQps3hMs_vIQZgN-Eyz-8hBmA31Bhl1ATAPHDndgbaKcQ7xQwh3qfZ-68fHXRlWuSNhsY&_nc_ohc=dqaYRiCSLIwAX9WWWYZ&_nc_pt=5&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfCocOCfUUyoWLwdy7DewORtabkZz6dFY9XBVDx7Dvv-fw&oe=6486F2AF"/>
          </Badge>
        </Grid>
      
       
        <Grid display="flex" justifyContent="center" alignItems="center">
        < Badge badgeContent={45} color='primary'>
          <Avatar src="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/models-at-a-beach-louise-dahl-wolfe.jpg" />
          </Badge>
        </Grid>
        

        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Badge badgeContent={99} color='primary' >
          
          <Avatar src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/277248531_674246557057718_2754724700745100586_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGO6e6L9g_K4TKJiItWwA-tuxUA6sQLWoq7FQDqxAtaioBIMwVLWoeiQfSvhby6rw5PADjCOw0PWwjRxvHQE-qF&_nc_ohc=cRKqrQv01FMAX9f6V1B&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfCYTgFFxgyhNh_I8fMBk57Hc6DYUZTwum_1Xl2QPEAWgQ&oe=646451FE" />
          </Badge>
        </Grid>
      </Grid>
    </Box>
    <br/>
      
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
        <Divider sx={{color:"green"}}/>
        <Typography sx={{
          width: "100", height: "100", color: "blue",
        }}>


          ALL PHOTOS IS ALOWED HERE
        </Typography>
      


<Box sx={{
  display:"grid",
  gridTemplateColumns:"300px 300px 300px",
  gap:15
}}>

{videos.map(videoSrc=>
       {
        console.log("Video SRC :>>", videoSrc)
        return( <MyVideoComponent src={videoSrc} />)
      }
  )}
</Box>
<hr />
<br/>
<Typography  sx={{
          width: "100", height: "100", color: "green",
          padding:"right",
          textAlign:"center",
        
        }}>


           YOU CAN ASK ABOUT OUR SERVICE
        </Typography>
        <br/>
        <Box>
          <useRouter>
  
          </useRouter>
          
        <Stack direction="contained" spacing={2} sx={{gap:40}}>
      <Button variant='contained' color="success" onClick={()=>router.push("/login")}>
        
        kind of keep that you need </Button>
      <Button variant="contained" color="success" onClick={()=>router.push("/login")}>
        kinds of clothes that you need
      </Button>
      <Button variant="contained" color="success" onClick={()=>router.push("/")}>
        kind of shoues that you need
      </Button>
    </Stack>
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
