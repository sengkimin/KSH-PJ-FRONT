import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../../API/Bookcatalog'; 

const BookTable = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const data = await fetchBooks();
      console.log('Fetched books in component:', data);
      setBooks(data);
    };

    getBooks();
  }, []);

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-4xl font-bold mb-6'>Book Catalog</h1>
      <button className="bg-blue-500 text-white px-8 py-3 mb-4 rounded-lg hover:bg-stone-400 cursor-pointer">Create</button>
      <table className='w-full bg-white cursor-pointer rounded-2xl overflow-hidden'>
        <thead className="text-left bg-gray-200">
          <tr className='w-full border-b'>
            <th className="px-4 py-4">Action</th>
            <th className="px-4 py-2">ISBN</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Authors</th>
            <th className="px-4 py-2">Publisher</th>
            <th className="px-4 py-2">Genre</th>
            <th className="px-4 py-2">Shelf Location</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.isbn}>
              <td className="px-4 py-6 border-b">
                <Link className="bg-blue-400 text-white px-8 py-2 hover:bg-stone-400 rounded-md" to={`/book/${book.id}`}>
                      View
                </Link>
              </td>
              <td className="px-4 py-4 border-b-2">{book.isbn}</td>
              <td className="px-4 py-4 border-b-2">{book.title}</td>
              <td className="px-4 py-4 border-b-2">{book.authors}</td>
              <td className="px-4 py-4 border-b-2">{book.publisher}</td>
              <td className="px-4 py-4 border-b-2">{book.genre}</td>
              <td className="px-4 py-4 border-b-2">{book.shelf_location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
