import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Card from './Card';
import { Context } from '../../Context';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  header: {
    textAlign: 'center',
    padding: theme.spacing(2),
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#494646',
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  gridItem: {
    width: '90%',
  },
  link: {
    textDecoration: 'underline',
    '&:hover': { color: '#000' },
  },
}));

export default function CardList() {
  const { result: { impact, severeImpact } } = useContext(Context);
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="sm">
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item sm={6} xm={12} className={classes.gridItem}>
          <Paper elevation={3}>
            <Typography className={classes.header}>Mild Impact</Typography>
            <Card data={impact} />
          </Paper>
        </Grid>
        <Grid item sm={6} xm={12} className={classes.gridItem}>
          <Paper elevation={3}>
            <Typography className={classes.header}>Severe Impact</Typography>
            <Card data={severeImpact} />
          </Paper>
        </Grid>
        <Grid item sm={12} xm={12}>
          <Typography variant="caption" display="block" gutterBottom>
            * Estimates are based on the requested Time
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            * Dollars in flight: How much money the economy is likely to lose over
            the requested time.
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            * Estimates are calculated following the guidelines of
            {' '}
            <Link
              className={classes.link}
              color="inherit"
              target="_blank"
              rel="noopener"
              href="https://externalmediasite.partners.org/Mediasite/Play/53a4003de5ab4b4da5902f078744435a1d?fbclid=IwAR3-HS64-QB9AEbJdxV7ovcCB6nDXGgOkEawgTOYtQx-b720cIKVaJVPq-k"
            >
              Harvard Medical School / Massachusetts General Hospital.
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
