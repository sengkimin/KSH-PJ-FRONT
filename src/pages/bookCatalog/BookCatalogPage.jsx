import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../../API/Bookcatalog';

const BookTable = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;
  // console.log(currentPage)
  

  useEffect(() => {
    const getBooks = async () => {
      const data = await fetchBooks();
      console.log('Fetched books in component:', data);
      setBooks(data);
    };

    getBooks();
  }, []);


  // const data = ["a","b","c","d"];
  // const dataSlice = data.slice(0,3)
  // console.log(dataSlice)


 
  const currentBooks = books.slice(
    (currentPage - 1) * booksPerPage, currentPage * booksPerPage);



    // console.log("currentboolk",currentBooks)

 
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-4xl font-bold mb-6'>Book Catalog</h1>
      <Link to="/book-create">
        <button className="bg-blue-500 text-white px-8 py-3 mb-4 rounded-lg hover:bg-gray-600 cursor-pointer">
          Create
        </button>
      </Link>
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
          {currentBooks.map((book) => (
            <tr key={book.isbn}>
              <td className="px-4 py-6 border-b">
                <Link
                  className="bg-blue-400 text-white px-8 py-2 hover:bg-gray-600 rounded-md"
                  to={`/book/${book.id}`}
                >
                  View
                </Link>
              </td>
              <td className="px-4 py-7 border-b-2">{book.isbn}</td>
              <td className="px-4 py-7 border-b-2">{book.title}</td>
              <td className="px-4 py-7 border-b-2">{book.authors}</td>
              <td className="px-4 py-7 border-b-2">{book.publisher}</td>
              <td className="px-4 py-7 border-b-2">{book.genre}</td>
              <td className="px-4 py-7 border-b-2">{book.shelf_location}</td>
            </tr>
          ))}
        </tbody>
      </table>

 
      <div className="flex justify-end mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg disabled:opacity-50"
        >
          &larr; Prev
        </button>
        <span className="px-4 py-2">{currentPage}</span>
        <button
          onClick={nextPage}
          disabled={currentPage * booksPerPage >= books.length}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default BookTable;
