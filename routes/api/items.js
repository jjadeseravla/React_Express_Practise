const express = require('express');
const router = express.Router(); //router is part of express object

//item model to do item.find or save etc
const Item = require('../../models/Item');

//@route GET apit/items
//@description of what route does: get all items
//@access Public
router.get('/', (req, res) => { // the slash represents this end point..in server.js it would be app.get('/api/items')
  Item.find()
    .sort({ date })
    .then(items => res.json(items))
});

module.exports = router; //so other files can read whats inside
