import { Box, Modal, TextField, Typography,Button } from '@material-ui/core';
import React,{useState} from 'react';
import { useHistory, Link } from 'react-router-dom';
import classStyles from '../Style/classStyle';

function SignUp(props) {
    const [open,setOpen] = useState(true)
    const [values,setValues] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        displayName: ''
    })
    const [errorMessage,setErrorMessage] = useState(null)

    const history = useHistory();

    const handleChange = (e) => {
        setValues({...values,[e.target.name]:e.target.value})
    }

    const handleClose = () => {
        setOpen(false);
        history.go(-2);
    } 

    const addUser = (e) => {
        e.preventDefault();

        /*global firebase*/
        firebase.auth().createUserWithEmailAndPassword(values.email,values.password)
        .then(resp =>{
            setErrorMessage(null);

            firebase.auth().currentUser.updateProfile({
                displayName: values.displayName
            })
            .catch(err=>console.log(err))

            props.setCurrentUser({...resp.user,displayName:values.displayName})
            history.go(-2);
        })
        .catch(err=>{
            console.log(err);
            setErrorMessage(err.message);
        })
    }

    const styles = classStyles();

    return (
        <Modal
            open={open}
            onClose={handleClose}
            className={styles.loginModal}
        >
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
                        error={!!errorMessage}
                        helperText={errorMessage ? errorMessage : ''}
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
                        error={!!errorMessage}
                        helperText={errorMessage ? errorMessage : ''}
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
                    <TextField 
                        id='confirmPasswordField' 
                        label='Confirm Password' 
                        name='confirmPassword'
                        value={values.confirmPassword}
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
                    >Sign Up</Button>
                </form>
            </Box>
        </Modal>
    )
}

export default SignUp;