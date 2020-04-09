import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#fff',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function MyForm() {
  const classes = useStyles();

  const [state, setState] = useState({
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71,
    },
    periodType: '',
    timeToElapse: '',
    reportedCases: '',
    population: '',
    totalHospitalBeds: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src="https://img.icons8.com/nolan/64/coronavirus.png" />
        </Avatar>
        <Typography component="h1" variant="h5">
          COVID-19 ESTIMATOR
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="population"
                variant="outlined"
                required
                fullWidth
                id="population"
                label="Population"
                autoFocus
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                data-population
                value={state.population}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="reportedCases"
                label="Reported Cases"
                id="reported-cases"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                data-reported-cases
                value={state.reportedCases}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="total-hospital-beds"
                label="Total Hospital Beds"
                name="totalHospitalBeds"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                data-total-hospital-beds
                value={state.totalHospitalBeds}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="time-to-elapse"
                label="Time To Elapse"
                name="timeToElapse"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                data-time-to-elapse
                value={state.timeToElapse}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* <InputLabel id="period-type-label">Period Type</InputLabel> */}
              <Select
                variant="outlined"
                labelId="period-type"
                id="period-type"
                name="periodType"
                data-period-type
                required
                fullWidth
                value={state.periodType}
                onChange={handleChange}
              >
                <MenuItem value="">Period Type</MenuItem>
                <MenuItem value="days">Days</MenuItem>
                <MenuItem value="weeks">Weeks</MenuItem>
                <MenuItem value="months">Months</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            data-go-estimate
          >
            Estimate
          </Button>
        </form>
      </div>
    </Container>
  );
}
