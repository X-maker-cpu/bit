import { Box, Button, Typography } from '@mui/material'
import Head from 'next/head';
import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SaveIcons from '@mui/icons-material/Save'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockIcon from '@mui/icons-material/Lock';
import InfoIcon from '@mui/icons-material/Info';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import PeopleIcon from '@mui/icons-material/People';
import PaymentsIcon from '@mui/icons-material/Payments';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import { AlignVerticalTop } from '@mui/icons-material';

const MyAccount = () => {
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
          sx={{ p: '2px 4px', width: 500,display:'absolute',position:'center' }}
        >
          <IconButton sx={{ p: '10px',borderBlockColor:'darkcyan' }} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1,position:'center',borderBlockColor:"darkkhaki" }}
            placeholder="Search Google Account "
            inputProps={{ 'aria-label': 'search google maps' }}
            

          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
          </IconButton>
        </Paper>

      </Box>
      <Box component="form" sx={{ p: '3px 5px', marginleft: '5px', left: '20%', width: '100%', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '5px', position: 'absolute', textAlign: 'left' }}>
          <Typography><PersonOutlineIcon />Home</Typography>
          <br/>
          <Typography> <SettingsAccessibilityIcon />Personal inf</Typography>
          <br/>
          <Typography> <PhonelinkLockIcon />Data & Privacy</Typography>
          <br/>
          <Typography> <LockIcon />Security</Typography>
          <br/>
          <Typography> <PaymentsIcon /> Payments and Subscriptions</Typography>
          <br/>
          <Divider sx={{ lenth: '50', m: 1,borderBlockColor:'darkred', }} orientation='horizantal' />

          <Typography> <InfoIcon />About </Typography>
        </Box>


      </Box>
    </>
  );
}

export default MyAccount;