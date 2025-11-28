import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyParcel = () => {
    const { user } = useAuth()
    const axiossecure = useAxiosSecure()

    const { data: parcels = [] ,refetch } = useQuery({
        queryKey: ['my-parcels', user?.email],
        queryFn: async () => {
            const res = await axiossecure.get(`/parcels?email=${user.email}`)
            return res.data;
        }
    })
    const HandleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be Delete this Parcel! ", 
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {             
               axiossecure.delete(`/parcels/${id}`)
                .then(res => {
                if (res.data.deletedCount) {
                     refetch()
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your Parcel Request has been deleted.",
                    icon: "success"
                }); 
                }
            })   
          }
        });   

    }

    return (

        <div className="p-10">
            <title>Zap-Shift Dashboard</title>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
                📦 My-Parcel Overview
            </h2>

            <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
                <table className="table w-full">
                    {/* Head */}
                    <thead className="bg-gray-100 text-gray-700 text-sm">
                        <tr>
                            <th className="font-semibold">Parcel No</th>
                            <th className="font-semibold">Parcel Name</th>
                            <th className="font-semibold">Customer</th>
                            <th className="font-semibold">Phone</th>
                            <th className="font-semibold">Payment</th>
                            <th className="font-semibold">Delivery Status</th>
                            <th className="font-semibold">Amount</th>
                            <th className="font-semibold">Date</th>
                            <th className="font-semibold text-center">Action</th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody>
                        {parcels.map((p, i) => (
                            <tr key={i} className="hover:bg-gray-50 transition">
                                <td className="font-semibold text-gray-800">{i + 1}</td>
                                <td>{p.ParcelName}</td>
                                <td>{p.SenderName}</td>
                                <td>{p.SenderPhonNumber}</td>
                                <td>
                                    {p.paymentStatus === 'paid' ?
                                    <span className='text-green-400 font-medium'>Paid</span>
                                    : <Link to={`/dashboard/payment/${p._id}`}>
                                    
                                      <button className='px-4 font-semibold py-1 bg-primary text-black rounded-lg text-sm' >Pay</button>
                                    </Link>}
                                </td>
                                <td>
                                    <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600 font-semibold">
                                        {p.status}
                                    </span>
                                </td>
                                <td className="font-semibold">{p.cost}</td>
                                <td>{p.createdAt}</td>
                                <td className="text-center flex justify-center items-center p-5 ">
                                   
                                    <Link to={`/dashboard/parcelDetails/${p._id}`}>
                                    <button className="px-3 py-1 mx-3 font-semibold bg-[#94C6CB40] text-black rounded-lg text-sm">
                                        View
                                    </button>
                                    </Link>
                                    <button onClick={() => HandleDelete(p._id)} className="px-3 py-1  font-semibold bg-[#E8333020] text-black rounded-lg text-sm">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyParcel;