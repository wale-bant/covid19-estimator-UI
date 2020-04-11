import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { formatCurrency, formatNumber } from './utils';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    backgroundColor: '#eee',
  },
}));

export default function Card({ data }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <span role="img" aria-label="infection">
              🤢
            </span>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Currently Infected"
          secondary={formatNumber.format(data.currentlyInfected)}
          secondaryTypographyProps={{ color: 'secondary' }}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <span role="img" aria-label="infection">
              🤢
            </span>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Infections"
          secondary={formatNumber.format(data.infectionsByRequestedTime)}
          secondaryTypographyProps={{ color: 'secondary' }}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <span role="img" aria-label="severe">
              🤮
            </span>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Severe Cases"
          secondary={formatNumber.format(data.severeCasesByRequestedTime)}
          secondaryTypographyProps={{ color: 'secondary' }}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <span role="img" aria-label="bed" style={{ color: '#55c374' }}>
              🛏️
            </span>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Hospital Beds"
          secondary={formatNumber.format(data.hospitalBedsByRequestedTime)}
          secondaryTypographyProps={{ color: 'secondary' }}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <span role="img" aria-label="severe">
              🤢
            </span>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Cases For ICU"
          secondary={formatNumber.format(data.casesForICUByRequestedTime)}
          secondaryTypographyProps={{ color: 'secondary' }}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <span role="img" aria-label="severe">
              🤢
            </span>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Cases For Ventilators"
          secondary={formatNumber.format(
            data.casesForVentilatorsByRequestedTime,
          )}
          secondaryTypographyProps={{ color: 'secondary' }}
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <span role="img" aria-label="severe">
              💲
            </span>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Dollars In Flight"
          secondary={formatCurrency.format(data.dollarsInFlight)}
          secondaryTypographyProps={{ color: 'secondary' }}
        />
      </ListItem>
    </List>
  );
}
