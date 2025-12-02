import React, { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { UserCog } from 'lucide-react';

const AssignRiders = () => {

    const axiosSecure = useAxiosSecure()
    const [open, setOpen] = useState(false);
    const [selectedParcel, setSelectedParcel] = useState(null)

    const { data: parcels = [] } = useQuery({
        queryKey: ['parcels', 'pending-pickup'],
        queryFn: async () => {
            const res = await axiosSecure.get('/parcels?deliveryStatus=pending-pickup')
            return res.data
        }
    })
    console.log(selectedParcel);

    const { data: riders = [] } = useQuery({
        queryKey: ['rider', selectedParcel?.SenderDistrict, 'available'],
        enabled: !!selectedParcel,
        queryFn: async () => {

            const res = await axiosSecure.get(`/riders?status=Approved&district=${selectedParcel?.SenderDistrict}&workStatus=available`)
            return res.data
        }
    })

    const HandleModal = (p) => {

        setSelectedParcel(p)
        setOpen(true)
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-5">Assign Riders</h2>
            <div className="shadow-xl rounded-2xl border">
                <div className="p-0 overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-100 border-b text-gray-700">
                            <tr>
                                <th className="p-4">#</th>
                                <th className="p-4">Parcel Name</th>
                                <th className="p-4">Amount</th>
                                <th className="p-4">Sender District</th>
                                <th className="p-4">Receiver District</th>
                                <th className="p-4">CreatedAt</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                parcels.map((p, i) => (
                                    <tr key={p._id} className="border-b hover:bg-gray-50 transition-all">
                                        <td className="p-4">{i + 1}</td>
                                        <td className="p-4 font-medium">{p.ParcelName}</td>
                                        <td className="p-4 font-medium">{p.cost}</td>
                                        <td className="p-4 font-medium">{p.SenderDistrict}</td>
                                        <td className="p-4">{p.ReceiverAddress}</td>
                                        <td className="p-4">{p.createdAt}</td>
                                        <td className="p-4">
                                            <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-600">
                                                {p.deliveryStatus}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <button onClick={() => {
                                                HandleModal(p)

                                            }} class="bg-gray-900 text-white px-4 py-2 rounded-xl">
                                                <UserCog size={18} className="mr-2" /> Assign
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>


                    </table>
                </div>
            </div>

            {open && (
                <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">

                        <h2 className="text-xl font-semibold mb-4">Modal Title</h2>

                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Rider Name</th>
                                        <th>Rider Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {riders.map((raider, i) =>
                                        <tr className="bg-base-200">
                                            <th>{i + 1}</th>
                                            <td>{raider.name}</td>
                                            <td>{raider.email}</td>
                                            <td>
                                                <button className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-900">
                                                    Confirm
                                                </button></td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                onClick={() => setOpen(false)}
                                className="px-4 py-2 rounded-lg border hover:bg-gray-100"
                            >
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>


    );
};

export default AssignRiders;