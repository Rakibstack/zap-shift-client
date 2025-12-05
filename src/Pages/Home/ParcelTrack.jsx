import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxios from '../../Hooks/useAxios';
import Loading from '../../Components/Loading';

const ParcelTrack = () => {

    const { trackingId } = useParams();
    const axiosIntercept = useAxios();

    const { data: trackingData = [], isLoading } = useQuery({
        queryKey: ['tracking', trackingId],
        queryFn: async () => {
            const res = await axiosIntercept.get(`/tracking/${trackingId}/logs`);
            return res.data;
        }
    });

    if (isLoading){
        return <Loading></Loading>
    }

    return (
        <div className="max-w-3xl mx-auto p-6">

            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center tracking-wide">📦 Parcel Tracking</h2>
                <p className="text-center opacity-90 text-sm mt-1">
                    Tracking ID: <span className="font-semibold">{trackingId}</span>
                </p>
            </div>

            {/* Timeline */}
            <div className="mt-6 bg-white shadow-md rounded-lg p-5">
                <h3 className="text-xl font-semibold mb-4">Tracking Progress</h3>

                {trackingData.length === 0 ? (
                    <p className="text-center text-gray-500 py-4">No tracking updates found</p>
                ) : (

                    <div className="relative border-l  border-gray-300 pl-6">
                        {trackingData.map((step, i) => {
                            const isLast = i === trackingData.length - 1; // last = current status
                            return (
                                <div key={i} className="mb-8 relative">

                                    {/* Dot */}
                                    <div className={`w-4 h-4 absolute -left-8 rounded-full border-2 
                                        ${isLast ? "bg-blue-600 border-blue-500 animate-pulse" : "bg-green-500 border-green-500"}
                                    `}></div>

                                    <p className="font-medium text-gray-800">{step.details}</p>
                                    
                                    <p className="text-gray-500 text-sm">
                                        {new Date(step.createdAt).toLocaleString()}
                                    </p>

                                </div>
                            );
                        })}
                    </div>
                )}

            </div>

        </div>
    );
};

export default ParcelTrack;
