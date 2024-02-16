const router = require('express').Router();
const PagesController = require('../controllers/PagesController');
const AuthController = require('../controllers/AuthController');

router.get('/', PagesController.index);

// Authentication Route
router.post('/register', AuthController.register);

module.exports = router;