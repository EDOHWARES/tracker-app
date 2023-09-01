import React from 'react';
import deskBg from "../assets/pattern-bg-desktop.png";
import {AiFillCaretRight} from "react-icons/ai";


const SearchSect = (props) => {


  return (
    <div className='h-auto'>
      <div 
      style={{backgroundImage: `url(${deskBg})`}} 
      className='relative h-auto w-full px-4 py-11 bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center'>
        <form onSubmit={props.handleForm} className='mb-10 flex flex-col items-center justify-center space-y-4'>
            <label htmlFor='ipAddress' className='text-xl md:text-4xl text-white font-bold'>IP ADDRESS TRACKER</label>
            <div className='flex items-center w-full'>
                <input 
                type="text" 
                placeholder='Search for any IP address or domain...' 
                className='py-2 indent-4 border-none outline-none h-10 rounded-l-md w-[80%] md:w-[30rem]' 
                name={"ipAddress"}
                id="ipaddress"
                value={props.ipAddress}
                onChange={(e) => props.setIpAddress(e.target.value)}
                required
                />
                <button className='bg-gray-900 py-2 border-none outline-none h-10 px-3 rounded-r-md hover:bg-gray-800 duration-500'>
                    <AiFillCaretRight className='fill-white text-2xl' />
                </button>
            </div>
        </form>
        <div className='mb-[-8rem]' style={{zIndex: 1000}}>
        <div className='flex items-center justify-center'>
            <ul className='flex md:flex-row gap-8 items-start justify-center md:gap-16 flex-wrap bg-white shadow-xl px-8 py-10 rounded-md w-[80%] md:w-auto'>
                <li className='text-center'>
                    <small className='text-blue-950'>IP ADDRESS</small>
                    <p className='font-bold text-gray-600 md:text-xl'>{props.ip}</p>
                </li>
                <li className='text-center'>
                    <small className='text-blue-950'>LOCATION</small>
                    <p className='font-bold text-gray-600 md:text-xl'>{props.locationCountry}, {props.locationRegion}</p>
                </li>
                <li className='text-center'>
                    <small className='text-blue-950'>TIMEZONE</small>
                    <p className='font-bold text-gray-600 md:text-xl'>UTC{props.timezone}</p>
                </li>
                <li className='text-center'>
                    <small className='text-blue-950'>ISP</small>
                    <p className='font-bold text-gray-600 md:text-xl'>{props.isp}</p>
                </li>
            </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SearchSect
