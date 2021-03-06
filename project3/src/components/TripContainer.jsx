import React from 'react';
import SelectedPlaceCards from './SelectedPlaceCards';
import Paper from '@material-ui/core/Paper';
import { AppBar, Tabs, Tab, Box, Button, TextField } from '@material-ui/core';
import classStyles from './Style/classStyle';
import SaveIcon from '@material-ui/icons/Save';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import {Link} from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';


function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls':`scrollable-auto-tabpanel-${index}`
    }
}

function TripContainer(props) {

    const TabPanel = (tabProps) => {
        const { children, value, index, ...other} = tabProps;
    
        return (
            <Box
                className={classStyles().tripCardContainer}
                role='tabpanel'
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {(value === index && props.currentTripData[index].selections) && (
                    props.currentTripData[index].selections.map((place,id) => {
                        return <SelectedPlaceCards 
                            place={place} 
                            key={id} 
                            handleRemoveFromTrip={()=>props.handleRemoveFromTrip(place)}
                            handleDetailsClick={props.handleDetailsClick}
                        />
                    })
                )}
            </Box>
        )
    }

    const handleChange = (event,value) => {
        props.setCurrentLocationIndex(value);
    }

    const styles = classStyles();

    return(
        <Paper elevation={3} className={styles.tripPane}>
            <AppBar position='static' className={styles.tripAppBar}>
                <Box className={styles.tripBarHeader}>
                    <form>
                        <TextField label='Trip Name' value={props.tripName} margin='none' onChange={(e)=>props.handleUpdateTripName(e.target.value)} color='secondary' />
                    </form>
                    <Tooltip title="Save Trip" aria-label="save trip"><Button onClick={()=>props.handleSaveData(props.currentUserTripIndex,props.tripName)} color="secondary"><SaveIcon/></Button></Tooltip>
                    <Tooltip title="Add a Location" aria-label="add a location"><Link to="/"><AddLocationIcon color="secondary"/></Link></Tooltip>
                </Box>
                <Tabs 
                    value={props.currentLocationIndex} 
                    onChange={handleChange} 
                    aria-label='Trip tabs'
                    variant='scrollable'
                    scrollable='auto'
                >
                    {props.currentTripData.map((trip,index) => {
                        return <Tab key={index} label={trip.placeName} {...a11yProps(index)} />
                    })}
                </Tabs>
            </AppBar>
            {props.currentTripData.map((trip,index) => {
                return <TabPanel key={index} value={props.currentLocationIndex} {...a11yProps(index)} index={index}/>
            })}
        </Paper>
    )
}

export default TripContainer;