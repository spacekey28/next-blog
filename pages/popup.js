import React from 'react';
import {
  Container,
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
    margin: '15px 0'
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap'
  },
});

const Popup = () => {
  const classes = useStyles();
  return (
      <>
        <Container maxWidth="lg" className={classes.container}>
          <h1>Tabs</h1>
          <div className={classes.buttons}>
            <button id="all">All</button>
            <button id="nature">Nature</button>
            <button id="cars">Cars</button>
          </div>
          <div className={classes.content}>
              <img className="nature" src="https://i.ibb.co/Lv9fDS9/nature1.jpg" alt=""/>
              <img className="nature" src="https://i.ibb.co/XJqn3J9/nature2.jpg" alt=""/>
              <img className="car" src="https://i.ibb.co/SXBSS1X/car1.jpg" alt=""/>
              <img className="car" src="https://i.ibb.co/ysnyMrM/car2.jpg" alt=""/>
          </div>

          <button id="close">X</button>
          <img src="https://i.ibb.co/Lv9fDS9/nature1.jpg" alt=""/>
        </Container>
      </>
  )
}

export default Popup;