import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: theme.spacing(2),
  },
  link: {
    '&:hover': { color: '#3977fa' },
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Link className={classes.link} color="inherit" target="_blank" rel="noopener" href="https://github.com/wale-bant/covid19-estimator-UI/blob/master/README.md">
        README
      </Link>
    </header>
  );
}
