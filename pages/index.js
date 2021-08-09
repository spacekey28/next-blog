import React from 'react';
import {
    Container,
    Typography,
    Box,
    Grid,
    CssBaseline
} from '@material-ui/core';
import PostCard from '../components/PostCard';
import blogPosts from '../data/blog-posts';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
  },
  body: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  container: {
      minHeight: '80vh',
  }
});

const Index = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline></CssBaseline>
      <Container maxWidth="lg" className={classes.container}>
        <Box my={4} display="flex" justifyContent="center">
          <Typography variant="h4" component="h1" gutterBottom>
            Blog
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {blogPosts.map(post => (
              <PostCard key={post.title} post={post} />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Index;