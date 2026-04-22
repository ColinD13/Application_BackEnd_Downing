const pool = require('../dbs/db');

const getTradeInfo = async (req, res) => {
    try{
        const result = await pool.query('select * from public.trade_player');
        res.json(result.rows);
    }catch (err){
        console.error(err);
        res.status(500).json({error : "Trades retrieval query fail"});
    }
}

const getTradeInfoById = async (req, res) => {
    try{
        const trade_id = req.params.id;
        const result = await pool.query('select * from public.trade_player where trade_id = $1', [trade_id]);
        res.json(result.rows);
    }catch (err){
        console.error(err);
        res.status(500).json({error : "Trade retrieval query fail"});
    }
}

const postTradePlayer = async (req, res) => {
    try{
        const { trade_id, player_id, direction_sent_to } = req.body;

        const result = await pool.query("insert into public.trade_player (trade_id, player_id, direction_sent_to) values ($1, $2, $3)", [trade_id, player_id, direction_sent_to]);

        res.status(201).json({response: "Added the information you requested"})
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Server error"});
    }
}

module.exports = { getTradeInfo, getTradeInfoById, postTradePlayer};