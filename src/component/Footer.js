import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Footer() {
  return (
    <Box>
      <footer className="App-footer">
        <Typography variant="body2" color="textSecondary" align="center">
          Built after washing hands by
          {' '}
          <Link color="inherit" href="https://waledev.com/">
            Olawale Ashiru
          </Link>
        </Typography>
      </footer>
    </Box>
  );
}
