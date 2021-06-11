import React from 'react';
import {Card, Button} from 'react-bootstrap';

const Movie = (movies) =>{
//console.log(JSON.stringify(movies) +"movies");
return (
 <div>
 {/*
  <div className="App"> <div key={movies.id}> 
      <p> {movies.Title}</p>
      <img src={movies.Poster} alt=""/>
      <p> Movie type: {movies.Type}</p>
      <p> Year: {movies.Year}</p>
      <button onClick={ ()=>{movies.startSearch1(movies.imdbID); movies.startShow(false)}}>More info</button> 
    </div>
    <hr></hr>
  </div>
  */}


 
      
        <Card style={{ width: '18rem' }} key = {movies.id} className="text-center m-1">
  <Card.Img variant="top"  src={movies.Poster}  />
  <Card.Body className="d-flex flex-column ">
    <Card.Title>Movie type: {movies.Title}</Card.Title>
    <Card.Text >
    Movie type: {movies.Type}
    </Card.Text>
    <Card.Text >
    Movie type: {movies.Type}
    </Card.Text>
    Year: {movies.Year}
    <Button className="text-center pt-1 m-4" variant="secondary" onClick={ ()=>{movies.startSearch1(movies.imdbID); movies.startShow(false)}}>More info</Button>{' '}
  </Card.Body>
</Card>

     





</div>







);
}


export default Movie;
