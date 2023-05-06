import React from "react";
import {Grid,Paper,Avatar,Typography,TextField,Button,} from "@material-ui/core";
//import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Box } from "@mui/material";
import { useRouter } from 'next/router'


const Signup = () => {
  const paperStyle = { padding: "30px 20px", width: 500, margin: "20px auto", borderRadius:50 };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  const router = useRouter()
  return (
    <div className="background-image">
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label="First Name"
            placeholder="First Name"
          />
          <TextField
            fullWidth
            label="Last Name"
            placeholder="Last Name"
          />
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your email"

          />
          <TextField
            fullWidth
            label=""
            placeholder="Confirm email"
          />
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Enter your phone number"
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
          />
          <TextField
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your password"
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />
          <Box
            sx={{
              gap: 15,
              display: "grid",      
                      placeitems: "center",
            }}
          >
            <Box sx={{ gap: 35,
              display: "flex",
              alignItems: "center",
              placeitems: "center",
              justifyContents:"center"
              }}>
            <Button type="submit" variant="contained" color="primary">Sign up</Button>
                    
            <Button variant="contained" color="primary" onClick={()=>router.push("/login")}>Login</Button>

            </Box>
          </Box>
        </form>
      </Paper>
    </Grid>
    </div>
  );
};


export default Signup;
