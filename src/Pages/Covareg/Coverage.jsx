import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const bangladeshLatLon = [23.6850, 90.3563];
    const serviceCenters = useLoaderData();
    const mapref = useRef(null);

    const HandleSubmit = (e) => {
        e.preventDefault()
        const location = e.target.location.value;
        const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()))
        if(district){
            const coord = [district.latitude, district.longitude]
            mapref.current.flyTo(coord,10)

        }

    }
    

    return (
        <div className='py-16 mx-auto w-10/12'>
            <div className='p-6 bg-white rounded-2xl'>
                <div>
                    <h2 className='text-[#03373D] font-extrabold text-[3.2rem] mb-3'>We are available in 64 districts</h2>
                   <form onSubmit={HandleSubmit}>
                     <label className="input  focus-within:border-primary  relative w-120 rounded-4xl">
                        <svg className="h-[1em]   opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" name='location' className="grow focus:outline-none focus:ring-0 " placeholder="Search" />
                        <button className='px-6 py-2.5 absolute -right-0   rounded-3xl font-medium bg-primary'>Search</button>

                    </label>
                   </form>
                </div>

                <div className='mt-14 w-full h-[780px] '>
                    <h2 className='text-[#03373D] font-bold text-2xl mb-4'>We deliver almost all over Bangladesh</h2>
                    <MapContainer
                        center={bangladeshLatLon}
                        zoom={8}
                        scrollWheelZoom={false}
                        className='h-[720px]'
                        ref={mapref}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                      {
                        serviceCenters.map((center,index) => (
                             <Marker key={index} position={[center.latitude,center.longitude]}>
                            <Popup>
                                {center.district} <br /> {center.covered_area.join(', ')}
                            </Popup>
                        </Marker>
                        ))
                      }
                    </MapContainer>

                </div>
            </div>

        </div>
    );
};

export default Coverage;