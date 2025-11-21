import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const ForgotPassword = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { Forgotpass } = useAuth();

    const HandleForgotpass = (data) => {
        Forgotpass(data.email)
            .then(() => {
                 reset()
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Reset Password has been successfull",
                    showConfirmButton: false,
                    timer: 2500
                });
               
            }

            )
            .catch()
    }

    return (
        <div className='mx-auto w-8/12'>

            <div className="card  w-full max-w-sm ">
                <form onSubmit={handleSubmit(HandleForgotpass)} className="card-body">
                    <h2 className='text-[#000000] font-extrabold text-[2.4rem]'>Forgot Password</h2>
                    <p className='text-[#000000] font-medium'>Enter your email address and we’ll send you a reset link.</p>
                    <fieldset className="fieldset mt-6">
                        {/* email field */}
                        <label className="label">Email</label>
                        <input type="email" {...register('email', { required: true })} className="input focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Email" />
                        {
                            errors.email?.type === "required" && <p className='text-red-500'>Email is Requred</p>
                        }

                        <button className="btn bg-primary font-bold mt-4">Send</button>
                        <p className='font-medium mt-1'>Remember your password? <Link to='/login' className='text-primary font-bold'>Log In</Link> </p>

                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;