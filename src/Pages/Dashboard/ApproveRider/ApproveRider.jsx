import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { BanknoteX, Check, X } from "lucide-react";
import Swal from 'sweetalert2';

const ApproveRider = () => {

    const axiossecure = useAxiosSecure();

    const { data: riders = [], refetch } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {

            const res = await axiossecure.get('/riders')
            return res.data
        }
    })
    const updateRiderStatus = (rider, status) => {

        const updateInfo = {
            status: status,
            email:rider.email
        }
        axiossecure.patch(`/riders/${rider._id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        title: "Confirm",
                        text: `${status === 'Approved' ? "Rider Has Been Approved" : "Rider Status is Rejected"}`,
                        icon: "success"
                    });
                }
            })
    }
    const HandleApproved = (rider) => {
        updateRiderStatus(rider, 'Approved')
    }
    const HandleReject = (rider) => {
        updateRiderStatus(rider, 'Rejected')
    }
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