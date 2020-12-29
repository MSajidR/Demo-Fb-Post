import React from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  Box,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  Typography,
  CardContent,
  Container,
  TextField,
  InputAdornment,
  Input,
  Grid,
  IconButton,
  Text,

} from '@material-ui/core';
import { Visibility, VisibilityOff, AccountCircle } from '@material-ui/icons';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>({
    margin: {
      margin: theme.spacing(1),
    },
    IconButtonStyle: {
      padding: 0
    }

  })
);

const LoginUi = () => {

  
  const classes = useStyles();

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (


    <Container maxWidth="sm" >
      <Card style={{ marginTop: '5%' }}>
        <CardActionArea>
          <h1 style={{
            color: "red",
            textAlign: "center"
          }}>Login Page</h1>
          <CardContent>

          <Grid container spacing={1} alignItems="flex-end">
          <Grid item xs={12} spacing={1} alignItems="flex-end">
            <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
            </Grid>
<br />
            <Grid item xs={12} spacing={1} alignItems="flex-end">
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton className={classes.IconButtonStyle}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            </Grid>
            </Grid>

          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Login
          </Button>
        </CardActions>
      </Card>
    </Container>


  );
}


export default LoginUi;