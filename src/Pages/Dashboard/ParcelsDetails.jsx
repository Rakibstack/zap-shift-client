import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ParcelsDetails = () => {

    const { id } = useParams()
    const axiosSecure = useAxiosSecure()

    const { data: parcel = [] } = useQuery({

        queryKey: ['parceldetails', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${id}`)
            return res.data
        }
    })
   

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Parcel Details</h2>


            {/* Sender + Receiver Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">


                {/* Sender */}
                <div className="bg-gray-100 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Sender Info</h3>
                    <div className="space-y-1 text-sm text-gray-700">
                        <p><span className="font-medium">Name:</span>{parcel.SenderName}</p>
                        <p><span className="font-medium">Phone:</span> {parcel.SenderPhonNumber}</p>
                        <p><span className="font-medium">Email:</span> {parcel.SenderEmail}</p>
                        <p><span className="font-medium">Region:</span>{parcel.SenderRegion}</p>
                        <p><span className="font-medium">Address:</span> {parcel.SenderDistrict}</p>
                    </div>
                </div>


                {/* Receiver */}
                <div className="bg-gray-100 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Receiver Info</h3>
                    <div className="space-y-1 text-sm text-gray-700">
                        <p><span className="font-medium">Name:</span>{parcel.ReceiverName}</p>
                        <p><span className="font-medium">Phone:</span> {parcel.ReceiverPhonNumber}</p>
                        <p><span className="font-medium">Email:</span> {parcel.ReceiverEmail}</p>
                        <p><span className="font-medium">Region:</span>{parcel.ReceiverRegion}</p>
                        <p><span className="font-medium">Address:</span>{parcel.ReceiverDistrict}</p>
                    </div>
                </div>
            </div>


            {/* Parcel Details */}
            <div className="bg-gray-100  rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Parcel Details</h3>

                  <div className="   gap-y-2 text-sm text-gray-700">
                    <p><span className="font-medium">Title:</span> {parcel.parcelType}</p>
                    <p><span className="font-medium">Type:</span> {parcel.ParcelName}</p>
                    <p><span className="font-medium">Weight:</span>{parcel.ParcelWeight} kg</p>
                    <p><span className="font-medium">Charge:</span> Tk {parcel.cost}</p>
                    <p><span className="font-medium">Status:</span> {parcel.paymentStatus ==='paid' ? 'paid' : 'Unpaid'}</p>
                    <p><span className="font-medium">Pickup Instruction:</span> {parcel.PickupInstruction}</p>
                    <p><span className="font-medium">Delivery Instruction:</span>{parcel.DeliveryInstruction}</p>
                    {/* <p><span className="font-medium">Tracking Number:</span> 25820</p>
                    <p><span className="font-medium">Pickup OTP:</span> 6345</p>
                    <p><span className="font-medium">Delivery OTP:</span> 5555</p> */}
                </div>
           
            </div>
        </div>
    );
};

export default ParcelsDetails;