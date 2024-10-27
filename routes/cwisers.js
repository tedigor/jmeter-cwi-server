const express = require('express');
const router = express.Router();
const verifyJWT = require('../bin/auth-verification');
const database = require('../db/db.json');

router.get('/', verifyJWT, (req, res, next) => {
    res.json({message: "Tudo ok por aqui!"});
});
 
router.get('/cwisers', verifyJWT, (req, res, next) => { 
    console.log("Retornou todos clientes!");
    res.json(database.cwisers);
});

module.exports = router;