import React,{useState} from 'react';
import SelectedPlaceCards from './SelectedPlaceCards';
import Paper from '@material-ui/core/Paper';
import { AppBar, Typography, Tabs, Tab, Box } from '@material-ui/core';
import classStyles from './Style/classStyle';

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

    const [value,setValue] = useState(props.currentTripSelections.length-1);

    const handleChange = (event,value) => {
        setValue(value);
    }

    const styles = classStyles();

    return(
        <Paper elevation={3} className={styles.tripPane}>
            <AppBar position='sticky'>
                <Typography variant='h6' className={styles.centerTitle}>My Trip</Typography>
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