import React from 'react';
import { styled, Box } from '@mui/system';
import {Container,Grid,Button, Card, CardContent,} from '@mui/material';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ViewListIcon from '@mui/icons-material/ViewList';
import PolicyIcon from '@mui/icons-material/Policy';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HelpIcon from '@mui/icons-material/Help';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import VideocamIcon from "@mui/icons-material/Videocam";
import { useRouter } from 'next/router';



    
const NavigationBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
    
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Boundless Interactive Theatre
        </Typography>
        <IconButton color="inherit">
        <Avatar
  alt="Remy Sharp"
  src="https://play-lh.googleusercontent.com/xbGT908pv88eb0J9ZirsNEf0G35BEEhcON_wfKaMogVXMbqVlWPFCe73ZnwWY94o7mQ"
  sx={{ width: 100, height: 100 }}
/>
<MenuItem onClick={()=>{router.push("/login")}}>
            <LoginRoundedIcon style={{ marginRight: '10px' }} />
            Login
          </MenuItem>
          <MenuItem onClick={()=>{router.push("/signup")}}>
            <HowToRegRoundedIcon style={{ marginRight: '10px' }} />
            Signup
          </MenuItem>
         </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          
          
          <MenuItem onClick={()=>{router.push("/indexx")}} startIcon={<VideocamIcon/>}>
            <HomeRoundedIcon style={{ marginRight: '10px' }} />
            Home
          </MenuItem>
          <MenuItem onClick={()=>{router.push("/favorites")}}>
            <FavoriteRoundedIcon style={{ marginRight: '10px' }} startIcon={<VideocamIcon/>}/>
            Favorites
          </MenuItem>
          <MenuItem onClick={()=>{router.push("/trending")}}>
            <TrendingUpIcon style={{ marginRight: '10px' }} startIcon={<VideocamIcon/>} />
            Trending
          </MenuItem>
          <MenuItem onClick={()=>{router.push("/yourvideos")}}>
            <VideocamIcon style={{ marginRight: '10px' }} startIcon={<VideocamIcon/>} />
            YourVideos
          </MenuItem>
          <MenuItem onClick={()=>{router.push("/categories")}}>
            <ViewListIcon style={{ marginRight: '10px' }} startIcon={<VideocamIcon/>} />
            Categories
          </MenuItem>
          <MenuItem onClick={()=>{router.push("/termsandpolicy")}}>
            <PolicyIcon style={{ marginRight: '10px' }} startIcon={<VideocamIcon/>} />
            Terms and Policies
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
  
        }
const Title = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: (theme) => theme.spacing(4),
});

const CardWrapper = styled(Card)({
  minHeight: 200,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const Content = styled(CardContent)({
  textAlign: 'center',
});

const ButtonWrapper = styled(Button)({
  marginTop: (theme) => theme.spacing(4),
});

const LandingPage = () => {
  const router = useRouter()

  return (
    <div>
      <Container maxWidth="xl">
        <Box>
          <NavigationBar></NavigationBar>
        </Box>

      
        <Title variant="h2" sx={{
          textAlign:"center",
          paddingTop:20
        }}>Welcome to BIT Page</Title>
          <Button variant="contained" sx={{
            marginLeft:"45%",
            p:2,
            mb:1}} onClick={()=>{router.push("/yourvideos")}} startIcon={<VideocamIcon/>}>
        Start Watching
      </Button>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <CardWrapper>
              <Content>
                <Typography variant="h4" gutterBottom>
                  Entertainment Always
                </Typography>
                <Typography variant="body1">
                Never miss your favorite shows or movies with FunFusion's integrated video streaming feature. Enjoy a vast library of movies, TV series, documentaries, and exclusive content from popular networks and streaming services. Discover new releases, binge-watch complete seasons, or explore handpicked recommendations tailored to your tastes.
                </Typography>
                <ButtonWrapper variant="contained" color="primary">
                  Learn More
                </ButtonWrapper>
              </Content>
            </CardWrapper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardWrapper>
              <Content>
                <Typography variant="h4" gutterBottom>
                Virtual Reality (VR) Experiences
                </Typography>
                <Typography variant="body1">
                Immerse yourself in virtual reality worlds with FunFusion's VR experiences. Transform your smartphone into a virtual reality device by using compatible VR headsets. Explore breathtaking environments, embark on thrilling adventures, and participate in interactive simulations that blur the line between reality and the virtual realm.
                </Typography>
                <ButtonWrapper variant="contained" color="primary">
                  Learn More
                </ButtonWrapper>
              </Content>
            </CardWrapper>
          </Grid>
        </Grid>
      </Container>
      <CardWrapper>
              <Content>
                <Typography variant="h4" gutterBottom>
                  Video Streaming
                </Typography>
                <Avatar
  alt="Remy Sharp"
  src="https://png.pngtree.com/png-vector/20210701/ourlarge/pngtree-live-stream-icon-online-streaming-logo-vector-png-image_3543171.jpg"
  sx={{ width: 300, height: 300 }}
/>
                <ButtonWrapper variant="contained" color="primary">
                  Learn More
                </ButtonWrapper>
              </Content>
            </CardWrapper>
            <Typography variant="h6" color="black" fontWeight='700' textAlign={'center'}>Statistical Data showing our viewers across East Africa and number of participants who engage in our activities</Typography>
            <CustomizedTables></CustomizedTables>
            <MediaCard></MediaCard>
            <VerticalTabs/>
            <Box sx={{
    backgroundColor: '#808080',
    color:'white',

    }}>
  <footer style={{ display: 'flex', gap:100 }}>
  <Avatar
  alt="Remy Sharp"
  src="https://play-lh.googleusercontent.com/xbGT908pv88eb0J9ZirsNEf0G35BEEhcON_wfKaMogVXMbqVlWPFCe73ZnwWY94o7mQ"sx={{ width: 150, height: 150 }}/>
        <div>
        <Typography variant="h3" color="black"  fontFamily="serif">BIT</Typography>
        </div>

        <div>
        <Typography variant="h5" color="black"  fontFamily="serif"><AirlineStopsIcon/>About BIT</Typography>
        </div>

        <div>
        <Typography variant="h5" color="black"  fontFamily="serif"><ProductionQuantityLimitsIcon/>BIT Products</Typography>
        </div>

        <div>
        <Typography variant="h5" color="black"  fontFamily="serif"><PrivacyTipIcon/> Privacy</Typography>
        </div>

          <div>
            <Typography variant="h5" color="black" fontFamily="serif"><VolunteerActivismIcon/> Volunteer</Typography>
          </div>
          <Typography variant='h6' color="black" fontfamily="serif"><HelpIcon/>Help</Typography>
          
        </footer>
        <Typography
          variant="h5"
          color="black"
          fontFamily="fantasy"
          align="center"
        >
                  <TextRating></TextRating>
          @BIT2023: Where Entertainment Knows No Boundaries
        </Typography>

      </Box>
    </div>
  );
  
};
export default LandingPage;

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: '',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
 function TextRating() {
  const value = 3.5;

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
}



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    //backgroundColor: theme.palette.common.black,
    //color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    //backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Uganda', 159, 60, 24, 40),
  createData('Tanzania', 237, 90, 37, 43),
  createData('Rwanda', 262, 160, 24, 60),
  createData('Kenya', 305, 37, 67, 43),
  createData('USA', 356, 160, 49, 39),
];
 function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Countries</StyledTableCell>
            <StyledTableCell align="right">Viewers</StyledTableCell>
            <StyledTableCell align="right">Mentorship</StyledTableCell>
            <StyledTableCell align="right">Wed Development</StyledTableCell>
            <StyledTableCell align="right">Graphic Designing</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
function MediaCard() {
  return (
    <Card sx={{ maxWidth: 1000, marginLeft: 50 }}>
      <CardMedia
        sx={{ height: 490}}
        image="https://blogs.sas.com/content/sascom/files/2022/05/1303344250.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Entertaining you always
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Applications like Netflix, Amazon Prime Video, Hulu, and Disney+ offer a wide range of movies, TV shows, and documentaries for users to stream and enjoy.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
 
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

 function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'grid', height: 224, placeItems:"center"}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', }}
      >
        <Tab label="Performace" {...a11yProps(0)} />
        <Tab label="Development" {...a11yProps(1)} />
        <Tab label="Personalization" {...a11yProps(2)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
      Performance and reliability are at the core of our app. You can count on seamless playback, smooth navigation, and minimal loading times, ensuring a hassle-free experience across devices. Whether you're on your smartphone, tablet, or smart TV, our app will deliver consistent and outstanding performance.
      </TabPanel>
      <TabPanel value={value} index={1}>
      Developing an entertaining application means curating a vast library of diverse and captivating content. Our team has tirelessly researched, sourced, and curated a collection of movies, TV shows, music, games, and more to cater to all your entertainment preferences. We strive to keep our content library constantly evolving and expanding, so you'll always find something exciting to explore.
      </TabPanel>
      <TabPanel value={value} index={2}>
      Personalization is at the heart of our application. We've developed sophisticated algorithms and recommendation systems that learn your preferences, enabling us to serve you tailored content suggestions. Your entertainment journey will be uniquely yours as we anticipate your tastes and present you with personalized recommendations, helping you discover new favorites along the way.
      </TabPanel>
      
    </Box>
  );
}