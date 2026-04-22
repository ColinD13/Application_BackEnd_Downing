const pool = require('../dbs/db');

const getTrades = async (req, res) => {
    try{
        const result = await pool.query('select * from public.trade');
        res.json(result.rows);
    }catch (err){
        console.error(err);
        res.status(500).json({error : "Trades retrieval query fail"});
    }
}

const getTradeById = async (req, res) => {
    try{
        const trade_id = req.params.id;
        const result = await pool.query('select * from public.trade where trade_id = $1', [trade_id]);
        res.json(result.rows);
    }catch (err){
        console.error(err);
        res.status(500).json({error : "Trade retrieval query fail"});
    }
}

const postTrade = async (req, res) => {
    try{
        const { user_id_1, user_id_2, trade_date } = req.body;

        const result = await pool.query("insert into public.trade (user_id_1, user_id_2, trade_date) values ($1, $2, $3)", [user_id_1, user_id_2, trade_date]);

        res.status(201).json({response: "Added the information you requested"})
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Server error"});
    }
}

module.exports = { getTrades, getTradeById, postTrade};