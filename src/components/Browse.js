import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingMovies from '../hooks/useTrendingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();


  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
            MainContainer
              -VideoBackground
              -VideoTitle
            SecondaryContainer
              -MovieList*n
                -cards*n
         */}
    </div>
  )
}

export default Browse