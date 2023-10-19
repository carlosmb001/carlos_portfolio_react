import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
    marginBottom: '10px',
    margin : '0 auto',
  },
  description: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  link: {
    display: 'inline-block',
    backgroundColor: '#ddd',
    borderRadius: '5px',
    padding: '5px 10px',
    marginRight: '10px',
    marginBottom: '10px',
    fontSize: '14px',
    textDecoration: 'none',
    color: 'inherit',
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
          <CardMedia
          className={classes.media}
          image={project.image}
          alt={project.name}
        />
          <Link href={project.gitLink} className={classes.link}>
            GitHub
          </Link>
          <Link href={project.liveLink} className={classes.link}>
            Live Demo
          </Link>
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