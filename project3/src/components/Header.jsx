import React from 'react';
import { Link } from 'react-router-dom';

import classStyles from './Style/classStyle';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core';

// This is the header where you are able to sign in/out, 
// look at trips(if logged in), and return to the homepage
function Header(props){
    const classes = classStyles();

    return(
        <div>
            <AppBar position="static">
                <Toolbar className={classes.header}>
                    <Link to='/' style={{textDecoration:'none'}}>
                        <Typography variant="h6" className={classes.title}>
                            Quarantine N' Dream
                        </Typography>
                    </Link>

                    {/* If you are not logged in you will see this button */}
                    {!props.currentUser ?
                        <Button color="inherit" onClick={props.handleLogInModal}>Login</Button>
                    :
                    // If you are not logged in you will see these buttons
                        <>
                            <Button color="inherit" onClick={(e) => props.handleViewSavedTrip(e)}>View My Saved Trip</Button>
                            <Button color="inherit" onClick={props.handleLogout}>Logout {props.currentUser.displayName}</Button>
                        </>
                    }   

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;