// Express module import
import express from 'express';

// Port number definition
const PORT = 3000;

// Create Express app
const app = express();

// Root path definition
app.get('/', (req, res) => {
    // Send message to client
    res.send('Hello, World!');
})

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at
        http://localhost:${PORT}`);
})