import React from 'react';

import logo from '../../assets/find.gif'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const createStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    // backgroundColor: "#ffff8d",
    backgroundColor: 'white'
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

const ButtonAppBar = () => {
  const classes = createStyles();

  return (
    <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <img src={logo} alt='find-logo' height='50'></img>
            </Typography>
          </Toolbar>
        </AppBar>
    </div>
  );
}

export default ButtonAppBar