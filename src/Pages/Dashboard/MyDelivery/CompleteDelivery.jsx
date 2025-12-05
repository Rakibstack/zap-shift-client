import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const CompleteDelivery = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: parcel = [] } = useQuery({
        queryKey: ['parcels', user?.email, 'Parcel_delivered'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user?.email}&deliveryStatus=Parcel_delivered `)
            return res.data
        }
    })
    const calculatePayout = (parcel) => {

        if (parcel.SenderDistrict === parcel.ReceiverDistrict) {
            return parcel.cost * 0.8
        }
        else{
            return parcel.cost * 0.6
        }

    }
    return (
        <div className="p-6">

            <h2 className="text-2xl font-semibold mb-5">
                Complete Delivery <span className='text-indigo-600'>({parcel.length})</span>
            </h2>

            <div className="overflow-x-auto bg-white rounded-lg shadow border">
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-100 text-left text-sm">
                        <tr>
                            <th className="px-4 py-3">#</th>
                            <th className="px-4 py-3">Parcel Name</th>
                            <th className="px-4 py-3">Pickup District</th>
                            <th className="px-4 py-3">createdAt</th>
                            <th className="px-4 py-3">Amount</th>
                            <th className="px-4 py-3">Payout</th>
                            <th className="px-4 text-center py-3">Action</th>
                        </tr>
                    </thead>

                    <tbody className="text-sm">
                        {parcel.map((p, i) => (
                            <tr key={p._id} className="border-t hover:bg-gray-50">
                                <td className="px-4 py-3">{i + 1}</td>
                                <td className="px-4 py-3">{p.ParcelName}</td>
                                <td className="px-4 py-3">{p.SenderDistrict}</td>
                                <td className="px-4 py-3">{p.createdAt}</td>
                                <td className="px-4 py-3">৳ {p.cost}</td>
                                <td className="px-4 py-3">৳ {calculatePayout(p)}</td>
                                <td className="px-4 text-center py-3">
                                    <button className='btn bg-primary text-black font-bold'>Cash Out</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default CompleteDelivery;