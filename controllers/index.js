const router = require('express').Router();

const AddProduct = require('./AddProduct');
const GetFavorites = require('./GetFavorites')

router.use('/upload', AddProduct);
router.use('/get_favorites', GetFavorites);

module.exports = router;