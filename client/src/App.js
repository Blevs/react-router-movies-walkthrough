import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie.js';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    console.log(movie);
    setSavedList( [...savedList, movie] );
  };

  const obj = {a: 1, b: 2};
  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id"
             /* component={Movie} */
             render={props => <Movie
                                addToSavedList={addToSavedList}
                                /* history={props.history} */
                                /* location={props.location} */
                                /* match={props.match} */
                                {...props}
                              />}
      />
    </div>
  );
};

export default App;
