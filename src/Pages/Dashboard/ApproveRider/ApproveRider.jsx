import React, { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { BanknoteX, Check, ListChevronsDownUp, X } from "lucide-react";
import Swal from 'sweetalert2';

const ApproveRider = () => {

    const axiossecure = useAxiosSecure();
    const [details, setDetails] = useState([])
    const [isOpen, setIsOpen] = useState(false)



    const { data: riders = [], refetch } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {

            const res = await axiossecure.get('/riders')
            return res.data
        }
    })
    const HandleApproved = (rider) => {

        const updateInfo = {
            status: 'Approved',
            workStatus: 'available',
            email: rider.email
        }
        axiossecure.patch(`/riders/${rider._id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        title: "Confirm",
                        text: ` "Rider Has Been Approved"`,
                        icon: "success"
                    });
                }
            })
    }
    const HandleReject = (rider) => {

        const updateInfo = {
            status: 'Rejected',
            workStatus: '',
            email: rider.email
        }
        axiossecure.patch(`/riders/${rider._id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        title: "Confirm",
                        text: `Rider Status is Rejected`,
                        icon: "success"
                    });
                }
            })
    }
    // const HandleApproved = (rider) => {
    //     updateRiderStatus(rider, 'Approved')
    // }
    // const HandleReject = (rider) => {
    //     updateRiderStatus(rider, 'Rejected')
    // }
    const HandleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be Delete this Request! ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiossecure.delete(`/riders/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Rider Request has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }
    const HandleView = (id) => {

        axiossecure.get(`/ridersdetails/${id}`)
            .then(res => {
                // console.log(res.data);
                setDetails(res.data)
                setIsOpen(true)
            })


    }

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6">Approve Riders</h2>


            <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-xl overflow-hidden">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700 text-left">
                            <th className="p-4">#</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">Email</th>
                            <th className="p-4">Phone</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Work Status</th>
                            <th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>


                    <tbody>
                        {riders.map((rider, index) => (
                            <tr
                                key={rider._id}
                                className="border-b hover:bg-gray-50 transition duration-200"
                            >
                                <td className="p-4 font-medium">{index + 1}</td>
                                <td className="p-4">{rider.name}</td>
                                <td className="p-4">{rider.email}</td>
                                <td className="p-4">{rider.contact}</td>
                                <td className="p-4">
                                    <span className={`${rider.status === 'Approved' ? 'bg-green-400 text-white font-bold' : ' bg-orange-200 text-orange-600 font-bold'} rounded-full text-sm px-3 py-1`}>
                                        {rider.status}
                                    </span>
                                </td>
                                <td className="p-4">{rider.workStatus}</td>



                                <td className="p-4 flex justify-center space-x-2">
                                    <button onClick={() => HandleApproved(rider)}
                                        className="p-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
                                    >
                                        <Check size={18} />
                                    </button>
                                    <button
                                        onClick={() => HandleReject(rider)}
                                        className="p-2 bg-red-300 text-white rounded-xl hover:bg-red-600 transition"
                                    >
                                        <BanknoteX size={18} />
                                    </button>

                                    <button
                                        onClick={() => HandleDelete(rider._id)}
                                        className="p-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
                                    >
                                        <X size={18} />

                                    </button>
                                    {isOpen && (
                                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                                            <div className="bg-white p-6 rounded-xl shadow-xl w-[400px]">

                                                <h2 className="text-2xl font-bold mb-4">Rider Details</h2>

                                                <p><span className="font-bold">Name:</span> {details.name}</p>
                                                <p><span className="font-bold">Email:</span> {details.email}</p>
                                                <p><span className="font-bold">Age:</span> {details.age}</p>
                                                <p><span className="font-bold">Phone:</span> {details.contact}</p>
                                                <p><span className="font-bold">Address:</span> {details.location}</p>
                                                <p><span className="font-bold">Vehicle:</span> {details.biketype}</p>
                                                <p><span className="font-bold">NID Number:</span> {details.nidNumber}</p>
                                                <p><span className="font-bold">License:</span> {details.license}</p>

                                                <button
                                                    onClick={() => setIsOpen(false)}
                                                    className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg">
                                                    Close
                                                </button>

                                            </div>
                                        </div>
                                    )}

                                    <button
                                        onClick={() => {
                                            HandleView(rider._id)
                                        }}
                                        className="p-2 bg-[#94C6CB30] text-black rounded-xl  transition"
                                    >
                                        <ListChevronsDownUp size={18} />

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

export default ApproveRider;