import React from 'react';
import {Link,useHistory} from 'react-router-dom';

import classStyles from './Style/classStyle';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Button} from '@material-ui/core';

function Header(props){
    const classes = classStyles();
    const history = useHistory();

    const handleClick = () => {
        history.push('/login')
    }

    return(
        <div>
            <AppBar position="static">
                <Toolbar className={classes.header}>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Link to='/' style={{textDecoration:'none'}}>
                        <Typography variant="h6" className={classes.title}>
                            Project 3
                        </Typography>
                    </Link>
                    {!props.currentUser ?
                        <Button color="inherit" onClick={handleClick}>Login</Button>
                    :
                        <Button color="inherit" onClick={props.handleLogout}>Logout {props.currentUser.displayName}</Button>
                    }   
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;