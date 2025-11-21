import React from 'react';
import { useForm } from 'react-hook-form';

const SendPercel = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const HandleSenderPercel = (data) => {

    }

    return (
        <div className='w-11/12 mx-auto py-8'>
            <div className='px-14 py-10 bg-white rounded-xl'>

                <h2 className="text-5xl font-bold text-[#03373D]">Send A Parcel</h2>
                <p className='text-[#03373D] font-extrabold pb-4 mt-10 border-b border-gray-200'>Enter your parcel details</p>

                <form onSubmit={handleSubmit(HandleSenderPercel)}>

                    <div className='mt-6'>
                        <label className="label mr-5">
                            <input type="radio" {...register('parcelType')} value='document' className="radio radio-primary" defaultChecked />
                            Document</label>

                        <label className="label">
                            <input type="radio" {...register('parcelType')} value='non-document' className="radio radio-primary" />
                            Non-Document</label>

                        <div className='grid gap-12 mt-6 grid-cols-1 md:grid-cols-2  border-b border-gray-300 pb-8'>

                            <div>
                                {/* Parcel Name field */}
                                <label className="label mb-1 text-[#000000]">Parcel Name</label>
                                <input type="text" {...register('ParcelName')} className="input  w-full" placeholder="Parcel Name" />
                            </div>

                            <div>
                                {/* Parcel Weight field */}
                                <label className="label mb-1 text-[#000000]">Parcel Weight (kg)</label>
                                <input type="text" {...register('ParcelWeight')} className="input   w-full" placeholder="Parcel Weight (kg)" />
                            </div>
                        </div>

                    </div>

                    <div className='mt-4 grid gap-12 grid-cols-1 md:grid-cols-2'>
                        <div>
                            {/* Sender Details */}
                            <h2 className='text-[#03373D] font-bold text-[1.1rem] mb-5'>Sender Details</h2>

                            <label className="label mb-1 text-[#000000]">Sender Name</label>
                            <input type="text" {...register('SenderName')} className="input mb-3 w-full" placeholder="Sender Name" />

                            <label className="label mb-1 text-[#000000]">Address</label>
                            <input type="text" {...register('Address')} className="input mb-3 w-full" placeholder="Address" />

                            <label className="label mb-1 text-[#000000]">Sender Phone No</label>
                            <input type="text" {...register('PhonNumber')} className="input mb-3  w-full" placeholder="Sender Phone No" />

                            <p className='mb-1 text-[#000000]'>Your District</p>
                            <select defaultValue="select Your District" className="select w-full mb-3">
                                <option disabled={true}>Dhaka</option>
                                <option>select Your District</option>
                                <option>Rangpur</option>
                                <option>Khulna</option>
                                <option>Bogura</option>
                            </select>

                            <label className="label mb-1 text-[#000000]">Pickup Instruction</label>
                            <input type='text' {...register('Pickup-Instruction')} className="input textarea mb-3  w-full" placeholder="Pickup Instruction" />


                        </div>
                        <div>
                            {/* Receiver Details */}
                             <h2 className='text-[#03373D] font-bold text-[1.1rem] mb-5'>Receiver Details</h2>

                            <label className="label mb-1 text-[#000000]">Receiver Name</label>
                            <input type="text" {...register('ReceiverName')} className="input mb-3 w-full" placeholder="Receiver Name" />

                            <label className="label mb-1 text-[#000000]">Receiver Address</label>
                            <input type="text" {...register('Receiver-Address')} className="input mb-3 w-full" placeholder="Receiver Address" />

                            <label className="label mb-1 text-[#000000]">Receiver Phone No</label>
                            <input type="text" {...register('Receiver-PhonNumber')} className="input mb-3  w-full" placeholder="Receiver Phone No" />

                            <p className='mb-1 text-[#000000]'>Receiver District</p>
                            <select defaultValue="select Your District" className="select w-full mb-3">
                                <option disabled={true}>Dhaka</option>
                                <option>select Your District</option>
                                <option>Rangpur</option>
                                <option>Khulna</option>
                                <option>Bogura</option>
                            </select>

                            <label className="label mb-1 text-[#000000]">Delivery  Instruction</label>
                            <input type='text' {...register('Delivery-Instruction')} className="input textarea mb-3  w-full" placeholder="Delivery Instruction" />
                        </div>

                    </div>
                    <p className='mt-8 mb-8'>* PickUp Time 4pm-7pm Approx.</p>
                    <input type="submit" className='px-12 font-medium py-2 bg-primary rounded-lg' value="Proceed to Confirm Booking"  />
                </form>
            </div>

        </div>
    );
};

export default SendPercel;