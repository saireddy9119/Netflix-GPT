import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND_IMAGE } from '../utils/constants'

const GptSearch = () => {
    return (
        <div>
            <div className='fixed -z-20'>
                <img src={BACKGROUND_IMAGE} alt="background" />
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch