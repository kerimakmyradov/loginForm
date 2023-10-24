import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../utils/consts';
import Spinner from '../components/Spinner';


const UserDetails = () => {

    const[users, setUsers]=useState([])
    const[loading, setLoading]=useState(true)

    const getUsers=async()=>{
        try {
            const response = await axios.get(url + 'users'); // Make the GET request using Axios
            setUsers(response.data.users); // Update state with the response data
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    useEffect(()=>{
        setTimeout(() => {
            getUsers()
            setLoading(false)
        }, 2000);
    },[])

    if(loading){
        return <Spinner/>
    }

    return (
        <div className='container mt-5'>
            <div className='text-center font-bold text-3xl m-5'>
                <h1>Kullanıcı Detayları</h1>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {users.map((user) => 
                    <div key={user.id} className='bg-gray-300/60 rounded-lg cursor-pointer flex flex-wrap justify-center items-center'>
                        <div className='w-[150px]'>
                            <img src={user.image} alt=''/>
                        </div>
                        <div className='flex justify-between items-center pt-2'>
                            <div className='font-bold pr-2'>{user.firstName}</div>
                            <div className='font-bold pr-2'>{user.lastName}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserDetails;