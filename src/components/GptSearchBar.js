import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
const GptSearchBar = () => {
    const langKey = useSelector(store => store.config?.lang);
    return (
        <div className='pt-[10%] flex justify-center'>
            <form className=' bg-black grid grid-cols-12 w-1/2'>
                <input type='text' className='col-span-9 p-4 m-4 rounded-lg' placeholder={lang[langKey].gptSearchPlaceHolder} />
                <button className='col-span-3 m-4 py-2 px-4 bg-red-700 rounded-lg text-white'>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar