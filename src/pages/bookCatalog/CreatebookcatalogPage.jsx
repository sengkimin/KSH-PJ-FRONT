
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/ButtonBookcatalog.jsx'; 
import InputField from '../../components/InputFieldBookcatalog'; 

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [authors, setAuthors] = useState('');
    const [isbn, setIsbn] = useState('');
    const [publisher, setPublisher] = useState('');
    const [publicationYear, setPublicationYear] = useState('');
    const [edition, setEdition] = useState('');
    const [genre, setGenre] = useState('');
    const [language, setLanguage] = useState('');
    const [numberOfPages, setNumberOfPages] = useState('');
    const [coverImageUrl, setCoverImageUrl] = useState('');
    const [shelfLocation, setShelfLocation] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/books', {
                title,
                authors,
                isbn,
                publisher,
                publication_year: parseInt(publicationYear, 10),
                edition,
                genre,
                language, 
                number_of_pages: parseInt(numberOfPages, 10),
                cover_image_url: coverImageUrl,
                shelf_location: shelfLocation,
                description,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            
            console.log(response.data);
            navigate('/book-catalog');
        } catch (error) {
            console.error("There was an error saving the book!", error);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-4xl mb-8 font-bold">New Book Catalog</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 font-bold">
                <InputField 
                    label="Title" 
                    type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <InputField 
                    label="Language" 
                    type="text" 
                    name="language" 
                    value={language} 
                    onChange={(e) => setLanguage(e.target.value)} 
                />
                <InputField 
                    label="Authors" 
                    type="text" 
                    name="authors" 
                    value={authors} 
                    onChange={(e) => setAuthors(e.target.value)} 
                />
                <InputField 
                    label="Number of Pages" 
                    type="number" 
                    name="numberOfPages" 
                    value={numberOfPages} 
                    onChange={(e) => setNumberOfPages(e.target.value)} 
                />
                <InputField 
                    label="ISBN" 
                    type="text" 
                    name="isbn" 
                    value={isbn} 
                    onChange={(e) => setIsbn(e.target.value)} 
                />
                <InputField 
                    label="Cover Image URL" 
                    type="text" 
                    name="coverImageUrl" 
                    value={coverImageUrl} 
                    onChange={(e) => setCoverImageUrl(e.target.value)} 
                />
                <InputField 
                    label="Publisher" 
                    type="text" 
                    name="publisher" 
                    value={publisher} 
                    onChange={(e) => setPublisher(e.target.value)} 
                />
                <InputField 
                    label="Shelf Location" 
                    type="text" 
                    name="shelfLocation" 
                    value={shelfLocation} 
                    onChange={(e) => setShelfLocation(e.target.value)} 
                />
                <InputField 
                    label="Publication Year" 
                    type="number" 
                    name="publicationYear" 
                    value={publicationYear} 
                    onChange={(e) => setPublicationYear(e.target.value)} 
                />
                <InputField 
                    label="Edition" 
                    type="text" 
                    name="edition" 
                    value={edition} 
                    onChange={(e) => setEdition(e.target.value)} 
                />
                <InputField 
                    label="Genre" 
                    type="text" 
                    name="genre" 
                    value={genre} 
                    onChange={(e) => setGenre(e.target.value)} 
                />
                 
                 <div className="mb-4 w-1/2">
                <label className="block mb-2 text-gray-700 font-bold">Description</label>
                <textarea 
                    name="description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    className="w-full p-2 border border-gray-400 rounded" 
                    rows="5"
               ></textarea>
               </div>

                <div className="col-span-2 flex space-x-4">
                    <Button 
                        onClick={() => navigate('/book-catalog')} 
                        text='Cancel' 
                    />
                    <Button 
                      
                        text='Save' 
                        kind='Button-blue'
                    />
                </div>
            </form>
        </div>
    );
};

export default BookForm;


