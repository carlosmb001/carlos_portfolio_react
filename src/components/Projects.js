import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f5f5f5',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '20px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
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
    <Paper key={project.id} className={classes.root}>
      <CardMedia
        className={classes.media}
        image={project.image}
        title={project.name}
      />
      <Typography variant="h2" className={classes.title}>
        {project.name}
      </Typography>
      <Typography variant="body1" className={classes.description}>
        {project.description}
      </Typography>
      <List>
        {project.technologies.map((tech, index) => (
          <ListItem key={index}>
            <ListItemText primary={tech} />
          </ListItem>
        ))}
      </List>
      <Link href={project.gitLink} className={classes.link}>
        GitHub
      </Link>
      <Link href={project.liveLink} className={classes.link}>
        Live Demo
      </Link>
    </Paper>
  ));

  return <div>{ProjectsList}</div>;
}

export default Projects;