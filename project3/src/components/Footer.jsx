import React from 'react';
import classStyles from './Style/classStyle';

function Footer(){
    const classes = classStyles();

    return(
        <footer className={classes.footer}>
                <p>&#169;2020 (Cool App Name Here)</p>
                <p>Cadavid Berns -- Martin -- Lagerhausen </p>
                <a href="https://github.com/mncadavid/SEI-Project-3/issues" target="_blank">Submit Issue Here!</a>
        </footer>
    )
}

export default Footer;