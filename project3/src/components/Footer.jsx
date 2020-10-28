import React from 'react';
import classStyles from './Style/classStyle';

function Footer(){
    const classes = classStyles();

    return(
        <footer className={classes.footer}>
                <p>&#169;2020 (Cool App Name Here)</p>
                <p><a href="" target="_blank">Cadavid Berns</a> -- <a href="" target="_blank">Martin</a> -- <a href="http://unsuitable-bat.surge.sh/" target="_blank">Lagerhausen</a></p>
                <a href="https://github.com/mncadavid/SEI-Project-3/issues">Submit Issue Here!</a>
        </footer>
    )
}

export default Footer;