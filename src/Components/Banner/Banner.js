import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from '@material-ui/core';
import './Banners.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch"
  }
}));
const Banner = () => {
  const classes = useStyles();

  return (
    <div>
      <div className="web-Banner" >
        <h1>Need More?</h1>
        <p>Enter what you are looking for below!</p>
        <div className="input-group input-group-lg w-50 mx-auto">
          <div className={classes.root}>
            <TextField
              id="outlined-full-width"
              style={{ margin: 8, width: "30rem", backgroundColor: "white" }}
              placeholder="Search Here"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
            />
          </div>
          <div className="input-group-prepend">
            <Button variant="contained" color="primary"  >
              Search
</Button>
{/* This is only for looks. I will update it after my assignment result. */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;