import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';

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
      <Box sx={{
        alignItems:"center",
        justifyContent:"center" }}>SUBSCRIPTIONS</Box>
      <List>
        <ListItemButton>
          <ListItemIcon>
          <Badge color="success"
              overlap="circular"
              badgeContent=""
              variant="dot"
              anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
              width:"50",
              height:"50",
              }}
              >
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCnuiDHpCwTM6Y9vr1KIcN6zGA8Sr0bvTIRL6IAgAe7Mcrj4e46WYpYItYNn9LJpEY_s&usqp=CAU"></Avatar>
          </Badge>
          </ListItemIcon>
          <ListItemText primary="NATHANAEL"/>
       </ListItemButton>
       <ListItemButton>
          <ListItemIcon>
          <Badge color="success"
              overlap="circular"
              badgeContent=""
              variant="dot"
              anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
              }}
              >
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCnuiDHpCwTM6Y9vr1KIcN6zGA8Sr0bvTIRL6IAgAe7Mcrj4e46WYpYItYNn9LJpEY_s&usqp=CAU"></Avatar>
          </Badge>
          </ListItemIcon>
          <ListItemText primary="ABDIZO"/>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
          <Badge color="success"
              overlap="circular"
              badgeContent=""
              variant="dot"
              anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
              }}
              >
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCnuiDHpCwTM6Y9vr1KIcN6zGA8Sr0bvTIRL6IAgAe7Mcrj4e46WYpYItYNn9LJpEY_s&usqp=CAU" ></Avatar>
          </Badge>
          </ListItemIcon>
          <ListItemText primary="SUNDAY"/>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
          <Badge color="success"
              overlap="circular"
              badgeContent=""
              variant="dot"
              anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
              }}
              >
             <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCnuiDHpCwTM6Y9vr1KIcN6zGA8Sr0bvTIRL6IAgAe7Mcrj4e46WYpYItYNn9LJpEY_s&usqp=CAU"></Avatar>
          </Badge>
          </ListItemIcon>
          <ListItemText primary="ISTARLIN"/>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Badge color="success"
              overlap="circular"
              badgeContent=""
              variant="dot"
              anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
              }}
              >
             <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCnuiDHpCwTM6Y9vr1KIcN6zGA8Sr0bvTIRL6IAgAe7Mcrj4e46WYpYItYNn9LJpEY_s&usqp=CAU"></Avatar>
             </Badge>
          </ListItemIcon>
          <ListItemText primary="EDOUIGE"/>
        </ListItemButton>
      
       
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "red"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
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
        <Typography paragraph>
         
        </Typography>
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
