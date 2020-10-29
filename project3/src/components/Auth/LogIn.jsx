import { Box, TextField, Typography,Button } from '@material-ui/core';
import React,{useState} from 'react';
import classStyles from '../Style/classStyle';

function LogIn(props) {
    const [values,setValues] = useState({
        email: '',
        password: '',
        showPassword: false
    })
    const [errorMessage,setErrorMessage] = useState(null);

    const handleChange = (e) => {
        setValues({...values,[e.target.name]:e.target.value})
    }

    const authenticateUser = (e) => {
        e.preventDefault();
        /*global firebase*/
        firebase.auth().signInWithEmailAndPassword(values.email,values.password)
        .then(resp=>{
            setErrorMessage(null);
            props.handleLogInModal();
        })
        .catch(err=>{
            setErrorMessage(err.message);
        })

    }

    const styles = classStyles();

    return (
            <Box className={styles.loginBox}>
                <Box className={styles.loginHeader}>
                    <Typography variant='h5'>User Login</Typography>
                </Box>
                <form className={styles.loginForm} onSubmit={(e)=>authenticateUser(e)}>
                    <TextField 
                        id='emailField' 
                        label='Email' 
                        name='email'
                        value={values.email}
                        variant='outlined' 
                        onChange={(e)=>handleChange(e)}
                        className={styles.formInput}
                        error={!!errorMessage}
                        helperText={errorMessage ? errorMessage : ''}
                        autoFocus
                    />
                    <TextField 
                        id='passwordField' 
                        label='Password' 
                        name='password'
                        value={values.password}
                        variant='outlined'
                        type={values.showPassword ? 'text' : 'password'}
                        onChange={(e)=>handleChange(e)}
                        className={styles.formInput}
                        error={!!errorMessage}
                        helperText={errorMessage ? errorMessage : ''}
                    />
                    <Button 
                        type='submit' 
                        variant='contained' 
                        color="primary"
                        className={styles.submitButton}
                    >Login</Button>
                </form>
                <Box>
                    <Typography variant='body1' className={styles.auth} onClick={() => {props.handleLogInModal();props.handleSignUpModal()}}>
                            Not a user? Sign up here!
                    </Typography>
                </Box>
            </Box>
    )
}

export default LogIn;