import React, { useContext } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Context } from '../Context';
import CardList from '../components/Result/CardList';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  title: {
    textAlign: 'center',
    color: '#5e5b5b',
  },
}));
export default function Result() {
  const { dialogOpen, setDialogOpen, state } = useContext(Context);
  const classes = useStyles();

  const handleClose = () => setDialogOpen(false);
  return (
    <div>
      <Backdrop className={classes.backdrop} open={dialogOpen} onClick={handleClose}>
        <Dialog
          fullWidth
          maxWidth="sm"
          open={dialogOpen}
          onClose={handleClose}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle className={classes.title}>
            Estimations for the next
            {' '}
            {state.timeToElapse}
            {' '}
            {state.periodType}
          </DialogTitle>
          <DialogContent>
            <CardList />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Backdrop>
    </div>
  );
}
