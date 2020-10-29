import React from 'react';
import {Link,useHistory} from 'react-router-dom';

import classStyles from './Style/classStyle';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core';

function Header(props){
    const classes = classStyles();
    const history = useHistory();

    return(
        <div>
            <AppBar position="static">
                <Toolbar className={classes.header}>
                    <Link to='/' style={{textDecoration:'none'}}>
                        <Typography variant="h6" className={classes.title}>
                            Quarantine N' Dream
                        </Typography>
                    </Link>
                    {!props.currentUser ?
                        <Button color="inherit" onClick={props.handleLogInModal}>Login</Button>
                    :
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