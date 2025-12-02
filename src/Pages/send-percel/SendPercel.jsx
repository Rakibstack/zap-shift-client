import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const SendPercel = () => {
    const { register, handleSubmit, control,
        //  formState: { errors }
         } = useForm();
    const AllDistricts = useLoaderData();
    const DuplicateRegion = AllDistricts.map(c => c.region)
    const Regions = [... new Set(DuplicateRegion)]
    const axiossecure = useAxiosSecure()
    const navigate = useNavigate()
    const {user} = useAuth()

    const SenderRegion = useWatch({ control, name: 'SenderRegion' });
    const ReceiverRegion = useWatch({ control, name: 'ReceiverRegion' });

    const districtByRegions = (Region) => {

        const RegionDistrict = AllDistricts.filter(c => c.region === Region)
        const District = RegionDistrict.map(d => d.district)
        return District
    }

    const HandleSenderPercel = (data) => {
        console.log(data);
        const isDocument = data.parcelType === 'document'
        const isSameDistrict = data.SenderDistrict === data.ReceiverDistrict;
        const parcelWeight = parseFloat(data.ParcelWeight)

        let cost = 0;

        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;
        } else {
            if (parcelWeight < 3) {
                cost = isSameDistrict ? 110 : 150;
            }
            else {
                const minCharge = isSameDistrict ? 110 : 150;
                const extraWeight = parcelWeight - 3;
                const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
                cost = minCharge + extraCharge
            }
        }
         data.cost = cost ;

        Swal.fire({
            title: "Agree With the cost?",
            text:  `You Have To Pay ${cost} Taka!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "confirm and continue payment!"
        }).then((result) => {
            if (result.isConfirmed) {

            axiossecure.post('/parcels',data)
            .then(res => {
                navigate('/dashboard/myParcels')
                if(res.data.insertedId){
                     Swal.fire({
                    title: "Confirm",
                    text: "Parcel Has Created. Please Pay",
                    icon: "success"
                });   
                  }
                
            })
               
            }
        });

    }

    return (

        <div className='w-11/12 mx-auto py-8'>
            <title>Zap-Shift Send A Parcel</title>
            <div className='px-14 py-10 bg-white rounded-xl'>

                <h2 className="text-5xl font-bold text-[#03373D]">Send A Parcel</h2>
                <p className='text-[#03373D] font-extrabold pb-4 mt-10 border-b border-gray-200'>Enter your parcel details</p>

                <form onSubmit={handleSubmit(HandleSenderPercel)}>

                    <div className='mt-6'>
                        <label className="label mr-6">
                            <input type="radio" {...register('parcelType')} value='document' className="radio radio-primary" defaultChecked />
                            Document</label>

                        <label className="label">
                            <input type="radio" {...register('parcelType')} value='non-document' className="radio radio-primary" />
                            Non-Document</label>

                        <div className='grid gap-12 mt-6 grid-cols-1 md:grid-cols-2  border-b border-gray-300 pb-8'>

                            <div>
                                {/* Parcel Name field */}
                                <label className="label mb-1 text-[#000000]">Parcel Name</label>
                                <input type="text" {...register('ParcelName',{required:true})} className="input  w-full" placeholder="Parcel Name" />
                            </div>

                            <div>
                                {/* Parcel Weight field */}
                                <label className="label mb-1 text-[#000000]">Parcel Weight (kg)</label>
                                <input type="number" {...register('ParcelWeight',{required:true})} className="input   w-full" placeholder="Parcel Weight (kg)" />
                            </div>
                        </div>

                    </div>

                    <div className='mt-4 grid gap-12 grid-cols-1 md:grid-cols-2'>
                        <div>
                            {/* Sender Details */}
                            <h2 className='text-[#03373D] font-bold text-[1.1rem] mb-5'>Sender Details</h2>

                            <label className="label mb-1 text-[#000000]">Sender Name</label>
                            <input type="text" {...register('SenderName',{required:true})}
                            defaultValue={user.displayName}
                             className="input mb-3 w-full" placeholder="Sender Name" />

                            <label className="label mb-1 text-[#000000]">Sender Email</label>
                             
                            <input type="email" {...register('SenderEmail',{required:true})}
                            defaultValue={user.email}
                            className="input mb-3 w-full" placeholder="Sender Email" />

                            <label className="label mb-1 text-[#000000]">Address</label>
                            <input type="text" {...register('SenderAddress',{required:true})} className="input mb-3 w-full" placeholder="Address" />

                            <label className="label mb-1 text-[#000000]">Sender Phone No</label>
                            <input type="number" {...register('SenderPhonNumber',{required:true})} className="input mb-3  w-full" placeholder="Sender Phone No" />

                            {/* sender Regions */}
                            <p className='mb-1 text-[#000000]'>Sender Regions</p>
                            <select {...register("SenderRegion")} defaultValue="" className="select w-full mb-3">

                                <option value='' disabled>Select Your Regions</option>

                                {
                                    Regions.map((r, i) => <option value={r} key={i}>{r}</option>)
                                }
                            </select>

                            {/* Sender District */}
                            <p className='mb-1 text-[#000000]'>Sender District</p>
                            <select {...register('SenderDistrict')} defaultValue="" className="select w-full mb-3">
                                <option value='' disabled>select Your District</option>
                                {
                                    districtByRegions(SenderRegion).map((r, i) =>

                                        <option value={r} key={i}>{r}</option>)
                                }


                            </select>

                            <label className="label mb-1 text-[#000000]">Pickup Instruction</label>
                            <input type='text' {...register('PickupInstruction')} className="input textarea mb-3  w-full" placeholder="Pickup Instruction" />


                        </div>

                        <div>
                            {/* Receiver Details */}
                            <h2 className='text-[#03373D] font-bold text-[1.1rem] mb-5'>Receiver Details</h2>

                            <label className="label mb-1 text-[#000000]">Receiver Name</label>
                            <input type="text" {...register('ReceiverName',{required:true})} className="input mb-3 w-full" placeholder="Receiver Name" />

                            <label className="label mb-1 text-[#000000]">Receiver Email</label>
                            <input type="email" {...register('ReceiverEmail',{required:true})} className="input mb-3 w-full" placeholder="Receiver Email" />

                            <label className="label mb-1 text-[#000000]">Receiver Address</label>
                            <input type="text" {...register('ReceiverAddress',{required:true})} className="input mb-3 w-full" placeholder="Receiver Address" />

                            <label className="label mb-1 text-[#000000]">Receiver Phone No</label>
                            <input type="number" {...register('ReceiverPhonNumber',{required:true})} className="input mb-3  w-full" placeholder="Receiver Phone No" />

                            {/* Receiver Regions */}
                            <p className='mb-1 text-[#000000]'>Receiver Regions</p>
                            <select {...register("ReceiverRegion")} defaultValue="" className="select w-full mb-3">

                                <option value='' disabled >Select Your Regions</option>

                                {
                                    Regions.map((r, i) => <option value={r} key={i}>{r}</option>)
                                }
                            </select>

                            {/* Receiver District */}
                            <p className='mb-1 text-[#000000]'>Receiver District</p>
                            <select {...register("ReceiverDistrict")} defaultValue="" className="select w-full mb-3">

                                <option value='' disabled >Select Your District</option>

                                {
                                    districtByRegions(ReceiverRegion).map((r, i) => <option value={r} key={i}>{r}</option>)
                                }
                            </select>

                            <label className="label mb-1 text-[#000000]">Delivery  Instruction</label>
                            <input type='text' {...register('DeliveryInstruction')} className="input textarea mb-3  w-full" placeholder="Delivery Instruction" />
                        </div>

                    </div>
                    <p className='mt-8 mb-8'>* PickUp Time 4pm-7pm Approx.</p>
                    <input type="submit" className='px-12 font-medium py-2 bg-primary rounded-lg' value="Proceed to Confirm Booking" />
                </form>
            </div>

        </div>
    );
};

export default SendPercel;