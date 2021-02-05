import React from 'react';
import {
    Container,
    Typography,
    Box,
    Grid,
    CssBaseline
} from '@material-ui/core';
import PostCard from '../components/PostCard';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        minHeight: '80vh'
    }
});

const blogPosts = [
    {
        name: "blog 1",
        author: "Peter",
        desc: "Hello world!",
    },
    {
        name: "blog 2",
        author: "Jimmy",
        desc: "Sunny day!",
    },
    {
        name: "blog 3",
        author: "Anna",
        desc: "Happy holiday!",
    },
]

const Index = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline></CssBaseline>
            <Container maxWidth="lg" className={classes.container}>
                <Box my={4} display="flex" justifyContent="center">
                    <Typography variant="h4" component="h1" gutterBottom>
                        Featured Blog posts
                    </Typography>
                </Box>
                <Grid container spacing={4}>
                    {blogPosts.map(post => (
                        console.log("BLOG POST: ", post)
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default Index;