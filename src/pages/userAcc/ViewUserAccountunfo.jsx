
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BoxInfo from '../../components/BoxInformation';
import Btn from '../../components/Buttons';
import { Link } from 'react-router-dom';
const ViewUserAccountinfo = () => {
    const [data, setData] = useState({});
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
                <Link to="/user-account"><Btn text="Back" /></Link>
                <Link to="/user-account/new"><Btn text="Create" type="btn-blue" /></Link>
                <Btn text="Delete" type="btn-delete" onClick={deleteBtn} />
            </div>
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

export default ViewUserAccountinfo;
