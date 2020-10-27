import React,{useState} from 'react';
import SelectedPlaceCards from './SelectedPlaceCards';
import Paper from '@material-ui/core/Paper';
import { AppBar, Typography, Tabs, Tab } from '@material-ui/core';

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls':`scrollable-auto-tabpanel-${index}`
    }
}

function TripContainer(props) {

    console.log(props);

    const TabPanel = (tabProps) => {
        const { children, value, index, ...other} = tabProps;
        console.log(tabProps)
    
        return (
            <div
                role='tabpanel'
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    props.currentTripSelections[index].selections.map((selection,id) => {
                        return <SelectedPlaceCards 
                            selection={selection} 
                            key={id} 
                            handleRemove={handleRemove}
                        />
                    })
                )}
            </div>
        )
    }

    const handleRemove = (id) => {
        alert("Remove button connected")
    }

    const [value,setValue] = useState(0);

    const handleChange = (event,value) => {
        setValue(value);
    }

    return(
        <Paper elevation={3} className="trip-container">
            <AppBar position='static'>
                <Typography variant='h6'>My Trip</Typography>
                <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    aria-label='Trip tabs'
                    variant='scrollable'
                    scrollable='auto'
                >
                    {props.currentTripSelections.map((trip,index) => {
                        return <Tab label={trip.placeName} {...a11yProps(index)} />
                    })}
                </Tabs>
            </AppBar>
            {props.currentTripSelections.map((trip,index) => {
                return <TabPanel value={value} {...a11yProps(index)} index={index}/>
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