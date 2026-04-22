const pool = require('../dbs/db');

const getUsers = async (req, res) => {
    try{
        const result = await pool.query('select * from public.users');
        res.json(result.rows);
    }catch (err){
        console.error(err);
        res.status(500).json({error : "Users retrieval query fail"});
    }
}

const getUserById = async (req, res) => {
    try{
        const user_id = req.params.id;
        const result = await pool.query('select * from public.users where user_id = $1', [user_id]);
        res.json(result.rows);
    }catch (err){
        console.error(err);
        res.status(500).json({error : "User retrieval query fail"});
    }
}

const postUser = async (req, res) => {
    try{
        const { name } = req.body;

        const result = await pool.query("insert into public.users (name) values ($1)", [name]);

        res.status(201).json({response: "Added the information you requested"})
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Server error"});
    }
}

module.exports = { getUsers, getUserById, postUser};