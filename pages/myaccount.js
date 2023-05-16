import { Box, Button, Typography } from '@mui/material'
import Head from 'next/head';
import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import InfoIcon from '@mui/icons-material/Info';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import PaymentsIcon from '@mui/icons-material/Payments';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FolderSharedRoundedIcon from '@mui/icons-material/FolderSharedRounded';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import PaymentIcon from '@mui/icons-material/Payment';


const MyAccount = () => {

  const drawerWidth = 200;

  return (
    <>
      <Head>
        <title>Account page</title>
        <meta name="description" content="Login Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Box sx={{display:'absoute',position:'center'}}>
      <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 800, backgroundColor:"#B9B7BD" }}
    >
                <Typography>  <Avatar
  alt="Remy Sharp"
  src="https://play-lh.googleusercontent.com/xbGT908pv88eb0J9ZirsNEf0G35BEEhcON_wfKaMogVXMbqVlWPFCe73ZnwWY94o7mQ"
  sx={{ width: 50, height: 50 }}/></Typography>
              

        <SearchIcon/>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'Search BIT' }}
      />
 
    </Paper>
      </Box>
      <Box component="form" sx={{ p: '3px 5px', marginleft: '5px', left: '20%', width: '100%', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '5px', position: 'absolute', textAlign: 'left', }}>
          < Typography variant="body2" color="text.secondary" fontFamily="serif">
            <Box sx={{ borderRadius:"50px", border:'2px solid',  backgroundColor: '#0d6efd', fontWeight:700 }}>
          <Typography><AccountCircleIcon />Home</Typography>
          </Box>
          <br/>
          <Typography> <FolderSharedRoundedIcon />Personal info</Typography>
          <br/>
          <Typography> <ToggleOnIcon />Data & Privacy</Typography>
          <br/>
          <Typography> <PeopleOutlineRoundedIcon />People and sharing</Typography>
          <br/>
          <Typography> <LockIcon />Security</Typography>
          <br/>
          <Typography> <PaymentIcon /> Payments and Subscriptions</Typography>
          <br/>
          <Divider sx={{ lenth: '50', m: 1,borderBlockColor:'darkred', }} orientation='horizantal' />
          <Typography> <InfoIcon />About </Typography>
          </Typography>
        </Box>
      </Box>


      <Box
    component="main"
    sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` }, bgcolor: 'white',height: '100vh',color:'white', marginLeft: 35}}>
    {/* <Toolbar /> */}
    <Box sx={{
      height:"60%",
      width: '100%',
      
      }}>
      <Box sx={{display:"flex", alignItems:"center",  marginLeft:70}}>
      <Avatar
  alt="Remy Sharp"
  src="https://play-lh.googleusercontent.com/xbGT908pv88eb0J9ZirsNEf0G35BEEhcON_wfKaMogVXMbqVlWPFCe73ZnwWY94o7mQ"
  sx={{ width: 200, height: 200, }}
/>
</Box>
< Typography variant="h3" color="black" fontFamily="serif" sx={{marginLeft:50}}>Welcome, Boundless Interactive Theatre</Typography>
< Typography variant="body1" color="text.secondary" sx={{marginLeft:50}}>Manage your info, privacy and security to make Google work better for you. Find out more</Typography>
    </Box>
<Box>
      <Box>
      <Typography> <InfoIcon />About </Typography>
      </Box>
      <Box></Box>
      </Box>
  </Box>
     
  </>

  );
}

export default MyAccount;