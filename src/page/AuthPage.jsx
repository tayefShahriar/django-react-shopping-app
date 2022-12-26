import React, {useState} from 'react'
import {Grid, Typography, TextField, Button} from '@material-ui/core'
import {domain} from '../env'
import axios from 'axios'

const AuthPage = () => {
    const [registerNow, setRegisterNow] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const loginnow = async() => {
        await axios({
            url: `${domain}/api/apilogin/`,
            method: 'POST',
            data: {
                username: email,
                password: password,
            }
        }).then(response => {
            let data = response.data
            if (data['token']) {
//                 console.log(data['token']);
                window.localStorage.setItem('token', data['token']);
                window.location.href = '/';
            } else {
                alert("Somthing is Wrong !! Try Agail !")
            }
        }).catch(_ => {
            alert("Somthing is Wrong !! Try Agail catch!")
        })
    }
    const register = async() => {
        if (password===password2){
            await axios({
                url: `${domain}/api/register/`,
                method: 'POST',
                data: {
                    'email': email,
                    'password': password,
                }
            }).then(response=>{
//                 console.log('AuthPage============',response.data)
                    if(response.data['error']===false){
                        setRegisterNow(false)
                    }
                    else{
                        alert("Somthing is wrong. Try Again!!!")
                    }
            })
        }
        else{
            alert("Two Password Not Matched!!!")
        }
    }
    return (
        <Grid container spacing={0} direction="column" alignItems='center' justify='center' style={{minHeight:'80vh'}}>
        <Typography variant="h4">{registerNow? "Register Now" : "Login Now"}</Typography>
        <Grid item xs={12} md={6} sm={6}>
            <TextField
                style={{width: '100%', margin: '10px 0'}}
                variant = 'outlined'
                label = 'Emails'
                type = 'text'
                onChange = {(e) => setEmail(e.target.value)}
            />
            <TextField
                style={{width: '100%', margin: '10px 0'}}
                variant = 'outlined'
                label = 'Password'
                type = 'password'
                onChange = {(e) => setPassword(e.target.value)}
            />
            {
                registerNow && <TextField
                style={{width: '100%', margin: '10px 0'}}
                variant = 'outlined'
                label = 'Confirm Password'
                type = 'password'
                onChange = {(e) => setPassword2(e.target.value)}
            />
            }
            {
                registerNow ?
                <>
                <Button onClick={register} variant = 'contained' color = 'primary'>
                    Register
                </Button>
                <Button onClick = {()=>setRegisterNow(false)}>
                    Have an account? Login Now.
                </Button>
                </>
                :
                <>
                <Button onClick={loginnow} variant = 'contained' color = 'primary'>
                    Login
                </Button>
                <Button onClick = {()=>setRegisterNow(true)}>
                    No account? Register Now.
                </Button>
                </>
            }
        </Grid>
        </Grid>
    )
}
export default AuthPage