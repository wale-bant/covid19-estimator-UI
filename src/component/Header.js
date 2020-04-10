import React, { useState } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: theme.spacing(2),
  },
}));

export default function Header() {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <header className={classes.header}>
      <Link color="inherit" target="_blank" rel="noopener" href="https://github.com/wale-bant/covid19-estimator/blob/assessment/README.md">
        <GitHubIcon
          fontSize="large"
          color={isHovered ? 'primary' : 'inherit'}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </Link>
    </header>
  );
}
