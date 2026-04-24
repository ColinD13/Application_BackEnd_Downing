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

        const result = await pool.query("insert into public.trade (user_id_1, user_id_2, trade_date) values ($1, $2, $3) returning trade_id", [user_id_1, user_id_2, trade_date]);

        res.status(201).json({
            trade_id: result.rows[0].trade_id
        });
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Server error"});
    }
}

const putTrade = async (req,res) => {
    try{
        //get the params sent in the body to post
        const { trade_id, trade_date} = req.body;

        const result = await pool.query("update public.trade set trade_date = ($2) where trade_id = ($1)", [trade_id, trade_date]);

        res.status(201).json({response: "Updated the information you requested"});
    }
    catch(err){
        console.error(err);
        res.status(500).json({error:"Server error"});
    }
}

const deleteTrade = async (req,res) => {
    try{
        //get the params sent in the body to post
        const { trade_id } = req.body;

        //delete the tradePlayers then delete the trade itself
        const result_trade_player = await pool.query("delete from public.trade_player where trade_id = $1", [trade_id]);
        const result_trade = await pool.query("delete from public.trade where trade_id = $1", [trade_id]);

        res.status(201).json({response: "Deleted the information you requested"});
    }
    catch(err){
        console.error(err);
        res.status(500).json({error:"Server error"});
    }
}

module.exports = { getTrades, getTradeById, postTrade, putTrade, deleteTrade};