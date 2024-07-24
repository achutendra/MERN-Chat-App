import React, {useState} from 'react'
import {Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography} from '@mui/material'
import {CameraAlt as CameraAltIcon} from '@mui/icons-material'
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import {useFileHandler, useInputValidation} from "6pp";
import { usernameValidator } from '../utils/validators';

// Toggle login and register
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  }

  const name = useInputValidation("");
  const password = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);

  const avatar = useFileHandler("single")

  const handleLogin = (e) => {
    e.preventDefault();
  }

  const handleSignUp = (e) => {
    e.preventDefault();
  }

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(rgba(200,200,200,0.5), rgba(120,110,220,0.5))",
      }}
    >
        <Container 
        component={"main"} 
        maxWidth={"xs"}
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper 
          elevation={3}
          sx={{padding: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
          }}
        >
          {isLogin ? (
          <>
            <Typography variant='h5'>Login</Typography>
            <form style={{
                width: "100%",
                marginTop: "1rem",
            }}
            onSubmit={handleLogin}
            >
              <TextField 
                required 
                fullWidth 
                label= "Username" 
                margin='normal' 
                variant= "outlined"
                value={username.value}
                onChange={username.changeHandler}
              />

              <TextField 
                required 
                fullWidth 
                label= "Password"
                type='password'
                margin='normal' 
                variant= "outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button 
                sx={{
                  marginTop: "1rem",
                }}
                variant='contained' 
                color='primary' 
                type='submit'
                fullWidth
              >
                Login
              </Button>

              <Typography 
                variant='h6'
                textAlign={"center"}
                m={"1rem"}
              >
                OR
              </Typography>

              <Button 
                sx={{
                  marginTop: "1rem",
                }}
                variant='outlined' 
                color='primary' 
                type='submit'
                fullWidth
                onClick={toggleLogin}
              >
                Register
              </Button>
            </form>
          </>
          ) : (
            <>
            <Typography variant='h5'>Register</Typography>
            <form style={{
                width: "100%",
                marginTop: "1rem",
                }}
                onSubmit={handleSignUp}
            >

              <Stack 
                position={"relative"}
                width={"10rem"}
                margin={"auto"}
              >
                <Avatar 
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  src={avatar.preview}
                />

                <IconButton 
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    color: "white",
                    bgcolor: "rgba(0, 0, 0, 0.5)",
                    ":hover": {
                      bgcolor: "rgba(0, 0, 0, 0.7)",
                    },
                  }}
                  component="label"
                >
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput
                      type="file"
                      onChange={avatar.changeHandler}
                    />
                  </>
                </IconButton>
              </Stack>

              {avatar.error && (
                  <Typography
                    m={"1rem"}
                    width={"fit-content"}
                    display={"block"}
                    variant='caption'
                    color="error"
                  >
                    {avatar.error}
                  </Typography>
              )}

              <TextField 
                required 
                fullWidth 
                label= "Name" 
                margin='normal' 
                variant= "outlined"
                value={name.value}
                onChange={name.changeHandler}
              />

              <TextField 
                required 
                fullWidth 
                label= "Username" 
                margin='normal' 
                variant= "outlined"
                value={username.value}
                onChange={username.changeHandler}
              />

              {
                username.error && (
                  <Typography
                    variant='caption'
                    color='error'
                  >
                    {username.error}
                  </Typography>
                )
              }

              <TextField 
                required 
                fullWidth 
                label= "Bio" 
                margin='normal' 
                variant= "outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />

              <TextField 
                required 
                fullWidth 
                label= "Password"
                type='password'
                margin='normal' 
                variant= "outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button 
                sx={{
                  marginTop: "1rem",
                }}
                variant='contained' 
                color='primary' 
                type='submit'
                fullWidth
              >
                Register
              </Button>

              <Typography 
                variant='h6'
                textAlign={"center"}
                m={"1rem"}
              >
                OR
              </Typography>

              <Button 
                sx={{
                  marginTop: "1rem",
                }}
                variant='outlined' 
                color='primary' 
                type='submit'
                fullWidth
                onClick={toggleLogin}
              >
                Login
              </Button>
            </form>
          </>
          )}  
        </Paper>
      </Container>
    </div>
  )
}

export default Login