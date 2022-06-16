import { FacebookLoginButton, TwitterLoginButton } from 'react-social-login-buttons'
import { TextField, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Dispatch, SetStateAction } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

interface IFormInputs {
  Username: string
  Password: string
}

const Login = (props: {setUser: Dispatch<SetStateAction<string | undefined>> }) => {

  const { handleSubmit, control, formState:{errors}, setError } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = data => {
    if (data.Password === "password") {
        chrome.storage.local.set({ username: data.Username }, () => { })
        props.setUser(data.Username)
      console.log(data)
    } else {
      setError("Password", {type: 'focus', message: 'incorrect password'}, {shouldFocus: true})

    }
  };


    return (<>
        <ThemeProvider theme={darkTheme}>
            
        <div>
        Log in
        </div>
          <form className='m-3'>
            <div className='form-text-input'>
              <Controller
                name="Username"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => <TextField {...field} 
                id="outlined-basic" 
                label="Name" 
                variant="outlined" 
                margin="normal" 
                className='w-60' 
                error={!!errors.Username} 
                helperText={!!errors.Username? "please enter your username": ""} 
                />}
                />
            </div>
            <div className='form-text-input'>
            <Controller
              name="Password"
              control={control}
              defaultValue=""
              rules={{
                  required: true,
                }}
                render={({ field }) => <TextField {...field}
                id="outlined-basic" 
                label="Password" 
                type="password" 
                variant="outlined" 
                margin="normal" 
                error={!!errors.Password} 
                helperText={!!errors.Password ? errors.Password.message === "incorrect password" ? "incorrect password" : "please enter your password" : ""} className='w-60'
                />}
                />
            </div>
            <Button variant="text" onClick={handleSubmit(onSubmit)}>submit</Button>
          </form>
        
        <div className='m-0 w-64'>
          <FacebookLoginButton />
          <TwitterLoginButton/>
        </div>
                </ThemeProvider>
    </>)
}

export default Login;