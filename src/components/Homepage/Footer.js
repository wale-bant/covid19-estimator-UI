import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'sticky',
    marginTop: theme.spacing(2),
  },
  link: {
    '&:hover': { color: '#3977fa' },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box>
      <footer className={classes.footer}>
        <Typography variant="body2" color="textSecondary" align="center">
          Built after washing hands by
          {' '}
          <Link className={classes.link} color="inherit" href="https://github.com/walebant/">
            Olawale Ashiru
          </Link>
        </Typography>
      </footer>
    </Box>
  );
}
