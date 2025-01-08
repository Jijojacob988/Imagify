import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const PORT = process.env.PORT || 4000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => res.send("API Working"));

// Start server
app.listen(PORT, () => console.log('server running on port ' + PORT));
