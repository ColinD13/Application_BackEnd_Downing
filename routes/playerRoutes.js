const express = require('express');
const router = express.Router();

//players
const { getPlayers } = require('../controllers/playersController');
const { getPlayerById } = require('../controllers/playersController');
const { postPlayer } = require('../controllers/playersController');
const { putPlayer } = require('../controllers/playersController');

router.get('/players', getPlayers);
router.get('/players/:id', getPlayerById);
router.post('/players', postPlayer);
router.put('/players', putPlayer);

//users
const { getUsers } = require("../controllers/usersController");
const { getUserById } = require("../controllers/usersController");

router.get('/users', getUsers);
router.get('/users/:id', getUserById);

//trades
const { getTrades } = require("../controllers/tradesController");
const { getTradeById } = require("../controllers/tradesController");

router.get("/trades", getTrades);
router.get("/trades/:id", getTradeById);

//trade info
const { getTradeInfo } = require("../controllers/tradeInfoController");
const { getTradeInfoById } = require("../controllers/tradeInfoController");

router.get("/trades_info", getTradeInfo);
router.get("/trades_info/:id", getTradeInfoById);


module.exports = router;