import { Box, Typography } from '@mui/material'
import Head from 'next/head';
import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SaveIcons from '@mui/icons-material/Save'

const MyAccount = () => {
  return (
    <>
      <Head>
        <title>Account page</title>
        <meta name="description" content="Login Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>

    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500 , listitems: 'center',  }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
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
      <Box component="form" sx={{p:'3px 5px',display:'grid', marginleft:'5px', left:'20%',width:'100%',backgroundColor:'white'}}>
      <ul>
        <li style={{
          textDecorationColor:'grey',
        
        }}>Home</li>
        <li>Personal info</li>
        <li>Data & Privacy</li>
        <li>Security</li>
        <li>People and Sharing</li>
        <li>Payments and Subscriptions</li>
        <Divider/>
        <br/>
        <li>About</li>
      </ul>
     
       
      </Box>
    </>
  );
}

export default MyAccount;