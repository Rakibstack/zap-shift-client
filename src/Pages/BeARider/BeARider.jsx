import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Agentimg from '../../assets/agent-pending.png'
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const BeARider = () => {
    const axiossecure = useAxiosSecure()

    const {register,
        handleSubmit,
        reset,
        // formState: {errors},
        control,
    } = useForm()

     const AllDistricts = useLoaderData();
    const DuplicateRegion = AllDistricts.map(c => c.region)
    const Regions = [... new Set(DuplicateRegion)]

     const SenderRegion = useWatch({ control, name: 'riderRegion' });

       const districtByRegions = (Region) => {

        const RegionDistrict = AllDistricts.filter(c => c.region === Region)
        const District = RegionDistrict.map(d => d.district)
        return District
    }

    const HandleRider = (data) => {
        
        axiossecure.post('/riders',data)
        .then(res => {
            reset()
            if(res.data.insertedId){
                   Swal.fire({
                    title: "Confirm",
                    text: "your Application has been submitted. we will reach out to you in 45 days.",
                    icon: "success"
                });
            }
            
        })
        
    }

    return (
        <div>
            <title>Be A Rider Page</title>
            <section className="bg-gray-50 py-20 px-6 md:px-16">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
                            Become a <span className="text-green-600">Rider</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                           Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time..
                        </p>


                        {/* Tell us about yourself Form */}
                              <h2 className='font-extrabold text-[1.8rem] text-secondary mt-10'>  Tell us about yourself</h2>
                        <form onSubmit={handleSubmit(HandleRider)} className="grid md:grid-cols-2 gap-4 mt-6">
                            {/* your Name Field */}
                            <input type="text" {...register('name',{required:true})} placeholder="Your Name" className="border p-3 rounded-xl w-full" />
                            {/* your age */}
                            <input type="number" {...register('age',{required:true})} placeholder="your age" className="border p-3 rounded-xl w-full" />
                            {/* your email */}
                            <input type="email" {...register('email',{required:true})} placeholder="your email" className="border p-3 rounded-xl w-full" />
                            {/* NID Number */}
                            <input type="number" {...register('nidNumber',{required:true})} placeholder="NID number" className="border p-3 rounded-xl w-full" />
                            {/* contact field */}
                            <input type="number" {...register('contact',{required:true})} placeholder="contact" className="border p-3 rounded-xl w-full" />

                               {/* Rider Regions */}
                            <select {...register("riderRegion",{required:true})} 
                            defaultValue='' className="border p-3 rounded-xl w-full">

                                <option value='' disabled >Select Your Regions</option>

                                {
                                    Regions.map((r, i) => <option value={r} key={i}>{r}</option>)
                                }
                            </select>  
                                {/* bike field */}
                            <input type="text" {...register('biketype',{required:true})} placeholder="Bike/Vehicle Type" className="border p-3 rounded-xl w-full" />

                                {/* Rider District */}
                              <select {...register('riderDistrict',{required:true})} defaultValue="" className="border p-3 rounded-xl w-full mb-3">
                                <option value='' disabled>select Your District</option>
                                {
                                    districtByRegions(SenderRegion).map((r, i) =>

                                        <option value={r} key={i}>{r}</option>)
                                }


                            </select>

                            <input type="text" {...register('location',{required:true})} placeholder="Area/Location" className="border p-3 rounded-xl w-full" />

                            <input type="text" {...register('license',{required:true})} placeholder="Driving License Num" className="border p-3 rounded-xl w-full" />

                            <textarea {...register('riderInstraction')} placeholder="Why do you want to join?" className="border p-3 rounded-xl w-full md:col-span-2" rows="3"></textarea>

                            <button className="md:col-span-2 bg-primary text-black py-3 rounded-xl shadow-lg font-bold transition">
                                Submit Application
                            </button>
                        </form>


                      
                    </motion.div>


                    {/* Image / Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center"
                    >
                        <img
                            src={Agentimg}
                            alt="Rider"
                            className="w-full max-w-sm rounded-2xl  object-cover"
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default BeARider;