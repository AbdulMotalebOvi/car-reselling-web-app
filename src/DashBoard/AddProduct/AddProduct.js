import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate, } from 'react-router-dom';
import { UseAuthContext } from '../../UseContext/AuthContext';

const AddProduct = () => {
    const { user } = useContext(UseAuthContext)
    const [selectValue, setSelectValue] = useState('');

    const onChange = (event) => {
        const value = event.target.value;
        setSelectValue(value)

    };
    const location = [
        { place: 'Dhaka', id: 1, value: 'Dhaka' },
        { place: 'Feni', id: 2, value: 'Feni' },
        { place: 'Cumilla', id: 3, value: 'Cumilla' },
        { place: 'Rajshahi', id: 4, value: 'Rajshahi' },
        { place: 'Chattogaram', id: 5, value: 'Chattogaram' },
        { place: 'Khulna', id: 6, value: 'Khulna' },
        { place: 'Barisal', id: 7, value: 'Barisal' },
        { place: 'Sylet', id: 8, value: 'Sylet' },
    ]
    const year = [
        { year: 2015, id: 1, value: 2015 },
        { year: 2016, id: 2, value: 2016 },
        { year: 2017, id: 3, value: 2017 },
        { year: 2018, id: 4, value: 2018 },
        { year: 2019, id: 5, value: 2019 },
        { year: 2020, id: 6, value: 2020 },
        { year: 2021, id: 7, value: 2021 },
        { year: 2022, id: 8, value: 2022 },

    ]


    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate()

    const img = process.env.REACT_APP_IMGBB_SECRET_KEY

    const addUser = (data) => {
        // const { email, password } = data
        console.log(
            data
        );
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image)
        fetch(`https://api.imgbb.com/1/upload?key=${img}`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                const productInfo = {
                    productsName: data.name,
                    email: data.email,
                    Resale: data.price,
                    image: result.data.url,
                    Purchase: data.Year,
                    Condition: data.condition,
                    Location: data.Location,
                    Number: data.number,
                    Description: data.text,
                    Category: selectValue

                }

                if (selectValue === 'Micro-Bus') {
                    fetch('https://assignment-12-server-six-chi.vercel.app/usedMicroBus', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(productInfo)
                    })

                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {

                                toast.success(`product added successfully`)
                                reset()

                                navigate('/microbus')
                            }
                            console.log(data);
                        })
                }
                else if (selectValue === 'Luxury-Car') {
                    fetch('https://assignment-12-server-six-chi.vercel.app/luxuryCar', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(productInfo)
                    })

                        .then(res => res.json())
                        .then(data => {

                            if (data.acknowledged) {
                                toast.success(`product added successfully`)
                                reset()
                                console.log(data);
                                navigate('/luxuryCar')
                            }
                            console.log(data);
                        })
                }
                else if (selectValue === 'Electronic-Car') {
                    fetch('https://assignment-12-server-six-chi.vercel.app/electronicCarFind', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(productInfo)
                    })

                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {

                                toast.success(`product added successfully`)
                                reset()
                                console.log(data);
                                navigate('/electricCar')
                            }
                            console.log(data);
                        })
                }



            })

            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (
        <div className='w-3/4 p-7 '>
            <form onSubmit={handleSubmit(addUser)}>

                <div className="form-control w-full ">
                    <div className='flex space-x-6'>
                        <div>
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type='text' className="input input-bordered w-full capitalize"  {...register("name", { required: "Name is required" })} />

                            {errors.name && <p className='text-red-500 font-semibold'>{errors.name?.message}</p>}
                        </div>
                        <div>

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input type='email' className="input input-bordered w-full " defaultValue={user?.email} readOnly  {...register("email", { required: 'Email is required' })} />

                            {errors.email && <p className='text-red-500 font-semibold'>{errors.email?.message}</p>}
                        </div>
                    </div>
                    <div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Resale Price</span>
                            </label>
                            <label className="input-group">
                                <span>Price</span>
                                <input type="number" placeholder="10" className="input input-bordered" {...register("price", { required: 'Price is required' })} />
                                <span>USD</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <div className="form-control w-full max-w-xs  border p-8 ">

                            <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image", { required: 'Photo is required' })} />

                            {errors.image &&
                                <p className='text-red-500 font-semibold'>{errors.image?.message}</p>}



                        </div>
                        <div className='flex space-x-6'>
                            <div>
                                <label className="label">
                                    <span className="label-text">Number</span>
                                </label>

                                <input type="number"
                                    name='number'
                                    placeholder="Phone" className="input input-bordered w-auto "{...register("number", { required: 'Number is required' })} />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text">Year of purchase </span>
                                </label>
                                <select
                                    className="select select-bordered  w-auto "
                                    {...register("Year", { required: true })} >
                                    {
                                        year.map(yr => <option key={yr.id} value={yr.value} >{yr.year}</option>)
                                    }

                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex space-x-6'>
                        <div>
                            <label className="label">
                                <span className="label-text">Condition Type</span>
                            </label>
                            <select
                                className="select select-bordered"
                                {...register("condition", { required: true })} >
                                <option value="Excellent">Excellent</option>
                                <option value="Good">Good</option>
                                <option value="Fair">Fair</option>
                            </select>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <select
                                className="select select-bordered"
                                {...register("Location", { required: true })} >
                                {
                                    location.map(lo => <option key={lo.id} value={lo.value}>{lo.place}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <label className="label">
                        <span className="label-text">Description </span>
                    </label>

                    <input type="text" placeholder="Product Description" className="input my-3 input-bordered w-full max-w-xs"  {...register("text", { required: true })} />
                </div>
                <div>
                    <select
                        onChange={onChange}
                        className="select select-bordered  w-1/2 "

                    >
                        <option defaultValue disabled>
                            Select Category?
                        </option>
                        <option value='Luxury-Car'>Luxury-Car</option>
                        <option value='Electronic-Car'>Electronic-Car</option>
                        <option value='Micro-Bus'>Micro-Bus</option>

                    </select>
                </div>

                <div className='flex-col'>
                    {
                        selectValue === 'Luxury-Car' &&
                        <input type="submit" className='btn my-4' value="Add Luxury-Car" />

                    }

                    {
                        selectValue === 'Electronic-Car' &&
                        <input type="submit" className='btn my-4' value="Add Electronic-Car" />

                    }

                    {
                        selectValue === 'Micro-Bus' &&
                        <input type="submit" className='btn my-4' value="Add Micro-Bus" />


                    }
                </div>
            </form>

        </div>
    );
};

export default AddProduct;