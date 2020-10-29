import React, { useState } from 'react';
import PlaceCardContainer from './PlaceCardContainer';
import { AppBar, Typography, Paper, Tabs, Tab } from '@material-ui/core';
import classStyles from './Style/classStyle';

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls':`scrollable-auto-tabpanel-${index}`
    }
}

// ResultsContainer is displayed within the ResultsPage and has
// selected location results that fall within the perameters of 10 mile radius.
function ResultsContainer(props){
    const [value,setValue] = useState(0);

    const TabPanel = (tabProps) => {
        const {value,index} = tabProps;

        return (
            <div
                role='tabpanel'
                hidden={value!==index}
                id={`scrollable-auto-tabpanel-${index}`}    
                aria-labelledby={`scrollable-auto-tab-${index}`}
            >
                {/* All the information is then passed into the PlaceCardContainer */}
                {value === index && (
                    <PlaceCardContainer 
                        results={props.results[tabProps.type]}
                        handleDetailsClick={props.handleDetailsClick}
                        handleAddToTrip={props.handleAddToTrip}
                        isDisabled={props.isDisabled}
                    />
                )}
            </div>
        )
        
    }
    
    const handleChange = (e,value) => {
        setValue(value);
    }

    const styles = classStyles();
 
    return(
        <Paper elevation={3} className={styles.selectionPane}>
            <AppBar position='sticky'>
                <Typography className={styles.centerTitle} variant='h6'>{props.displayPlaceName}</Typography>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label='Results tabs'
                    centered
                >
                    <Tab label='Restaurant' {...a11yProps(0)} />
                    <Tab label='Park' {...a11yProps(1)} />
                    <Tab label='Museum' {...a11yProps(2)} />
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0} type='restaurant' />
            <TabPanel value={value} index={1} type='park' />
            <TabPanel value={value} index={2} type='museum' />
        </Paper>
    )
}

export default ResultsContainer;