const express = require('express');
const router = express.Router();

//players
const { getPlayers } = require('../controllers/playersController');
const { getPlayerById } = require('../controllers/playersController');
const { postPlayer } = require('../controllers/playersController');
const { putPlayer } = require('../controllers/playersController');
const { deletePlayer } = require('../controllers/playersController');

router.get('/players', getPlayers);
router.get('/players/:id', getPlayerById);
router.post('/players', postPlayer);
router.put('/players', putPlayer);
router.delete('/players', deletePlayer);

//users
const { getUsers } = require("../controllers/usersController");
const { getUserById } = require("../controllers/usersController");
const { postUser } = require("../controllers/usersController");
const { putUser } = require("../controllers/usersController");
const { deleteUser } = require("../controllers/usersController");

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', postUser);
router.put('/users', putUser);
router.delete("/users", deleteUser);

//trades
const { getTrades } = require("../controllers/tradesController");
const { getTradeById } = require("../controllers/tradesController");
const { postTrade } = require("../controllers/tradesController");
const { putTrade } = require("../controllers/tradesController");
const { deleteTrade } = require("../controllers/tradesController");

router.get("/trades", getTrades);
router.get("/trades/:id", getTradeById);
router.post("/trades", postTrade)
router.put("/trades", putTrade)
router.delete("/trades", deleteTrade)

//trade info
const { getTradeInfo } = require("../controllers/tradeInfoController");
const { getTradeInfoById } = require("../controllers/tradeInfoController");
const { postTradePlayer } = require("../controllers/tradeInfoController");
const { putTradePlayer } = require("../controllers/tradeInfoController");

router.get("/trades_info", getTradeInfo);
router.get("/trades_info/:id", getTradeInfoById);
router.post("/trades_info", postTradePlayer);
router.put("/trades_info", putTradePlayer);


module.exports = router;