require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const playersRoutes = require('./routes/playerRoutes');

//users
// app.get('/api/users', async (req, res) => {
//     try{
//         const result = await pool.query('select * from public.users');
//         res.json(result.rows);
//     }catch (err){
//         console.error(err);
//         res.status(500).json({error : "User retrieval query fail"});
//     }
// });

// app.get('/api/users/:id', async (req, res) => {
//     try{
//         const user_id = req.params.id;
//         const result = await pool.query('select * from public.users where user_id = $1', [user_id]);
//         res.json(result.rows);
//     }catch (err){
//         console.error(err);
//         res.status(500).json({error : "User retrieval query fail"});
//     }
// });

//trades
// app.get('/api/trades', async (req, res) => {
//     try{
//         const result = await pool.query('select * from public.trade');
//         res.json(result.rows);
//     }catch (err){
//         console.error(err);
//         res.status(500).json({error : "User retrieval query fail"});
//     }
// });

// app.get('/api/trades/:id', async (req, res) => {
//     try{
//         const trade_id = req.params.id;
//         const result = await pool.query('select * from public.trade where trade_id = $1', [trade_id]);
//         res.json(result.rows);
//     }catch (err){
//         console.error(err);
//         res.status(500).json({error : "User retrieval query fail"});
//     }
// });

//trade info
// app.get('/api/trades_info', async (req, res) => {
//     try{
//         const result = await pool.query('select * from public.trade_player');
//         res.json(result.rows);
//     }catch (err){
//         console.error(err);
//         res.status(500).json({error : "User retrieval query fail"});
//     }
// });

// app.get('/api/trades_info/:trade_id', async (req, res) => {
//     try{
//         const trade_id = req.params.trade_id;
//         const result = await pool.query('select * from public.trade_player where trade_id = $1', [trade_id]);
//         res.json(result.rows);
//     }catch (err){
//         console.error(err);
//         res.status(500).json({error : "User retrieval query fail"});
//     }
// });

app.use('/api/', playersRoutes);

app.get('/', (req,res) => {
    res.json({ message: 'API is running' });
}); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})