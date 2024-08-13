import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import Btn from '../../components/Buttons';
import { Link } from 'react-router-dom';
function UserAccountListPage() {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const token = localStorage.getItem("token");
    useEffect(() => {
        const fetchUsers = async () => {
            if (!token) {
                console.error("Token is missing");
                return;
            }
            try {
                const response = await axios.get('http://localhost:3000/api/user_accounts', {
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUsers(response.data);
            } catch (err) {
                console.error("Error fetching users", err);
            }
        };
        fetchUsers();
    }, []);
    const lastUser = currentPage * itemsPerPage;
    const firstUser = lastUser - itemsPerPage;
    const currentUser = users.slice(firstUser, lastUser);
    const totalPage = parseInt(users.length / itemsPerPage)+1;
    function nextPage() {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
    }
    function handlePrev() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    return (
        <div>
            <div className="container mx-auto p-4 ">
                <h1 className="text-2xl font-bold mb-4">User Accounts</h1>
                <Link to="new"><Btn text="Create" kind="secondary" type="btn-blue" /></Link>

                <table className='w-full bg-white   border-gray-500 border rounded-2xl overflow-hidden '>

                    <thead >
                        <tr className="w-full bg-gray-300 border-b ">
                            <th className="py-4 px-4 border-r text-left">Action</th>
                            <th className="py-4 px-4 border-r text-left">ID</th>
                            <th className="py-4 px-4 border-r text-left">Name</th>
                            <th className="py-4 px-4 border-r text-left">Email</th>
                            <th className="py-4 px-4 border-r text-left">User Role</th>
                            <th className="py-4 px-4 border-r text-left">Activated</th>
                            <th className="py-4 px-4 border-r text-left">Active</th>

                        </tr>
                    </thead>
                    <tbody >
                        {currentUser.map((user) => (

                            <tr key={user.id} >
                                <td className="py-4 px-4 border-b"> <Link to={`/user-account/${user.id}`} className='px-8 py-2 bg-blue-400 text-white rounded'>view</Link></td>
                                <td className="py-4 px-4 border-b">{user.id}</td>
                                <td className="py-4 px-4 border-b">{user.username}</td>
                                <td className="py-4 px-4 border-b">{user.email}</td>
                                <td className="py-4 px-4 border-b">{user.user_role.user_role_name}</td>
                                <td className="py-4 px-4 border-b">{user.is_activated ? 'yes' : 'no'}</td>
                                <td className="py-4 px-4 border-b">{user.is_active ? 'yes' : 'no'}</td>

                            </tr>

                        ))}
                    </tbody>

                </table>
                <div className='flex justify-end mt-4'>
                    <button onClick={handlePrev} disabled={currentPage === 1} className={`px-4 py-2 rounded   ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`} > Prev</button>
                    <span className='p-4'> {currentPage} </span>
                    <button onClick={nextPage } disabled={currentPage === totalPage} className={`px-4 py-2 rounded ${currentPage === totalPage ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}>Next </button>
                </div>
            </div>
        </div>
    );
}

export default UserAccountListPage;



