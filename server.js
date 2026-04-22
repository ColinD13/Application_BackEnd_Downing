require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

app.disable('x-powered-by');
app.use(helmet());

app.use(express.json());
app.use(cors());

const playersRoutes = require('./routes/playerRoutes');


app.use('/api/', playersRoutes);

app.get('/', (req,res) => {
    res.json({ message: 'API is running' });
}); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})