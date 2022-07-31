const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { getAllUsers,getUserById, updateUserById, deleteUserById} = require('../controllers/user.controller');


router.get('/users',auth,getAllUsers);
router.get('/users/:id',getUserById);
router.put('/users/:id',updateUserById);
router.delete('/users/:id',deleteUserById);
module.exports = router;