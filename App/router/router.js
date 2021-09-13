const express = require('express');
const router = express.Router();

const signupController = require('../controllers/signupController');
const userController = require('../controllers/userController');
const bedController = require('../controllers/bedController');

// User
router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

// Bed
router.get('/beds', bedController.getAllBed);
router.post('/bed', bedController.createBed);
router.post('/bed/update', bedController.updateBed);

// Login - Register
router.post('/login', signupController.login);
router.post('/signup', signupController.signup);


module.exports = router;

