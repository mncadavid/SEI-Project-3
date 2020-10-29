import React from 'react';
import classStyles from './Style/classStyle';

// This is the footer where developer names are located and links to submitting issue tickets.
function Footer(){
    const classes = classStyles();

    return(
        <footer className={classes.footer}>
                <p>&#169;2020 Quarantine N' Dream</p>
                <p>Cadavid Berns | Martin | Lagerhausen </p>
                <div>

                {/* Fun easter eggs */}
                <a href="https://i.pinimg.com/originals/4f/82/8d/4f828d05f82b8b7aedfe8be6a7d9d2a3.png" className={classes.issueButton} target="_blank" rel="noreferrer">Sub</a>
                <a href="https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-63.png" className={classes.issueButton} target="_blank" rel="noreferrer">mit</a>

                {/* Submit issue tickets here */}
                <a href="https://github.com/mncadavid/SEI-Project-3/issues" target="_blank" className={classes.issueButton} rel="noreferrer"> Issue Here!</a>
                </div>
        </footer>
    )
}

export default Footer;