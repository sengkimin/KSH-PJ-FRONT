

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksImlhdCI6MTcyMjQwODc3MiwiZXhwIjoxNzIyNDQ0NzcyfQ.LYByWwxnFW5OIQnE22Z20ZeUxIt7yABu72v6CzkRpy8
  const token = localStorage.getItem("token");


export const fetchMember = async () => {
    try {
        console.log('Fetching member...');
        const response = await fetch('http://localhost:3000/api/members', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched member', data);
        return data;
    } catch (error) {
        console.error("Error fetching member:", error);
        return [];
    }
};


