const express = require('express');
const router = express.Router();
const { addProduct,getProduct } = require('../controllers/user-controller')

router.get('/', (req, res) => {
    res.send('hallo world')
})

router.post('/product', addProduct)
router.get('/product', getProduct)


module.exports = router;