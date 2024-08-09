import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/ButtonBookcatalog.jsx'
import Viewbox from '../../components/ViewboxBookcatalog';

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
    }, [id,token]);


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
        <div className="p-4">

          <h1 className='text-3xl font-bold '>Book Catalog Information</h1>
            <div className=" top-0 space-x-4 mt-4">
       
                <Button    onClick={() => navigate('/book-catalog')}  text="Back" />
        
                <Button text="Update" kind="Button-blue"/>
           
                <Button  onClick={handleDelete} text="Delete" kind='Button-red'/>
            </div>
            <table className='w-full bg-white border-gray-500 border rounded-2xl overflow-hidden mt-6'>
                <tbody>
                    <Viewbox label="ISBN" value={data.isbn} />
                    <Viewbox label="Title" value={data.title} />
                    <Viewbox label="Authors" value={data.authors} />
                    <Viewbox label="Publisher" value={data.publisher} />
                    <Viewbox label="Publication Year" value={data.publication_year} />
                    <Viewbox label="Edition" value={data.edition} />
                    <Viewbox label="Genre" value={data.genre} />
                    <Viewbox label="Language" value={data.language} />
                    <Viewbox label="Number Of Page" value={data.number_of_pages} />
                    <Viewbox label="Shelf Location" value={data.shelf_location} />
                    <Viewbox label="Description" value={data.description} />
                </tbody>
            </table>
        </div>
    );
};

export default View;


