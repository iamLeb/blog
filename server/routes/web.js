const router = require('express').Router();
const PagesController = require('../controllers/PagesController');

router.get('/', PagesController.index);
router.get('/about', PagesController.about);

module.exports = router;