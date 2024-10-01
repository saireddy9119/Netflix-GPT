import React, { useEffect } from 'react'
import Logo from "../assests/netflixLogo.png"
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error");
        });
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });
        return () => unsubscribe();
    }, []);

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    };
    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };

    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img className='w-44' src={Logo} alt="Logo" />
            {user && (<div className='flex p-2'>
                {showGptSearch && <select className='p-2 m-2 bg-gray-800 text-white' onChange={handleLanguageChange}>
                    {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                </select>}
                <button onClick={handleGptSearchClick} className='text-white py-2 px-4 mx-4 my-2 bg-purple-800 rounded-lg'>{showGptSearch ? "HomePage" : "GPT Search"}</button>
                <img className="w-12 h-12" alt="iconlogo" src={user?.photoURL} />
                <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
            </div>)}
        </div>
    )
}

export default Header