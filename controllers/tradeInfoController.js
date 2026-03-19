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

module.exports = { getTradeInfo, getTradeInfoById};