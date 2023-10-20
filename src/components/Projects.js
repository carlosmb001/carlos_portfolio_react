import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f5f5f5',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '20px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',   
  },
  media: {
    width: '100%',
    height: '300px',
    borderRadius: '10px',
    margin : 'auto',
    padding: '10px',
  },
  title: {
    fontSize: '24px',
    marginTop: '10px',
    marginBottom: '0px',
    margin : '0 auto',
    textAlign: 'center', 
  },
  description: {
    margin : '10px 5px 10px 5px',
    fontSize: '16px',
    marginBottom: '10px',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin : '0px 5px 8px 5px',
  },
  link: {
    display: 'inline-block',
    backgroundColor: '#ddd',
    borderRadius: '5px',
    padding: '5px 10px',
    margin : '0px 5px 0px 5px',
    fontSize: '14px',
    color: 'inherit',
    textTransform: 'capitalize',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#55ad63',
    },
  },
}));


function Projects(props) {
  const classes = useStyles();

  const ProjectsList = props.projects.map((project) => (
    <Grid item xs={12} sm={6} key={project.id}>
      <div className={classes.root}>
        <div title={project.name}/>
        <div>
          <Typography variant="h6" className={classes.title}>
            {project.name}
          </Typography>
          <div className={classes.button}>
          <Button href={project.gitLink} className={classes.link}>
            GitHub
          </Button>
          <Button href={project.liveLink} className={classes.link}>
            Live Demo
          </Button>
          </div>
          <CardMedia
          className={classes.media}
          image={project.image}
          alt={project.name}
        />
          <Typography variant="body1" className={classes.description}>
            {project.description}
          </Typography>
          <List>
            {/* {project.technologies.map((tech, index) => (
              <ListItem key={index}>
                <ListItemText primary={tech} />
              </ListItem>
            ))} */}
          </List>
        </div>
      </div>
    </Grid>
  ));

  return (
    <div>
          <h2 id='projects' style={{ 
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
            marginTop: '5%',
            }}>
            Projects</h2>
      <Grid container spacing={3}>
        {ProjectsList}
      </Grid>
    </div>
  );
}

export default Projects;