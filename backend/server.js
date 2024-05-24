import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import connectToMongoDb from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payload (from req.body)

app.use('/api/auth', authRoutes);

// app.get('/', (req, res) => {
//     root  route http://localhost:5000/
//   res.send('Hello world!');
// });

app.listen(PORT, () => {
    connectToMongoDb();
    console.log(`server running on port ${PORT}`)
});
