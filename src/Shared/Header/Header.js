import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/paw-care.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { UserIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then( () =>{})
        .catch(error => console.error(error));
    }

    const menuItems = <>
        <li><Link to='/' className='text-lg font-bold'>Home</Link></li>
        <li><Link to='/services' className='text-lg font-bold'>Services</Link></li>
        <li><Link to='/blog' className='text-lg font-bold'>Blog</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img className="btn btn-ghost normal-case text-xl" src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {
                            user?.photoURL ?
                            <img src={user.photoURL} alt='' />
                            :
                            <UserIcon className="h-6 w-6 text-blue-500 mx-auto mt-2" />
                        }
                    </div>
                </label>
               <>
               {
                user?.uid ?
                <button onClick={handleLogOut}  className="btn">Log out</button>
                :
                <Link to='/login' className="btn">Login</Link>
               }
               </>
            </div>
        </div>
    );
};

export default Header;