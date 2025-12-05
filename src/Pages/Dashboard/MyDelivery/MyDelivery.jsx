import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const MyDelivery = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: parcel = [],refetch } = useQuery({
        queryKey: ['parcels', user?.email, 'rider_assigned'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user?.email}&deliveryStatus=rider_assigned `)
            return res.data
        }
    })
    const updateDeliveryStatus = (parcel,status) => {

        const updateStatus = {
            deliveryStatus:status,
            riderId:parcel.riderId,
            trackingId:parcel.trackingId
        }
        let message = `parcel status update with ${status.split('_').join(' ')}` 

        axiosSecure.patch(`/parcels/${parcel._id}/status`,updateStatus)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        title: "Confirm",
                        text: message,
                        icon: "success"
                    });
                }  
              })
    }

      const HandleReject = (parcel) => {

        axiosSecure.patch(`/parcels/${parcel._id}/reject`)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        title: "Confirm",
                        text: ` "Reject Parcel"`,
                        icon: "success"
                    });
                }  
              })
    }

    return (
        <div>

            <div className="p-6">
                <h2 className="text-2xl font-bold mb-5">My Delivery List</h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-3 border">#</th>
                                <th className="p-3 border">Parcel Name</th>
                                <th className="p-3 border">Receiver Name</th>
                                <th className="p-3 border">Parcel Type</th>
                                <th className="p-3 border">Delivery Address</th>
                                <th className="p-3 border text-center">Action</th>
                                <th className="p-3 border text-center">Others Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {parcel.map((item, index) => (
                                <tr key={item._id} className="hover:bg-gray-50">
                                    <td className="p-3 border">{index + 1}</td>
                                    <td className="p-3 border">{item.ParcelName}</td>
                                    <td className="p-3 border">{item.ReceiverName}</td>
                                    <td className="p-3 border">{item.parcelType}</td>
                                    <td className="p-3 border">{item.ReceiverAddress}</td>
                                   
                                    <td className="p-3 border text-center">
                                      {
                                        item.deliveryStatus === 'rider_assigned' ? <>
                                          <button
                                            onClick={() => updateDeliveryStatus(item,'delivery_ongoing')}
                                            className='px-3 py-1 mr-4 bg-primary text-black font-bold rounded-lg'>Accept</button>
                                        <button 
                                            onClick={() => HandleReject(item)}
                                        className='px-3 py-1 bg-[#E8333030] text-[#E83330] font-bold rounded-lg'>Reject</button>
                                        </>  : <span>Accepted</span>
                                      }
                                    </td>
                                    <td className='border p-3 text-center'>
                                       {
                                        item.deliveryStatus === "delivery_ongoing" ?   <>
                                        <button
                                            onClick={() => updateDeliveryStatus(item,'Parcel_Picked-up')}
                                            className='px-3 py-1 mr-4 bg-primary text-black font-bold rounded-lg'> Picked Up</button>
                                        </>  : ''
                                       }
                                         <button
                                            onClick={() => updateDeliveryStatus(item,'Parcel_delivered')}
                                            className='px-3 py-1  bg-primary text-black font-bold rounded-lg'>Delivery</button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyDelivery;