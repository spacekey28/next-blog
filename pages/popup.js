import React, { useState } from 'react';
import {
  Container,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  container: {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '1000px',
    height: '300px',
  },
  buttons: {
    margin: '15px 0',
    '& button': {
      padding: '15px 30px',
      margin: '10px',
      border: 'none',
      outline: 'none',
      background: 'rgb(202, 194, 194)',
      borderRadius: '5px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
    }
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    '& img': {
      width: '24%',
      maxWidth: '100%',
      height: '200px',
      display: 'block',
      margin: '0 0.5%',
      cursor : 'pointer',
      marginBottom: '10px',
    },
    '& img:hover': {
      opacity: '0.6',
    }
  },
  modal: {
    width: '100vw',
    height: '100vh',
    zIndex: '1',
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'none',
    '& img': {
      width: '580px',
      height: '400px',
      animation: 'scale 1.1s',
    },
    '& button': {
      position: 'absolute',
      top: '20px',
      right: '20px',
      border: 'none',
      outline: 'none',
      background: 'white',
      borderRadius: '5px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      padding: '10px 13px',
    }
  }
});

const Popup = () => {
  const classes = useStyles();
  const [filter, setFilter] = useState('All');

  function handleTabs(e) {
    console.log("Event: ", e.target.id);
    
    (e.target.id === 'all') ? setFilter('all') : false;
    (e.target.id === 'nature') ? setFilter('nature') : false;
    (e.target.id === 'cars') ? setFilter('cars') : false;

  }

  return (
      <>
        <Container maxWidth="lg" className={classes.container}>
          <h1>Masonry Gallery</h1>
          <Box className={classes.buttons}>
            <button id="all" onClick={handleTabs}>All</button>
            <button id="nature" onClick={handleTabs}>Nature</button>
            <button id="cars" onClick={handleTabs}>Cars</button>
          </Box>
          <Box className={classes.content}>
              <img className="nature" src="https://i.ibb.co/Lv9fDS9/nature1.jpg" alt=""/>
              <img className="nature" src="https://i.ibb.co/XJqn3J9/nature2.jpg" alt=""/>
              <img className="car" src="https://i.ibb.co/SXBSS1X/car1.jpg" alt=""/>
              <img className="car" src="https://i.ibb.co/ysnyMrM/car2.jpg" alt=""/>
          </Box>

          <Box className={classes.modal}>
            <button id="close">Close</button>
            <img src="https://i.ibb.co/Lv9fDS9/nature1.jpg" alt=""/>
          </Box>
        </Container>
      </>
  )
}

export default Popup;