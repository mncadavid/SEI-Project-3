import React from 'react';
import classStyles from './Style/classStyle';

function Footer(){
    const classes = classStyles();

    return(
        <footer className={classes.footer}>
                <p>&#169;2020 Quarantine N' Dream</p>
                <p>Cadavid Berns -- Martin -- Lagerhausen </p>
                <div>
                <a href="https://i.pinimg.com/originals/4f/82/8d/4f828d05f82b8b7aedfe8be6a7d9d2a3.png" rel="noreferrer">Sub</a>
                <a href="https://github.com/mncadavid/SEI-Project-3/issues" target="_blank" rel="noreferrer">mit Issue Here!</a>
                </div>
        </footer>
    )
}

export default Footer;