const router = require('express').Router();

const AddProduct = require('./AddProduct');
const GetFavorites = require('./GetFavorites')
const Search = require('./Search');
const Category = require('./Category')

router.use('/upload', AddProduct);
router.use('/get_favorites', GetFavorites);
router.use('/search', Search);
router.use('/category', Category);

module.exports = router;