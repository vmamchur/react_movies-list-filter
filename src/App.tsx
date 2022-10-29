import React, { useState } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { MoviesList } from './components/MoviesList';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');

  const visibleMovies = moviesFromServer.filter(movie => {
    const doesTitleMatch = movie.title.toLowerCase()
      .includes(query.toLowerCase());
    const doesDescriptionMatch = movie.description.toLowerCase()
      .includes(query.toLowerCase());

    return doesTitleMatch || doesDescriptionMatch;
  });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={event => {
                  setQuery(event.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};