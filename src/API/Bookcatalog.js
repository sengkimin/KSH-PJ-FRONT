
const token = localStorage.getItem("token");

export const fetchBooks = async () => {
  try {
    console.log('Fetching books...');
    const response = await fetch('http://localhost:3000/api/books', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    });

    console.log('Response status:', response.status);
    const data = await response.json();
    console.log('Fetched books:', data);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
