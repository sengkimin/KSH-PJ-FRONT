

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BoxInfo from '../../components/BoxInfo';
import DeleteBtn from '../../components/DeleteBtn';
import AddBtn from '../../components/AddBtn';
import BackBtn from '../../components/BackBtn';
import { Link } from 'react-router-dom';

const View = () => {
    const [data, setData] = useState({});
    // const [error, setError] = useState(null); 
    const { id } = useParams();
    const token = localStorage.getItem("token");
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/user_accounts/${id}`, {
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        Authorization: `Bearer ${token}`,
                    },
                });
                setData(response.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, [id, token]);

    const deleteBtn = async () => {
        const userConfirmed = window.confirm("Would you like to delete?");
        if (userConfirmed) {
            try {
                await axios.delete(`http://localhost:3000/api/user_accounts/${id}`, {
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        Authorization: `Bearer ${token}`,
                    },
                });

                navigate('/user-account');
            } catch (error) {
                setError(error.message);
            }
        }
    };

    return (
        <div>
            <h1 className='font-bold text-xl'>User Data</h1>
            <div className='flex gap-2'>
                <Link to="/user-account"><BackBtn /></Link>
                <AddBtn />
                <DeleteBtn onClick={deleteBtn} />
            </div>

            {/* {error && <div className="error">{error}</div>}   */}

            <table className='w-full bg-white border-gray-500 border rounded-2xl overflow-hidden'>
                <tbody>
                    <BoxInfo label="ID" value={data.id} />
                    <BoxInfo label="Username" value={data.username} />
                    <BoxInfo label="Email" value={data.email} />
                    <BoxInfo label="Role" value={data.user_role?.user_role_name || 'N/A'} />
                    <BoxInfo label="Is Active" value={data.is_activated ? 'yes' : 'no'} />
                    <BoxInfo label="Is Activated" value={data.is_active ? 'yes' : 'no'} />
                </tbody>
            </table>
        </div>
    );
};

export default View;
