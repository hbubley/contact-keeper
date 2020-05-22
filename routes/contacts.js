const express = require('express');
const router = express.Router();


// @route   GET api/contacts
//@desc     Get all users contacts 
//@access   Private
router.get('/', (req, res) => {
    res.send('Get a user contact')
})

// @route   POST api/contacts
//@desc     Add contact 
//@access   Private
router.post('/', (req, res) => {
    res.send('Get a user contact')
})

//@route    PUT api/contacts/:id
//@desc     Update Contact
//@access   Private
router.put('/:id', (req, res) => {
    res.send('Get a user contact')
})

//@route    DELETE api/contacts/:id
//@desc     Delete contact
//@access   Private
router.delete('/:id', (req, res) => {
    res.send('delete a contact')
})




module.exports = router;