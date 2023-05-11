import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import ScrollView from './ScrollView';
import SuggestionsTec from  "./SuggestionsTec";
import SuggestionsPr from  "./SuggestionsPr";

const messages = [
    {
      id: 1,
      primary: 'Emily Davis',
      person: '/static/images/avatar/5.jpg',
    },
    {
      id: 2,
      primary: 'Robert Thompson',
      person: '/static/images/avatar/1.jpg',
    },
    {
      id: 3,
      primary: 'Mark Wilson',
      person: '/static/images/avatar/2.jpg',
    },
    {
      id: 4,
      primary: 'Kara Young',
      person: '/static/images/avatar/3.jpg',
    },
    {
      id: 5,
      primary: "Holly Knight",
      person: '/static/images/avatar/4.jpg',
    },
    {
      id: 6,
      primary: 'Roital Metuko',
      person: '/static/images/avatar/5.jpg',
    },
    {
      id: 7,
      primary: 'Omer mulen',
      person: '/static/images/avatar/2.jpg',
    },
    {
      id: 8,
      primary: 'Eli Fread',
      person: '/static/images/avatar/3.jpg',
    },
    {
        id: 9,
        primary: 'Dmitry Simon',
        person: '/static/images/avatar/3.jpg',
      },
    {
        id: 10,
        primary: 'Naama ARCHITECTOR',
        person: '/static/images/avatar/3.jpg',
      },
  ];

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -50,
  left: 500,
  right: 0,
  margin: '0 auto',
  width: 40, // Set the desired width
  height: 40, // Set the desired height
});

export default function BottomAppBar() {
    const handleMenuClick = () => {
      // Add your functionality for the menu button here
      alert('Menu button clicked');
    };
  
    const handleAddClick = () => {
      // Add your functionality for the add button here
      alert('Add button clicked');
    };
  
    const handleSearchClick = () => {
      // Add your functionality for the search button here
      alert('Search button clicked');
    };
  
    const handleMoreClick = () => {
      // Add your functionality for the more button here
      alert('More button clicked');
    };
  
    const handleListItemClick = (id) => {
        // Add your functionality for the list item here
        fetch('http://127.0.0.1:9080/ai/' + id)
            .then((response) => response.json())
            .then((data) => {
            // Access the data from the response here
            alert(data.customer_name);
            // Perform any further operations with the data
            })
            .catch((error) => {
            // Handle any errors that occurred during the fetch request
            alert('Error: ' + error);
            });
        // alert(`List item ${id} clicked`);
      };
    
      return (
        <React.Fragment>
          <CssBaseline />
          <Paper square sx={{ pb: '50px' }}>
            <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
              Tickets
            </Typography>
            <List sx={{ mb: 2 }}>
              {messages.map(({ id, primary, secondary, person }) => (
                <React.Fragment key={id}>
                  {id === 1 && (
                    <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                      Today
                    </ListSubheader>
                  )}
    
                  {id === 3 && (
                    <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                      Yesterday
                    </ListSubheader>
                  )}
    
                  <ListItem button onClick={() => handleListItemClick(id)}>
                    <ListItemAvatar>
                      <Avatar alt="Profile Picture" src={person} />
                    </ListItemAvatar>
                    <ListItemText primary={primary} secondary={secondary} />
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          </Paper>
          <AppBar position="sticky" color="primary" sx={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
              <IconButton color="inherit" aria-label="open drawer" onClick={handleMenuClick}>
                <MenuIcon />
              </IconButton>
              <StyledFab color="secondary" aria-label="add" onClick={handleAddClick}>
                <AddIcon />
              </StyledFab>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton color="inherit" onClick={handleSearchClick}>
                <SearchIcon />
              </IconButton>
              <IconButton color="inherit" onClick={handleMoreClick}>
                <MoreIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </React.Fragment>
      );
    }