import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Assets/images/login.jpg'

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-lg">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-lg">PhotoURL</span>
                            </label>
                            <input type="text" name='photoUrl' placeholder="photoUrl" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-lg">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-lg">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p>Already have an account?
                                    <Link className='text-blue-900 font-medium' to='/login'>Login</Link>
                                </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary font-bold text-lg">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;