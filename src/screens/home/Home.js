import React from 'react';
import './Home.css';
import Header from 'C:/Users/Muddappa k g/Documents/upgrad_assignments/React Project/movies-app/src/common/header/Header.js';
import moviesData from 'C:/Users/Muddappa k g/Documents/upgrad_assignments/React Project/movies-app/src/common/moviesData.js';
import {GridList, GridListTile, GridListTileBar} from '@material-ui/core';
import genre from 'C:/Users/Muddappa k g/Documents/upgrad_assignments/React Project/movies-app/src/common/genre.js';
import artists from 'C:/Users/Muddappa k g/Documents/upgrad_assignments/React Project/movies-app/src/common/artists.js';

import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea} from '@material-ui/core/';
import TextField from '@mui/material/TextField';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
//  import palette from '@mui/system';
// import { createTheme } from '@mui/material/styles';
import { FormLabel, FormControl, InputLabel, Input, MenuItem, Select, Checkbox, Button} from '@material-ui/core';



export default class Home extends React.Component{
    render(){
        return(
          <div>
            <header><Header /></header>
            <span className="heading"><text>Upcoming movies</text></span>
            <UpcomingMovies />
            <div className="flex-container">
              <div className="left"><ReleasedMovies /></div>  
              <FilterCard />
            </div>
          </div> 
        );
    }
}
const useStyles = makeStyles((theme) => ({
    root: {

      display: 'flex',
      //flexWrap: 'wrap',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      cursor: 'pointer',
    },
    GridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
      
    },
  })); 
function UpcomingMovies() {
    const classes = useStyles(); 
    return (
      <div className={classes.root}>
        <GridList  className={classes.GridList} cols={6}>
          {moviesData.map((item) => (
            <GridListTile key={item.id } cellHeight={250}>
              <img src={item.poster_url } alt={item.title} />
              <GridListTileBar
                title={item.title}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }

  function ReleasedMovies(){
    return(
      <GridList cols={4} cellHeight={350} spacing={20} >
        <GridListTile >
          <img src={moviesData[6].poster_url} alt="pic" />
          <GridListTileBar
            title={moviesData[6].title} 
            subtitle={<text type="Date">Release Date:{(moviesData[6].release_date)} </text>}
          />
        </GridListTile>
        <GridListTile>
          <img src={moviesData[1].poster_url} alt="pic" />
          <GridListTileBar
            title={moviesData[1].title} 
            subtitle={<text type="Date">Release Date:{moviesData[1].release_date} </text>}
            />
        </GridListTile>  
        <GridListTile>
          <img src={moviesData[5].poster_url} alt="pic" />
          <GridListTileBar
            title={moviesData[5].title} 
            subtitle={<text type="Date">Release Date:{(moviesData[5].release_date)} </text>}
          />
        </GridListTile>
        <GridListTile>
          <img src={moviesData[2].poster_url} alt="pic" />
          <GridListTileBar
            title={moviesData[2].title} 
            subtitle={<text type="Date">Release Date:{(moviesData[2].release_date)} </text>}
          />
        </GridListTile>  
      </GridList>                          

    );
  }
  function FilterCard(){
    return(
        <Card style={{padding:20}}><CardActionArea }>
          <FormControl style={{minWidth: 240,maxWidth: 240, margin: 'theme.spacing.unit'}}>
            <FormLabel style={{color:'#7986cb'}}>FIND MOVIES BY:</FormLabel>
                <FormControl>
                  <InputLabel htmlFor="input1" placeholder="Movie Name" margin="theme.spacing.unit">Movie Name</InputLabel>
                  <Input id="input1" aria-describedby="my-helper-text" />
                </FormControl>
                <FormControl>
                  <InputLabel id="input2" >Genres</InputLabel>
                  <Select
                    labelId="input2"
                    id="input2"
                    value={genre.id}
                   //onChange={handleChange}
                  >
                  {genre.map((item)=>(
                  <MenuItem key={item.id} value={item}><Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />{item.name}</MenuItem>
                ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="input3" >Artists</InputLabel>
                  <Select
                    labelId="input3"
                    id="input"
                    value={genre.id}
                   //onChange={handleChange}
                  >
                  {artists.map((item)=>(
                  <MenuItem key={item.id} value={item}>
                  <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} /> {item.first_name} {item.last_name}
                {/* // checked={
                //     artists.findIndex(item1 => item1.id === item.id) >= 0
                // }
            /> */}
                  </MenuItem>
                   ))}
                  </Select>
                </FormControl>

                <FormControl>
                <br/>
                  <TextField
                    type="date"
                    label="Released Date Start"
                    InputLabelProps={{shrink: true}}
                    variant="standard"
                  />
                </FormControl>
                <FormControl>
                <br/>
                  <TextField
                    type="date"
                    label="Released Date End"
                    InputLabelProps={{shrink: true}}
                    variant="standard"
                  />
                </FormControl><br/>
                <Button variant="contained" color="primary">APPLY</Button>
          </FormControl>
          
          </CardActionArea>
        {/* </FormGroup> */}
        </Card>

      );
    }

 


