const pool = require('../dbs/db');

const getPlayers = async (req, res) => {
    try{
        const result = await pool.query('select * from public.nfl_players');
        res.json(result.rows);
    }catch (err){
        console.error(err);
        res.status(500).json({error : "Players retrieval query fail"});
    }
}

const getPlayerById = async (req, res) => {
    try{
        const player_id = req.params.id;
        const result = await pool.query('select * from public.nfl_players where player_id = $1', [player_id]);
        res.json(result.rows);
    }catch (err){
        console.error(err);
        res.status(500).json({error : "Player retrieval query fail"});
    }
}

const postPlayer = async (req, res) => {
    try{
        const { position, name, nfl_team} = req.body;

        const result = await pool.query("insert into public.nfl_players (position, name, nfl_team) values ($1, $2, $3)", [position, name, nfl_team]);

        res.status(201).json({response: "Added the information you requested"})
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Server error"});
    }
}

const putPlayer = async (req,res) => {
    try{
        //get the params sent in the body to post
        const { name, nfl_team} = req.body;

        const result = await pool.query("update public.nfl_players set nfl_team = ($2) where name = ($1)", [name, nfl_team]);

        res.status(201).json({response: "Updated the information you requested"});
    }
    catch(err){
        console.error(err);
        res.status(500).json({error:"Server error"});
    }
}

const deletePlayer = async (req,res) => {
    try{
        //get the params sent in the body to post
        const { player_id } = req.body;

        const result = await pool.query("delete from public.nfl_players where player_id = $1", [player_id]);

        res.status(201).json({response: "Deleted the information you requested"});
    }
    catch(err){
        console.error(err);
        res.status(500).json({error:"Server error"});
    }
}

module.exports = { getPlayers, postPlayer, putPlayer, getPlayerById, deletePlayer };