import express from 'express';
import config from './routers/config.js';

const app = express();
const PORT = 3000;

app.use(express.json());
config(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});