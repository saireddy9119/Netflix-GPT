import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-[15%] px-14 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='py-6 text-base w-1/4'>{overview}</p>
            <div>
                <button className='bg-white  text-black p-2 px-10 text-xl rounded-lg hover:bg-opacity-80'><FontAwesomeIcon icon={faPlay} /> Play</button>
                <button className=' mx-2 bg-gray-500 text-white p-2 px-9 text-xl bg-opacity-50 rounded-lg'><FontAwesomeIcon icon={faCircleInfo} /> More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle