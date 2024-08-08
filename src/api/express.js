const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/user_accounts', async (req, res) => {
    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Replace with actual database logic
        const newUser = {
            id: new Date().getTime(), // This is just a placeholder
            username,
            email,
            password,
        };

        // Simulate saving to database
        // await database.saveUser(newUser);

        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});





const getUserAccounts = async (req, res) => {
    const { limit = 10, offset = 0 } = req.query; // Default limit to 10, offset to 0
  
    try {
      const userAccounts = await prisma.user_account.findMany({
        skip: parseInt(offset, 10),
        take: parseInt(limit, 10),
      });
  
      const total = await prisma.user_account.count();
  
      res.json({
        data: userAccounts,
        total,
        limit: parseInt(limit, 10),
        offset: parseInt(offset, 10),
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  app.get('/api/user_accounts', getUserAccounts);