import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import BoxInfo from '../../components/BoxInfo';

const View = () => {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const { id } = useParams();
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/books/${id}`, {
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'Authorization': `Bearer ${token}`,
                    },
                });
                setData(response.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);


    const handleDelete = async () => {
        const userConfirmed = window.confirm("Would you like to delete?");
        if (userConfirmed) {
            try {
                await axios.delete(`http://localhost:3000/api/books/${id}`, {
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8',
                        'Authorization': `Bearer ${token}`,
                    },
                });
              
                navigate('/book-catalog');
            } catch (error) {
                setError(error.message);
            }
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="relative p-4">
            <h1>Book Data</h1>
            <div className="absolute top-0 flex space-x-4">
                <button 
                    onClick={() => navigate('/book-catalog')} 
                    className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-700"
                >
                    Cancel
                </button>
                <button 
                 
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                >
                    Update
                </button>
                <button 
                    onClick={handleDelete} 
                    className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-700"
                >
                    Delete
                </button>
            </div>
            <table className='w-full bg-white border-gray-500 border rounded-2xl overflow-hidden mt-12'>
                <tbody>
                    <BoxInfo label="ISBN" value={data.isbn} />
                    <BoxInfo label="Title" value={data.title} />
                    <BoxInfo label="Authors" value={data.authors} />
                    <BoxInfo label="Publisher" value={data.publisher} />
                    <BoxInfo label="Publication Year" value={data.publication_year} />
                    <BoxInfo label="Edition" value={data.edition} />
                    <BoxInfo label="Genre" value={data.genre} />
                    <BoxInfo label="Language" value={data.language} />
                    <BoxInfo label="Number Of Page" value={data.number_of_page} />
                    <BoxInfo label="Shelf Location" value={data.shelf_location} />
                    <BoxInfo label="Description" value={data.description} />
                </tbody>
            </table>
        </div>
    );
};

export default View;
