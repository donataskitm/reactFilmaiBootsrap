import React from 'react';
import {Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap';

const Details = (movies) =>{

return (

    <div className="App">
    <div >
      {/*
      <img src={movies.Poster} alt=""/>
      <p> {movies.Title}</p>
      <p> Year: {movies.Year}</p>
      <p> Released: {movies.Released}</p>
      <p> Runtime: {movies.Runtime}</p>
      <p> Genre: {movies.Genre}</p>
      <p> Director: {movies.Director}</p>
      <p> Writer: {movies.Writer}</p>
      <p> Actors: {movies.Actors}</p>
      <p> Type: {movies.Type}</p>
      <p> Language: {movies.Language}</p>
      <p> Imdb rating: {movies.imdbRating}</p>
      <p> Imdb votes: {movies.imdbVotes}</p>
      <p> Short description: {movies.Plot}</p>
      <button onClick = {() =>  movies.showComponent("false")}>Back</button>
    */}

      <Card style={{ width: '40rem' }} >
  <Card.Img style={{ width: '20vw', height: 'auto' }} className="mx-auto"  variant="top" src={movies.Poster} />
  <Card.Body>
    <Card.Title>{movies.Title}</Card.Title>
    <Card.Text>
    Description: {movies.Plot}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem> Year: {movies.Year}</ListGroupItem>
    <ListGroupItem>Released: {movies.Released}</ListGroupItem>
    <ListGroupItem>Runtime: {movies.Runtime}</ListGroupItem>
    <ListGroupItem> Genre: {movies.Genre}</ListGroupItem>
    <ListGroupItem>Director: {movies.Director}</ListGroupItem>
    <ListGroupItem>Writer: {movies.Writer}</ListGroupItem>
    <ListGroupItem>Actors: {movies.Actors}</ListGroupItem>
    <ListGroupItem>Type: {movies.Type}</ListGroupItem>
    <ListGroupItem>Language: {movies.Language}</ListGroupItem>
    <ListGroupItem>Imdb rating: {movies.imdbRating}</ListGroupItem>
    <ListGroupItem>Imdb votes: {movies.imdbVotes}</ListGroupItem>
   
  </ListGroup>
  <Button className="text-center pt-1 m-4" variant="secondary" onClick = {() =>  movies.showComponent("false")}>Back</Button>{' '}
 
</Card>


     
    </div>
  </div>
 
);
}
 //
export default Details;