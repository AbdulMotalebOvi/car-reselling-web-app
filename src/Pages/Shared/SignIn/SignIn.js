import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import animations from '../../../Animations/100217-log-in.json'
import Lottie from "lottie-react";
import { UseAuthContext } from '../../../UseContext/AuthContext';
import { toast } from 'react-hot-toast';
import useToken from '../../../hooks/useToken';


const SignIn = () => {
    const { signInWithGoogle, login } = useContext(UseAuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location = useLocation()
    const navigate = useNavigate()
    const [signInToken, setSignInToken] = useState('')
    const [token] = useToken(signInToken)


    let from = location.state?.from?.pathname || "/";
    if (token) {
        navigate(from, { replace: true });
    }

    const submit = (data) => {
        login(data.email, data.password)
            .then(result => {
                const user = result.user
                setSignInToken(data.email)
                toast.success('Login Successful')

                console.log(user)
            })
            .catch(err => console.log(err))
    }
    const handlerToSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user
                toast.success('Login Successful')
                navigate(from, { replace: true });
                console.log(user);

            })
            .catch(err => console.log(err))

    }

    return (
        <div className='max-w-screen-xl mx-auto  flex flex-col items-center'>
            <h1></h1>
            <Lottie className='w-[80px] ' animationData={animations} loop={true} />
            <div className='card  w-96 bg-base-100 mb-5  p-7'>
                <form onSubmit={handleSubmit(submit)} >
                    <h2 className='text-xl font-bold text-center'>Login</h2>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className="input input-bordered w-full " {...register("email", { required: true })} />

                        {errors.email?.type === 'required' && <p className='text-red-600 font-semibold'>Email is required</p>}

                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' className="input input-bordered w-full " {...register("password",
                            {
                                required: true,
                                minLength: { value: 6, message: 'Password Must be At lest 6 characters or longer' }
                            }
                        )} />


                        {errors.password?.type === 'required' && <p className='text-red-600 font-semibold'>Password is required</p>}
                        <label className="label">
                            <span className="label-text text-[13px]">Forget Password?</span>
                        </label>

                    </div>
                    <input type="submit" className='mt-4 btn w-full ' />
                    <p className='text-[15px] mt-3'>New to Car Selling? <Link className='text-red-500 font-semibold' to='/signup'>Create a New Account</Link></p>

                </form>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                    <div> <button className="btn btn-outline w-full " onClick={() => handlerToSignIn()} >CONTINUE WITH GOOGLE</button></div>
                </div>

            </div>

        </div>
    );
};

export default SignIn;