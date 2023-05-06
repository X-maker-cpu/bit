import { Box, Typography, Avatar } from '@mui/material'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ViewListIcon from '@mui/icons-material/ViewList';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VideocamIcon from '@mui/icons-material/Videocam';
import Button from '@mui/material/Button';
import Image from 'next/image'
import React from 'react'

const Yourvideos = () => {

  return (
    <Box sx={{display: "column"}}>{/*>>>>>>>>>>>> PARENT BOX <<<<<<<<<<<<<<<< */}
      <Box sx= //-------> Navbar box
        {{
          backgroundColor: "#322F2F",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 50,
          width: "100%",
          margin: 0,
          padding : "0 10px",
          borderBottom: "2px solid black",
          zIndex: 100
        }}>

        <Typography>LOGO</Typography>

          <Paper component="form"
              sx={{ 
                backgroundColor: "#231F1F",
                p: '2px 2px', 
                display: 'flex', 
                alignItems: 'center', 
                width: 600,
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

      </Box>
      <Box>{/*  This box holds the sideBar and the mainBar */}
        <Box sx= //------> This is the SideBar
          {{
            height: "39.9em",
            width: "16.5em",
            backgroundColor: "#322F2F",
            position: "fixed",
            opacity: 1
          }}>

          <Box sx=
          {{
            display: "flex",
            alignItems: "center",
            color: "#A4A4A4",
            width: "100%", 
            height: "2.9em",
            p: "0 0 0 30px"
              }}>
            <HomeIcon sx={{m:'0 30px 0 0',fontSize: 25}}/>
            <Typography variant='subtitle1' sx={{fontSize: 17, letterSpacing: 1}}>Home</Typography>
          </Box>
          <Box sx=
          {{
            display: "flex",
            alignItems: "center",
            color: "#A4A4A4",
            width: "100%", 
            height: "2.7em",
            p: "0 0 0 30px"
              }}>

            <WhatshotIcon sx={{m:'0 30px 0 0',fontSize: 25}}/>
            <Typography variant='subtitle1' sx={{fontSize: 17, letterSpacing: 1}}>Popular</Typography>
          </Box>
          <Box sx=
          {{
            display: "flex",
            alignItems: "center",
            color: "#A4A4A4",
            width: "100%", 
            height: "2.7em",
            p: "0 0 0 30px"
              }}>
            <ViewListIcon sx={{m:'0 30px 0 0',fontSize: 25}}/>
            <Typography variant='subtitle1' sx={{fontSize: 17, letterSpacing: 1}}>Cartegories</Typography>
          </Box>
          <Box sx=
          {{
            display: "flex",
            alignItems: "center",
            color: "#A4A4A4",
            width: "100%", 
            height: "2.7em",
            p: "0 0 0 30px"
              }}>
            <FavoriteIcon sx={{m:'0 30px 0 0',fontSize: 25}}/>
            <Typography variant='subtitle1' sx={{fontSize: 17, letterSpacing: 1}}>Favorties</Typography>
          </Box>
          <Box sx=
          {{
            display: "flex",
            alignItems: "center",
            color: "#A4A4A4",
            width: "100%", 
            height: "2.7em",
            p: "0 0 0 30px"
              }}>
            <VideocamIcon sx={{m:'0 30px 0 0',fontSize: 25}}/>
            <Typography variant='subtitle1' sx={{fontSize: 17, letterSpacing: 1}}>Your Videos</Typography>
          </Box>

          <Box sx={{m: '45px 30px', width: '100%'}}>
              <Typography variant='subtitle1' sx={{fontSize: 15, color: "#A4A4A4", letterSpacing: 1,p:'0 0 8px 0'}}>SUBSCRIPTIONS</Typography>

              <Box sx={{display: "flex", alignItems: 'center', p: '10px 0 0 0'}}>
                <Badge sx={{bgcolor: '#3CF70E',height: 10,width:10,m:'20px 20px 0',position: 'absolute',zIndex: 1,borderRadius: 50}}/>
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" sx={{height: 31,width: 31}}/>
                <Typography variant='subtitle1'sx={{p: "0 20px 0 18px", color: 'white'}}>Ceddy The designer</Typography>
              </Box>

              <Box sx={{display: "flex", alignItems: 'center', p: '10px 0 0 0'}}>
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600" sx={{height: 31,width: 31}}/>
                <Typography variant='subtitle1'sx={{p: "0 20px 0 18px", color: 'white'}}>Codust</Typography>
              </Box>
              <Box sx={{display: "flex", alignItems: 'center', p: '10px 0 0 0'}}>
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=600" sx={{height: 31,width: 31}}/>
                <Typography variant='subtitle1'sx={{p: "0 20px 0 18px", color: 'white'}}>L Movies</Typography>
              </Box>
          </Box>

        </Box> {/**this is the closing tag of the sideBar */}


        <Box sx= //-------> The MainBar box
        {{
          height: "39.9em",
          width: "74.5em",
          backgroundColor: "#231F1F",
          float: "right"
        }}>

        </Box>
      </Box>
    </Box>
  )
}

<Box sx=
    {{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      padding: 20
      }}>
      <Box>
        <Typography variant='h1'>My Videos</Typography>
        <Typography variant='subtitle1'>Come and join your loverly movie star at the right place and the right time. This week 132 hours broke the recorde of the most watched movie our latast MovieHub</Typography>
      </Box>
      <Box>
        <Image 
        src="https://images.pexels.com/photos/2953863/pexels-photo-2953863.jpeg?auto=compress&cs=tinysrgb&w=300"
        alt="movie poster"
        width={400}
        height={500}
        />
      </Box>
    </Box>

export default Yourvideos