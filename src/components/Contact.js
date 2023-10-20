import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Container, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    backgroundColor: '#f8f9fa6', // Change the background color here
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
    alignItems: 'center',
  },
  textField: {
    margin: theme.spacing(1),
    width: '100%',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root} id='contact-me'>
      <Container maxWidth="sm">
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center" gutterBottom>
            Contact Me
          </Typography>
          <form className={classes.form}>
            <TextField
              label="Name"
              variant="outlined"
              className={classes.textField}
            />
            <TextField
              label="Email"
              variant="outlined"
              className={classes.textField}
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              minRows={4}
              className={classes.textField}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Send
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default Contact;