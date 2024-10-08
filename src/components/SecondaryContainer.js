import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    //if (!movies) return;
    console.log(movies.nowPlayingMovies)
    return (
        movies &&
        (<div className='bg-black'>
            <div className='-mt-40 pl-12 relative z-20'>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Trending"} movies={movies.trendingMovies} />
                <MovieList title={"Popular"} movies={movies.popularMovies} />
                <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
            </div>
            {/* 
               MovieList - Popular
               MovieList - Now Playing
               MovieList - Trending
               MovieList - Horror
             */}
        </div>)
    )
}

export default SecondaryContainer