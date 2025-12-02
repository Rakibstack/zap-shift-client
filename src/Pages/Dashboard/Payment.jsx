import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Payment = () => {

    const {paymentId} = useParams()
    const axiossecure = useAxiosSecure()

    const {data : parcel =[]} = useQuery({
        queryKey: ['payment', paymentId],
        queryFn: async () => {
          const res = await axiossecure.get(`/parcels/${paymentId}`)
          return res.data;
        }
    })
    const HandlePay = async () => {

        const PaymentInfo = {
            cost:parcel.cost,
            ParcelName: parcel.ParcelName,
            senderEmail: parcel.SenderEmail,
            parcelId: parcel._id
        }
        const res = await  axiossecure.post('/create-checkout-session',PaymentInfo)
        // console.log(res);
        
        window.location.href = res.data.url;
        
    }
  
    return (
        <div className="flex justify-center py-10 px-4">
            <div className="max-w-2xl w-full">
                
                {/* HEADER */}
                <h2 className="text-3xl font-bold text-center mb-6">
                    Complete Your Payment
                </h2>

                {/* PAYMENT CARD */}
                <div className="card bg-base-100 shadow-xl p-6 rounded-2xl border border-base-200">

                    <h3 className="text-xl font-semibold mb-4">
                        Parcel Summary
                    </h3>

                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-500">Parcel Name:</span>
                            <span className="font-semibold">
                                {parcel.ParcelName}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-500">Receiver:</span>
                            <span className="font-semibold">
                                {parcel.ReceiverName}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-500">
                                Delivery Address:
                            </span>
                            <span className="font-semibold text-right">
                                {parcel.ReceiverAddress}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-gray-500">Weight:</span>
                            <span className="font-semibold">
                                {parcel.ParcelWeight} kg
                            </span>
                        </div>

                        <div className="flex justify-between text-lg pt-4 border-t">
                            <span className="font-semibold">Total Amount:</span>
                            <span className="text-primary font-bold text-xl">
                                ${parcel.cost}
                            </span>
                        </div>
                    </div>

                    {/* Pay Button */}
                    <button onClick={HandlePay} className="btn btn-primary text-black w-full mt-6 text-lg">
                        Pay Now
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Payment;