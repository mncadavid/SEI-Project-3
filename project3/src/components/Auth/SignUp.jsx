import { Box, TextField, Typography,Button } from '@material-ui/core';
import React,{useState} from 'react';
import classStyles from '../Style/classStyle';

function SignUp(props) {
    const [values,setValues] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        displayName: ''
    })
    const [errorMessage,setErrorMessage] = useState(null)

    const handleChange = (e) => {
        setValues({...values,[e.target.name]:e.target.value})
    }

    const addUser = (e) => {
        e.preventDefault();

        if (values.password !== values.confirmPassword) {
            setErrorMessage('Passwords must match');
            return;
        }

        /*global firebase*/
        firebase.auth().createUserWithEmailAndPassword(values.email,values.password)
        .then(resp =>{
            setErrorMessage(null);

            firebase.auth().currentUser.updateProfile({
                displayName: values.displayName
            })
            .catch(err=>console.log(err))

            props.setCurrentUser({...resp.user,displayName:values.displayName})
            props.handleSignUpModal();
        })
        .catch(err=>{
            console.log(err);
            setErrorMessage(err.message);
        })
    }

    const styles = classStyles();

    return (
            <Box className={styles.loginBox}>
                <Box className={styles.loginHeader}>
                    <Typography variant='h5'>New User Signup</Typography>
                </Box>
                <form className={styles.loginForm} onSubmit={(e)=>addUser(e)}>
                    <TextField 
                        id='displayName' 
                        label='Display Name' 
                        name='displayName'
                        value={values.displayName}
                        variant='outlined'
                        onChange={(e)=>handleChange(e)}
                        className={styles.formInput}
                        autoFocus
                    />
                    <TextField 
                        id='emailField' 
                        label='Email' 
                        name='email'
                        value={values.email}
                        variant='outlined' 
                        onChange={(e)=>handleChange(e)}
                        className={styles.formInput}
                        error={!!errorMessage && errorMessage.toUpperCase().includes('email'.toUpperCase())}
                        helperText={errorMessage && errorMessage.toUpperCase().includes('email'.toUpperCase()) ? errorMessage : ''}
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
                        error={!!errorMessage && errorMessage.toUpperCase().includes('password'.toUpperCase())}
                        helperText={errorMessage && errorMessage.toUpperCase().includes('password'.toUpperCase()) ? errorMessage : ''}
                    />
                    <TextField 
                        id='confirmPasswordField' 
                        label='Confirm Password' 
                        name='confirmPassword'
                        value={values.confirmPassword}
                        variant='outlined'
                        type={values.showPassword ? 'text' : 'password'}
                        onChange={(e)=>handleChange(e)}
                        className={styles.formInput}
                        error={!!errorMessage && errorMessage.toUpperCase().includes('password'.toUpperCase())}
                        helperText={errorMessage && errorMessage.toUpperCase().includes('password'.toUpperCase()) ? errorMessage : ''}
                    />
                    <Button 
                        type='submit' 
                        variant='contained' 
                        color="primary"
                        className={styles.submitButton}
                    >Sign Up</Button>
                </form>
                <p className={styles.auth} onClick={() => {props.handleSignUpModal();props.handleLogInModal()}}>
                    Already a user? Log in!
                </p>
            </Box>
    )
}

export default SignUp;