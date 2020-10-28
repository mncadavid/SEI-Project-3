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
                <a href="https://lh3.googleusercontent.com/proxy/zJRnGzXNWjfYirJGzCoyMQerduzFw1Lb7Z_OsFkGjaU7-Lb97yomooJkAt2EpmzbmrWuCpnYHS5O3FR4AbsLF676s_OBftfAkycwKUkyei8ruRtUkRha5nysA3alFItGapl-Njv9zZjH5qQj8r-4MXofwjGKclez5QQ" rel="noreferrer">mit</a>
                <a href="https://github.com/mncadavid/SEI-Project-3/issues" target="_blank" rel="noreferrer"> Issue Here!</a>
                </div>
        </footer>
    )
}

export default Footer;