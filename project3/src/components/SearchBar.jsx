import React from 'react';
import classStyles from './Style/classStyle'
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function SearchBar(props) {
    const styles = classStyles();

    return (
        <>
            <h2 className={styles.searchTitle}>Where do you wanna go?</h2>
            <div className={styles.searchBarWrapper}>
                <TextField
                className={styles.searchBox}
                label="Search"
                variant="outlined"
                type='text' 
                id='searchBox'
                name='searchCriteria' 
                />
                <Link to='/results/restaurants' style={{textDecoration: 'none'}}>
                    <Button 
                        variant="contained" 
                        color="primary"
                        {props.ready ? '' : 'disabled'} 
                    >Search</Button>
                </Link>
            </div>
            
            <div id='map' style={{display: 'none'}}></div>
        </>
    )
}

export default SearchBar;
