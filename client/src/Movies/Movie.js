import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieCard  from './MovieCard.js';

const Movie = (props) => {
  const [movie, setMovie] = useState(null);
  console.log('Movie', props, props.match.params.id);
 
  const id = props.match.params.id;
  // change ^^^ that line and grab the id from the URL
  // You will NEED to add a dependency array to this effect hook
  useEffect(() => {

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <MovieCard movie={movie} {...props} />
  );
}

export default Movie;
