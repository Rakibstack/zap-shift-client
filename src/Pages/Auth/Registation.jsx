import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Registation = () => {

    const {createuser,LogInWithGoogle} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const { register,
        handleSubmit,
        formState: { errors },reset
    } = useForm();

    const HandleSubmit = (data) => {

        createuser(data.email,data.password)
        .then(result => {
            reset()
            console.log(result.user); 
             navigate(location.state ? location.state : '/')         
        }).catch(error => {
            console.log(error);
            
        })
    }
    const HandleGoogle = () => {

        LogInWithGoogle()
        .then(() => {
        navigate(location.state ? location.state : '/')
        }).catch(() => {})
    }

    return (
        <div className='mx-auto w-8/12'>

            <div className="card  w-full max-w-sm ">
                <div className="card-body">
                    <h2 className='text-[#000000] font-extrabold text-[2.4rem]'>Create an Account</h2>
                    <p className='text-[#000000] font-medium'>Register with ZapShift</p>
                    <form onSubmit={handleSubmit(HandleSubmit)}>
                        <fieldset className="fieldset mt-4">

                            {/* name field */}
                            <label className="label text-[#000000]">Name</label>
                            <input type="text" {...register('name', { required: true })} className="input w-full" placeholder="Type Your Name" />

                            {/* email field */}
                            <label className="label text-[#000000]">Email</label>
                            <input type="email" {...register('email', { required: true })} className="input w-full" placeholder="Email" />
                            {errors.email?.type === 'required' && <p className='text-red-500'>Email Is Requred.</p>}

                            {/* password field */}
                            <label className="label text-[#000000]">Password</label>
                            <input type="password" {...register('password', {
                                required: true,
                                minLength: 6,
                                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+\-={}[\]:;"'<>,.?/\\|~`]).{6,}$/
                            })} className="input w-full" placeholder="Password" />
                            {
                                errors.password?.type === 'required' && <p className='text-red-500'>Password is Requred</p>
                            }
                            {
                                errors.password?.type === 'minLength' && <p className='text-red-500'> Password must be 6 characters or longer</p>
                            }
                            {
                                errors.password?.type === 'pattern' && <p className='text-red-500'>password Must Have At least 1 uppercase letter At least 1 lowercase letter At least 1 special character Minimum length 6</p>
                            }

                            <button className="btn bg-primary font-bold mt-4">Register</button>
                            <p className='font-medium mt-1'>Already have an account Please? <Link to='/login' className='text-primary font-bold'>Login</Link> </p>
                            <strong className='text-center'>OR</strong>
                            {/* Google */}
                            <button 
                            onClick={HandleGoogle}
                            className="btn bg-gray-100 text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Register with Google
                            </button>

                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registation;