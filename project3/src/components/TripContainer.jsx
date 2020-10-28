import React,{useState} from 'react';
import SelectedPlaceCards from './SelectedPlaceCards';
import Paper from '@material-ui/core/Paper';
import { AppBar, Typography, Tabs, Tab, Box, Button } from '@material-ui/core';
import classStyles from './Style/classStyle';
import {useHistory} from 'react-router-dom';

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls':`scrollable-auto-tabpanel-${index}`
    }
}

function TripContainer(props) {
    const history = useHistory();

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
                {value === index && (
                    props.currentTripSelections[index].selections.map((place,id) => {
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
    const [value,setValue] = useState(props.currentTripSelections.findIndex(location => location.placeAddress === props.currentSearchPlace.formatted_address));

    const handleChange = (event,value) => {
        setValue(value);
    }

    const handleAdd = () => {
        history.push('/')
    }

    const styles = classStyles();

    return(
        <Paper elevation={3} className={styles.tripPane}>
            <AppBar position='sticky' className={styles.tripAppBar}>
                <Box className={styles.tripBarHeader}>
                    <Typography variant='h6' className={styles.centerTitle}>My Trip</Typography>
                    <Button variant='contained' onClick={props.handleSaveData}>Save Changes</Button>
                    <Button variant='contained' onClick={handleAdd}>Add A Destination</Button>
                </Box>
                <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    aria-label='Trip tabs'
                    variant='scrollable'
                    scrollable='auto'
                >
                    {props.currentTripSelections.map((trip,index) => {
                        return <Tab key={index} label={trip.placeName} {...a11yProps(index)} />
                    })}
                </Tabs>
            </AppBar>
            {props.currentTripSelections.map((trip,index) => {
                return <TabPanel key={index} value={value} {...a11yProps(index)} index={index}/>
            })}
                {/* <h3>Planned Trip</h3>
                <div>
                    {props.currentTripSelections.map((selection, id) => {
                        return (
                            <SelectedPlaceCards 
                                selection={selection} 
                                key={id} 
                                handleRemove={handleRemove}
                                handleDetailsClick={props.handleDetailsClick}
                            />
                        )
                    })}
                </div> */}
        </Paper>
    )
}

export default TripContainer;