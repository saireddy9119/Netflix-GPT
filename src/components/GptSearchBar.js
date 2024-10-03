import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from "../utils/openai";
import { API_OPTIONS } from '../utils/constants';
import { addGptMoiveResults } from '../utils/gptSlice';
const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config?.lang);
    const searchText = useRef(null);

    const searchMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        return json.results;
    }
    const handleGptSearch = async () => {
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query:" + searchText.current.value + " Only give me 5 movie names comma seperated like the example result given ahead.Example Result: Gadar,Sholay,Don,Golmal,Koi mil Gaye"
        const searchResults = await openai.chat.completions.create({
            messages: [{ role: "user", content: gptQuery }],
            model: "gpt-4o"
        });
        const gptMovies = searchResults.choices?.[0]?.message?.content.split(",");
        const data = await Promise.all(gptMovies.map(movie => searchMovieTMDB(movie)));
        dispatch(addGptMoiveResults({ movieNames: gptMovies, movieResults: data }));
    };
    return (
        <div className='pt-[10%] flex justify-center'>
            <form className=' bg-black grid grid-cols-12 w-1/2' onSubmit={(e => e.preventDefault())}>
                <input ref={searchText} type='text' className='col-span-9 p-4 m-4 rounded-lg' placeholder={lang[langKey].gptSearchPlaceHolder} />
                <button className='col-span-3 m-4 py-2 px-4 bg-red-700 rounded-lg text-white' onClick={handleGptSearch}>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar