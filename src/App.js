import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import BackGround from './Eva.jpeg';
import Calendar from 'react-calendar';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        DWP Digital
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${BackGround})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  label: {
    color: '#9a9a9a',
  }
}));

export default function SignInSide() {
  const classes = useStyles();

  //Handle radio button changes of state
  const [workR, setWorkR] = React.useState('3');
  
  const handleWorkR = (event, newWorkR) => {
    setWorkR(newWorkR);
  };

  const [gcm, setGCM] = React.useState('');
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
     setLabelWidth(inputLabel.current.offsetWidth);
   }, []);
  const handleChange = event => {
     setGCM(event.target.value);
   };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Eva
          </Typography>

          <Typography component="h6" variant="h6">
            Lets get to know each other!!
          </Typography>

          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="q1"
              label="First Name"
              name="q1"
              autoComplete="Julie"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="q2"
              label="Last Name"
              name="q2"
              autoComplete="Lake"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="q3"
              label="What is your National Insurance (NI) Number?"
              id="q3"
              autoComplete="MC921748A"
            />

            <br />
            <br />
            <label className={classes.label}>How do you feel about your current financial position? 
            <br />
            (1 = Need more support 5 = Comfortable)</label>
            <br />
            <br />

            <ToggleButtonGroup
                value={workR}
                exclusive
                onChange={handleWorkR}>
                  <ToggleButton value="1">
                    1
                  </ToggleButton>
                  <ToggleButton value="2">
                    2
                  </ToggleButton>
                  <ToggleButton value="3">
                    3
                  </ToggleButton>
                  <ToggleButton value="4">
                    4
                  </ToggleButton>
                  <ToggleButton value="5">
                    5
                  </ToggleButton>
              </ToggleButtonGroup>

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="q5"
                label="What non-essential expenditure would you like support to achieve?"
                id="q5"
                autoComplete="Holiday"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="q6"
                label="How much do you believe this will cost?"
                id="q6"
                autoComplete="Holiday"
              />
            
            <br />
            <br />
            <label className={classes.label}>When would you like to achieve this goal by?</label>
            <br />
            <br />

            <Calendar />

          <InputLabel 
          ref={inputLabel} 
          variant="outlined"
          id="demo-simple-select-label"
          >How would you like to receive further support?
          </InputLabel>
          <br />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gcm}
              onChange={handleChange}
            >
              <MenuItem value={1}>App Notifications</MenuItem>
              <MenuItem value={2}>Email</MenuItem>
              <MenuItem value={3}>Text Message</MenuItem>
            </Select>


            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}