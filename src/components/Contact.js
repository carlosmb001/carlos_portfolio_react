import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Container, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    backgroundColor: '#f5f5f5',
  },
  paper: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: theme.spacing(4),
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: theme.spacing(2),
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
    padding: theme.spacing(2),
    border: 'none',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    '&:focus': {
      outline: 'none',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
    },
    '& .MuiInputBase-input': {
      padding: '10px',
    },
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: '#2196f3',
    color: '#fff',
    borderRadius: '5px',
    padding: theme.spacing(2),
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      backgroundColor: '#1976d2',
    },
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Paper className={classes.paper}>
          <Typography variant="h5" align="center" gutterBottom>
            Contact me
          </Typography>
          <form className={classes.form}>
            <TextField
              label="Company Name"
              variant="outlined"
              className={classes.input}
            />
            <TextField
              label="Email"
              variant="outlined"
              className={classes.input}
            />
            <TextField
              label="What can we work on"
              variant="outlined"
              multiline
              rows={4}
              className={classes.input}
            />
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default Contact;