import React from 'react';
import './Home.css';
import Header from 'C:/Users/Muddappa k g/Documents/upgrad_assignments/React Project/movies-app/src/common/header/Header.js';
import moviesData from 'C:/Users/Muddappa k g/Documents/upgrad_assignments/React Project/movies-app/src/common/moviesData.js';
import {GridList, GridListTile, GridListTileBar} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';


export default class Home extends React.Component{
    render(){
        return(
             <div>
               <header><Header /></header>
               <span className="heading"><text>Upcoming movies</text></span>
               <GridLists />

                <div className="flex-container">
                  <div className="left">
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
                          subtitle={<text type="Date">Release Date:{(moviesData[1].release_date)} </text>}
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
                  </div>
                  
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
function GridLists() {
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

  
  

 


