import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../Assets/images/login.jpg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
const {googleLogIn} = useContext(AuthContext);

const googleProvider = new GoogleAuthProvider();

    const handleLogin = event =>{
        event.preventDefault();
    }

    const handleGoogleLogIn = () =>{
        googleLogIn(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error));
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold">Login please!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-lg">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-lg">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p>Don't have a account?
                                    <Link className='text-blue-900 font-medium' to='/register'>Register</Link>
                                </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary font-bold text-lg">Login</button>
                        </div>
                        <p className='text-center text-md font-bold'>or</p>
                        <div className="form-control mt-2">
                            <button onSubmit={handleGoogleLogIn} className="btn btn-primary font-bold text-lg">Login with Google</button>
                        </div>
                    </form>
                </div>
                <div >
                    <img src={img} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Login;