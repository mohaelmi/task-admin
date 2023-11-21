import React, { useRef, useState, useEffect } from 'react';
import { Box, TextField, Typography, Button, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import AuthContext from '../components/AuthProvider';

// import axios from '../api/axios';
// const LOGIN_URL = '/'

const Login = () => {
  // const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser('');
    setPwd('');
    setSuccess(true);
    // Additional logic can be added here for handling form submission
  };

  const handleSignupClick = () => {
    // Navigate to the signup page
    navigate('/signup');
  };

  return (
    <div style={{ paddingTop: '5%' }}>
      <CssBaseline />
      {success ? (
        <section>
          <h1>You are logged in!</h1>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live='assertive'
          >
            {errMsg}
          </p>
          <form onSubmit={handleSubmit}>
            <Box
              display='flex'
              flexDirection={'column'}
              maxWidth={500}
              alignItems={'center'}
              justifyContent={'center'}
              margin='auto'
              marginTop={5}
              marginBottom={5}
              padding={3}
              borderRadius={2}
              boxShadow={'5px 5px 10px #ccc'}
              sx={{ ':hover': { boxShadow: '10px 10px 20px #ccc' } }}
            >
              <Typography
                marginBottom={1}
                marginTop={5}
                variant='h4'
                textAlign='center'
              >
                Login to your Account
              </Typography>

              <TextField
                type={'email'}
                margin='normal'
                id='email'
                ref={userRef}
                label='Enter your email'
                variant='outlined'
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                sx={{
                  width: '80%',
                }}
              />
              <TextField
                type={'password'}
                margin='normal'
                id='password'
                label='Password'
                variant='outlined'
                required
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                sx={{
                  width: '80%',
                }}
              />
              <Button
                type='submit'
                variant='contained'
                sx={{
                  marginTop: 3,
                  height: 50,
                  backgroundColor: '#28282B',
                  width: '80%',
                  ':hover': { backgroundColor: '#0C0908' },
                  fontWeight: 800,
                  letterSpacing: '.3rem',
                }}
              >
                SIGN IN
              </Button>

              <Typography
                variant='h4'
                sx={{
                  color: 'Grey',
                  fontSize: 18,
                  marginTop: 2,
                  marginBottom: 2,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Login using &nbsp;{' '}
                <GoogleIcon
                  fontSize='large'
                  color='disabled'
                  sx={{
                    color: '#DB4437',
                    marginRight: 1,
                    ':hover': { color: 'darkred' },
                  }}
                />
                <FacebookRoundedIcon
                  fontSize='large'
                  color='disabled'
                  sx={{
                    color: '#4267B2 ',
                    ':hover': { color: 'darkblue' },
                  }}
                />
              </Typography>

              <Typography
                marginTop={1}
                marginBottom={1}
                variant='p'
                textAlign='center'
                fontStyle={'oblique'}
                color='primary'
              >
                New user? Create an account
              </Typography>
              <Button
                variant='standard'
                sx={{
                  borderRadius: 3,
                  backgroundColor: 'white',
                  color: 'black', // Fix: Change Color to color
                  textDecoration: 'underline',
                  fontWeight: 'bold',
                  marginBottom: 5,
                }}
                onClick={handleSignupClick}
              >
                Sign Up
              </Button>
            </Box>
          </form>
        </section>
      )}
    </div>
  );
};

export default Login;
