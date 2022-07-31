const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { getAllUsers,getUserById, updateUserById, deleteUserById} = require('../controllers/user.controller');


router.get('/users',auth,getAllUsers);
router.get('/users/:id',auth,getUserById);
router.put('/users/:id',auth,updateUserById);
router.delete('/users/:id',auth,deleteUserById);
module.exports = router;