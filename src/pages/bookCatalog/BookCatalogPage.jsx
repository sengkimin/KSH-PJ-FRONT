import React, { useState, useEffect } from 'react';
import { fetchBooks } from '.././../API/Bookcatalog'; 


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
  
    <div className="container mx-auto">
        <h1 className='text-4xl font-bold mb-6'>Book Catalog</h1>
      <button className="bg-blue-500 text-white px-8 py-3 mb-4 rounded-lg hover:bg-stone-400 cursor-pointer">Create</button>
      <table className="min-w-full bg-white border-2 cursor-pointer table-fixed ">
        <thead  className="text-left  bg-stone-100  "  > 
          <tr className='border-2 border-stone-300'>
            <th className="px-4 py-4 ">Action</th>
            <th className="px-4 py-2">ISBN</th>
            <th className="px-4 py-2 ">Title</th>
            <th className="px-4 py-2 ">Authors</th>
            <th className="px-4 py-2  ">Publisher</th>
            <th className="px-4 py-2  ">Genre</th>
            <th className="px-4 py-2 ">Shelf Location</th>
          </tr>
        </thead>
        <tbody className='text-left'>
          {books.map((book) => (
            <tr className='border-2 border-stone-300' >
              <td className="px-4 py-6 ">
                <button className="bg-blue-400 text-white px-8 py-2 rounded-lg hover:bg-stone-400 ">View</button>
              </td>
              <td className="px-4  ">{book.isbn}</td>
              <td className="px-4 ">{book.title}</td>
              <td className="px-4 ">{book.authors}</td>
              <td className="px-4 ">{book.publisher}</td>
              <td className="px-4  ">{book.genre}</td>
              <td className="px-4  ">{book.shelf_location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;