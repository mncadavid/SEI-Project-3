import React from 'react';
import {Link} from 'react-router-dom';

import classStyles from './Style/classStyle';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function Header(){
    const classes = classStyles();
    console.log(classes);

    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Link to='/' style={{textDecoration:'none'}}>
                        <Typography variant="h6" className={classes.title}>
                            Project 3
                        </Typography>
                    </Link>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;