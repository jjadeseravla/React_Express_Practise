const express = require('express');
const router = express.Router(); //router is part of express object

//item model to do item.find or save etc
const Item = require('../../models/Item');

//@route GET api/items
//@description of what route does: get all items
//@access Public
router.get('/', (req, res) => { // the slash represents this end point..in server.js it would be app.get('/api/items')
  Item.find()
    .sort({ date: -1 }) //so descending date
    .then(items => res.json(items))
});

//@route POST api/items
//@description create an Item
//@access Public
router.post('/', (req, res) => {
  const newItem = new Item({ // construct a variable to put into the DB
    name: req.body.name //dont need date as it is automatically inserted
  });

  newItem.save().then(item => res.json(item)); //want to save item in DB and then ceate a promise that will give back item that
  //it is saving (which is res.json) and spits out the item in json
});

//@route DELETE api/items/:id
//@description delete an Item
//@access Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id) //req.params.id fetches the id from url
    .then(item => item.remove().then(() => res.json({success: true}))) //gives item we are searching for and returns whatever you want
    //we put success true but can return anything
    .catch(err => res.status(404).json({success: false})); //if put in an id that doesnt exist we want to send a response with the err
})

module.exports = router; //so other files can read whats inside
