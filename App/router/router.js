const express = require('express');
const router = express.Router();

const signupController = require('../controllers/signupController');
const userController = require('../controllers/userController');
const bedController = require('../controllers/bedController');

// User
router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
router.put('/user/update/:id', userController.updateUser);
router.delete('/user/delete/:id', userController.deleteUser);

// Bed
router.get('/beds', bedController.getAllBed);
router.get('/bed/user/:id', bedController.getBedByUserId);
router.get('/bed/floor/:floor', bedController.getBedByFloor);
router.post('/bed/create', bedController.createBed);
router.post('/bed/assign', bedController.assignBed);
router.post('/bed/unassign', bedController.unassignBed);

// Login - Register
router.post('/login', signupController.login);
router.post('/signup', signupController.signup);


module.exports = router;

