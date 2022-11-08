import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../Assets/images/login.jpg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true});
            handleUpdateUserProfile(name, photoUrl);
        })
        .catch(error => console.error(error));
    }
    const handleUpdateUserProfile = (name, photoUrl) =>{
        const profile = {
            displayName : name,
            photoURL: photoUrl
        }
        updateUserProfile(profile)
        .then(() =>{})
        .catch(error => console.error(error))
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
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
                            <input type="text" name='photoUrl' placeholder="photoUrl" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium text-lg">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;