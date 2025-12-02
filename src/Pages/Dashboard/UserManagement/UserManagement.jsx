import React, { useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { ShieldCheck, ShieldX, Trash2, UserPlus } from 'lucide-react';
import Swal from 'sweetalert2';

const UserManagement = () => {

    const axiosSecure = useAxiosSecure()
    const [searchText, setSearchText] = useState('')

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users', searchText],
        queryFn: async () => {

            const res = await axiosSecure.get(`/users?searchText=${searchText}`)
            return res.data
        }
    })
    const HandleAdmin = (user) => {

        const updateAdminInfo = {
            role: 'Admin'
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to Added as an Admin!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I Want!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/${user._id}`, updateAdminInfo)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch()
                            Swal.fire({
                                title: "confirm it!",
                                text: `${user.displayName} Mark As An Admin.`,
                                icon: "success"
                            });

                        }
                    })

            }
        });


    }
    const HandleRemoveAdmin = (user) => {

        const updateAdminInfo = {
            role: 'user'
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to Removed to an Admin!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I Want!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/${user._id}`, updateAdminInfo)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            refetch()
                            Swal.fire({
                                title: "confirm it!",
                                text: `${user.displayName} Mark As An User`,
                                icon: "success"
                            });

                        }
                    })

            }
        });


    }
    const HandleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be Delete this User! ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your User Request has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }
    return (
        <div className="p-6">

            <div className="join flex justify-end py-4">
                <div>
                    <label className="input validator join-item">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                        </svg>
                        <input onChange={(e) => setSearchText(e.target.value)} type='search' placeholder="Search User" required />
                    </label>

                </div>
                <button className="btn btn-neutral join-item">Search</button>
            </div>
            {/* <h2 className="text-2xl font-bold mb-5">Users: {users.length}</h2> */}
            <div className="shadow-xl rounded-2xl border">
                <div className="overflow-x-auto p-0">
                    <table className="w-full border-collapse text-left">
                        <thead className="bg-gray-100 border-b">
                            <tr>
                                <th className="p-4">#</th>
                                <th className="p-4">Name</th>
                                <th className="p-4">Email</th>
                                <th className="p-4">Photo</th>
                                <th className="p-4">Role</th>
                                <th className="p-4">Admin</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((user, i) => (
                                <tr key={user._id} className="border-b hover:bg-gray-50 transition">
                                    <td className="p-4">{i + 1}</td>
                                    <td className="p-4 font-medium">{user.displayName}</td>
                                    <td className="p-4">{user.Email}</td>
                                    <td className="p-4"><img src={user.photoURL} alt={user.name} className="w-12 h-12 rounded-full object-cover" /></td>
                                    <td className='p-4'>
                                        <span className={`${user.role === 'Admin' ? 'bg-green-400 text-white font-bold' : ' bg-orange-200 text-black font-bold'} rounded-full text-sm px-3 py-1`}>{user.role}

                                        </span>
                                    </td>
                                    <td className="p-4 ">{
                                        user.role === 'Admin' ? <button className=' text-green-500' onClick={() => HandleRemoveAdmin(user)}><ShieldX size={25} /> </button> : <button
                                            onClick={() => HandleAdmin(user)}
                                        ><ShieldCheck size={25} /></button>
                                    }</td>
                                    <td className="p-4 text-right flex justify-end gap-2">
                                        <button 
                                        onClick={() => HandleAdmin(user)}
                                        className="border px-3 py-1 rounded"><UserPlus size={18} /> </button>
                                        <button
                                            onClick={() => HandleDelete(user._id)}
                                            className="border px-3 py-1 rounded"><Trash2 size={18} /></button>
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

export default UserManagement;