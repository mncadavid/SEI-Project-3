import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import classStyles from './Style/classStyle';
import {Button, Typography, Toolbar, AppBar, IconButton, Box, Menu, MenuItem, Divider, Icon, Badge} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

// This is the header where you are able to sign in/out, 
// look at trips(if logged in), and return to the homepage
function Header(props){
    const classes = classStyles();
    const [anchorEl,setAnchorEl] = useState(null);

    const handleMenuClick = (e) => {
        if (!anchorEl) {
            setAnchorEl(e.currentTarget);
        } else {
            setAnchorEl(null);
        }
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleReroute = (e) => {
        handleClose();
        props.handleViewSavedTrip(e,e.target.value);
    }

    const handleNewTrip = () => {
        handleClose();
        props.resetForNewTrip();
    }

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
                            <Box className={classes.menuIconBox}>
                                {props.currentUserData ? <>
                                    <IconButton 
                                    edge="start" 
                                    className={classes.menuButton} 
                                    color="inherit" 
                                    aria-label="menu"
                                    onClick={(e)=>handleMenuClick(e)}
                                    >
                                        <Badge badgeContent={props.currentUserData.length} color='secondary'>
                                            <MenuIcon /> 
                                        </Badge>
                                    </IconButton>
                                   
                                    <Typography variant='h6'>My Saved Trips</Typography>
                                    <Menu
                                        id='menu'
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={!!anchorEl}
                                        onClose={handleClose}
                                    >
                                        {props.currentUserData.map((trip,index) =>
                                            <MenuItem 
                                                value={index} 
                                                key={index}
                                                onClick={(e)=> handleReroute(e)}
                                            >{trip.tripName}</MenuItem>
                                        )}
                                        <Divider />
                                        <MenuItem onClick={handleNewTrip}><Icon style={{marginRight: '5px'}}>add_circle</Icon>Add New Trip</MenuItem>
                                    </Menu>
                                </>
                                : <Typography variant='h6'>No Saved Trips</Typography> }
                            </Box>
                            <Button color="inherit" onClick={props.handleLogout}>Logout {props.currentUser.displayName}</Button>
                        </>
                    }   

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;