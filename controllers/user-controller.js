const productModel = require('../models/productModel')

const addProduct = (req, res, next) => {
    try {
        const { name, price, category, quantity, quaType } = req.body

        if (name === "" || price === "" || category === "" || quantity === "" || quaType === ""
            || name === undefined || price === undefined || category === undefined || quantity === undefined ||
            quaType === undefined) {
            res.status(400).json({ status: false, message: 'All fields is required' })
        } else {
            productModel.create(req.body).then((response) => {
                res.status(201).json({ status: true, product: response, message: "new product created" })
            })
        }
    } catch (error) {
        throw error;
    }
}

const getProduct = (req, res, next) => {
    try {
        if (req.query.id) {
            productModel.findById(req.query.id).then((product)=>{
                res.status(201).json({ status: true, product, message: "get product" })
            })
        } else {
            productModel.find().then((products) => {
                res.status(201).json({ status: true, products, message: "get all products" })
            })
        }
    } catch (error) {
        throw error;
    }
}



module.exports = { addProduct, getProduct }