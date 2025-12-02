import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router';

const PaymentHistory = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { data: mypayment = [] } = useQuery({
        queryKey: ['mypayment', user?.email],
        queryFn: async () => {

            const res = await axiosSecure.get(`/payment?email=${user?.email}`)
            console.log(res);
            
            return res.data
        }
    })

  console.log(mypayment);
  

    return (

        <div className="max-w-6xl mx-auto p-6">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold">Payment History</h3>
                    <p className="text-sm text-gray-500">Recent transactions</p>
                </div>
            </div>


            <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="min-w-full table-fixed">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Parcel Info</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Recipient Info</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">TransactionId ID</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Payment Info</th>
                            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">Action</th>
                        </tr>
                    </thead>


                    <tbody>
                        {mypayment.map((p, i) => (
                            <tr key={i} className="border-t even:bg-gray-50">
                                <td className="px-4 py-5 text-sm text-gray-700">{p.parcelName}</td>


                                <td className="px-4 py-5 text-sm text-gray-700">
                                    <p className="text-gray-500 text-sm">{p.customerEmail}</p>
                                </td>


                                <td className="px-4 py-5 text-sm text-gray-700">{p.transactionId}</td>
                                <td className="px-4 py-5 text-sm text-gray-700">{p.amount}(Paid)</td>

                             <Link to={`/dashboard/parcelDetails/${p.parcelId}`}>
                                <td className="px-4 py-5 text-center">
                                    <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm font-medium">View</button>
                                </td></Link>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;