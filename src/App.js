import logo from './logo.svg';
import React from 'react';
import './App.css'; // Assuming you have an App.css file for custom styles
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { List, ListItem, ListItemText, ListItemButton, makeStyles, Button } from '@mui/material';



function App() {

  const classes = useStyles();


  const handleClick = (ticket) => {
    alert(ticket);
    // Add your custom logic here
  };

  return (
    <div className="App">
      {/* Google Web Fonts */}
      <header className="App-header">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <div className="App app-left">
          {/* Existing content goes here */}
          <div className="ScrollView">
            {/* Place the content you want to make scrollable inside this div */}

            <Button variant="contained" onClick={() => {
                    alert('clicked');
                  }}
                  size='large'
                >Contained</Button>

            {/* ticket List */}
            <List>
            <ListItem disablePadding>
              <ListItemButton className={classes.listItem} onClick={() => handleClick('Ticket 1')}>
                <ListItemText primary="Ticket 1" secondary="This is the first ticket" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton className={classes.listItem} onClick={() => handleClick('Ticket 2')}>
                <ListItemText primary="Ticket 2" secondary="This is the second ticket" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton className={classes.listItem} onClick={() => handleClick('Ticket 3')}>
                <ListItemText primary="Ticket 3" secondary="This is the third ticket" />
              </ListItemButton>
            </ListItem>
          </List>


            
            {/* Add more content as needed */}
          </div>




          {/* <div className="App">
            <h1>Hello, Dima!</h1>
            <p>This is my React component.</p>
            <Button variant="contained" color="primary">
              Click me
            </Button>
          </div> */}




        </div>

      </header>
    </div>
  );
}


// Custom styles for the ListItemButton
const useStyles = makeStyles((theme) => ({
  listItem: {
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

export default App;
