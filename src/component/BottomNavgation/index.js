import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
});

const LabelBottomNavigation = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <BottomNavigation value={value} onChange={handleChange} className={classes.root} >
        <BottomNavigationAction value="home" icon={<HomeIcon />} />
        <BottomNavigationAction value="search" icon={<SearchIcon />} />
        <BottomNavigationAction value="person" icon={<PersonIcon />} />
      </BottomNavigation>
    );
}

export default LabelBottomNavigation
