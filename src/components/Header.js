import React, { useEffect } from 'react'
import Logo from "../assests/netflixLogo.png"
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase'
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
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
    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img className='w-44' src={Logo} alt="Logo" />
            {user && (<div className='flex p-2'>
                <img className="w-12 h-12" alt="iconlogo" src={user?.photoURL} />
                <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
            </div>)}
        </div>
    )
}

export default Header