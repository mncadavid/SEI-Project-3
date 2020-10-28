import { Box, IconButton, InputAdornment, Modal, TextField,OutlinedInput } from '@material-ui/core';
import { Visibility,VisibilityOff } from '@material-ui/icons';
import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import classStyles from '../Style/classStyle';

function LogIn(props) {
    const [open,setOpen] = useState(true);
    const [values,setValues] = useState({
        email: '',
        password: '',
        showPassword: false
    })
    const history = useHistory();

    const handleClose = () => {
        setOpen(false);
        history.goBack();
    }   

    const handleChange = (e) => {
        setValues({...values,[e.target.name]:e.target.value})
    }

    const styles = classStyles();

    return (
        <Modal
            open={open}
            onClose={handleClose}
            className={styles.loginModal}
        >
            <Box className={styles.loginBox}>
                <form className={styles.loginForm}>
                    <TextField 
                        id='emailField' 
                        label='Email' 
                        name='email'
                        value={values.email}
                        variant='outlined' 
                        onChange={(e)=>handleChange(e)}
                    />
                    <TextField 
                        id='passwordField' 
                        label='Password' 
                        name='password'
                        value={values.password}
                        variant='outlined'
                        type={values.showPassword ? 'text' : 'password'}
                        onChange={(e)=>handleChange(e)}
                        // endAdornment={
                        //     <InputAdornment position='end'>
                        //         <IconButton
                        //             aria-label='toggle password visibility'
                        //             onClick={setValues({...values,showPassword: !values.showPassword})}
                        //             onMouseDown={(e)=>e.preventDefault()}
                        //             edge='end'
                        //         >
                        //             {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        //         </IconButton>
                        //     </InputAdornment>
                        // }
                    />
                    
                </form>
            </Box>
        </Modal>
    )
}

export default LogIn;