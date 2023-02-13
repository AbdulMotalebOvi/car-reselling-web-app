import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import animations from '../../../Animations/submit-application-successfully.json'
import Lottie from "lottie-react";
import { UseAuthContext } from '../../../UseContext/AuthContext';
import { toast } from 'react-hot-toast';
import useToken from '../../../hooks/useToken';


const SignUp = () => {
    const { signInWithGoogle, createUser, updateInfo } = useContext(UseAuthContext)
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const [selectValue, setSelectValue] = useState('')
    const navigate = useNavigate()
    const [error, setError] = useState()

    const onChange = (event) => {
        const value = event.target.value;
        setSelectValue(value)

    };
    const [userEmail, setUserEmail] = useState('')

    const [token] = useToken(userEmail)

    if (token) {
        navigate('/')
    }


    const submit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                updateInfo(data.name)
                    .then(() => {
                        saveUser(data.name, data.email, selectValue)

                    })
                    .catch(err => {
                        const errorMessage = err.message;
                        setError(errorMessage)
                        console.log(errorMessage)
                    })
                toast.success('User Created Successfully')
                reset()
            })
    }
    const handlerToSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user
                toast.success('User Created Successfully')
                console.log(user);

            })
            .catch(err => {
                const errorMessage = err.message;
                setError(errorMessage)

            })

    }
    const saveUser = (name, email, Role) => {
        const user = { name, email, Role }
        fetch('https://assignment-12-server-six-chi.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setUserEmail(email)

            })
    }

    return (
        <div className='max-w-screen-xl mx-auto  flex flex-col items-center'>
            <Lottie className='w-[80px] ' animationData={animations} loop={true} />
            <div className='card  w-96 bg-base-100 mb-5  p-7'>
                <form onSubmit={handleSubmit(submit)} >
                    <h2 className='text-xl font-bold text-center'>Sign Up</h2>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input className="input input-bordered w-full " {...register("name", { required: true })} />

                        {errors.name?.type === 'required' && <p className='text-red-600 font-semibold'>Name is required</p>}
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className="input input-bordered w-full " {...register("email", { required: true })} />

                        <p className='text-red-600 font-semibold '>{error}</p>
                        {errors.email?.type === 'required' && <p className='text-red-600 font-semibold'>Email is required</p>}
                        <label className="label">
                            <span className="label-text">Select Your Role</span>
                        </label>
                        <select
                            className="select select-bordered"
                            {...register("Role", { required: true })} onChange={onChange}>
                            <option value="Buyer">Buyer</option>
                            <option value="Seller">Seller</option>
                        </select>

                        {errors.select?.type === 'required' && <p className='text-red-600 font-semibold'>Email is required</p>}
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
                    <input type="submit" className='mt-4 btn w-full ' value='register' />
                    <p className='text-[15px] mt-3'>Already Register? Please <Link className='font-semibold text-red-500' to='/SignIn'>Sign In</Link></p>

                </form>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                    <div> <button className="btn btn-outline w-full " onClick={() => handlerToSignIn()} >CONTINUE WITH GOOGLE</button></div>
                </div>

            </div>

        </div>
    );
};

export default SignUp;