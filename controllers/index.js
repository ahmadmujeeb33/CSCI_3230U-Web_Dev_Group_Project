const router = require('express').Router();

const AddProduct = require('./AddProduct');
const GetFavorites = require('./GetFavorites')
const InformationPage = require('./InformationPage')


router.use('/upload', AddProduct);
router.use('/get_favorites', GetFavorites);
router.use('/info', InformationPage);


module.exports = router;