import React, { useState } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';

const style = {
  position: 'fixed',
  top: 0,
};

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <header className="App-header" style={style}>
      <Link color="inherit" target="_blank" href="https://github.com/wale-bant/covid19-estimator/blob/assessment/README.md">
        <GitHubIcon
          fontSize="large"
          color={isHovered ? 'primary' : ''}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </Link>
    </header>
  );
}
