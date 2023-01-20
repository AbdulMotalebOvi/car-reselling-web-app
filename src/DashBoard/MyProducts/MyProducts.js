import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyProducts = () => {
    const url = 'http://localhost:5000/myProducts'
    const { data: products = [] } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })
    return (
        <div className='max-w-screen-xl mx-auto my-10'>
            <div className='grid grid-cols-3 gap-5'>
                {
                    products.map(pd =>
                        <div key={pd._id} className="block rounded-lg p-4 shadow-sm shadow-indigo-100">

                            <img
                                alt="Home"
                                src={pd.image}
                                className="h-56 w-full rounded-md object-cover"
                            />

                            <div className="mt-2">
                                <dl>
                                    <div className='flex justify-between'>

                                        <dd className="text-sm text-gray-500">${pd.price}</dd>
                                        <button className="btn btn-sm  btn-primary text-sm">Buy Now</button>
                                    </div>
                                    <div>


                                        <dd className="font-medium capitalize">{pd.productsName}</dd>
                                    </div>
                                    <div>
                                        <dd className="font-medium"><span className='text-red-500'>Location:</span> {pd.Location}</dd>
                                    </div>


                                </dl>
                                <div>
                                    <dd className="font-medium"><span className='text-red-500'>Description</span>:   {pd.Description}</dd>

                                </div>
                                <div className="mt-6 flex items-center gap-8 text-xs">
                                    <div className="sm:inline-flex sm:shrink-0 sm:items-center">
                                        <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                            <p className="text-gray-500">Condition</p>

                                            <p className="font-medium"> {pd.Condition}</p>
                                        </div>
                                    </div>

                                    <div className="sm:inline-flex sm:shrink-0 sm:items-center">


                                        <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                            <p className="text-gray-500">Category</p>

                                            <p className="font-medium">{pd.Category}</p>
                                        </div>
                                    </div>

                                    <div className="sm:inline-flex sm:shrink-1 sm:items-center">

                                        <div className="mt-1.5 sm:ml-3 sm:mt-0">
                                            <p className="text-gray-800">Number</p>

                                            <p className="font-medium">{pd.Number}</p>
                                        </div>

                                    </div>


                                </div>

                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default MyProducts;