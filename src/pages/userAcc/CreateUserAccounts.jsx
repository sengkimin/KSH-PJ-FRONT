import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewUserAccountForm = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userRoleId, setUserRoleId] = useState(2);
    const [isActivated, setIsActivated] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        try {
            const response = await axios.post('http://localhost:3000/api/user_accounts', {
                email,
                username,
                password,
                user_role_id: parseInt(userRoleId),
                is_activated: isActivated,
                is_active: isActive
            }, {
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response);
            if (response.status === 201) {
                const newUserId = response.data.id;
                alert('User account created successfully!');
                navigate(`/user-account/${newUserId}`);
            } else {
                alert('Unexpected response status: ' + response.status);
            }
        } catch (error) {
            console.error('Error message:', error.message);
        }
    };

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">New User Account</h1>
            <div className="max-w-md  bg-white p-8 rounded-md shadow-md">

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            autoComplete="email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            autoComplete="username"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            autoComplete="new-password"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">User Role ID</label>
                        <input
                            type="number"
                            value={userRoleId}
                            onChange={(e) => setUserRoleId(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Is Activated</label>
                        <select
                            value={isActivated}
                            onChange={(e) => setIsActivated(e.target.value === 'true')}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        >
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Is Active</label>
                        <select
                            value={isActive}
                            onChange={(e) => setIsActive(e.target.value === 'true')}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        >
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={() => navigate('/user-account')}
                            className="py-2 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            onClick={() => navigate(`/user-account/${id}`)}
                            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default NewUserAccountForm;

