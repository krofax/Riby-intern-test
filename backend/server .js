const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = express.Router();
const PORT = 4000;
import axios from 'axios';

app.use(cors());
app.use(bodyParser.json());

//getting the product model
const Product = require('./models/product');

//setting the main Route
productRoutes.route('/').get(function (req, res) {
    Product.find(function (err, product) {
        if (err) {
            console.log(err);
        } else {
            res.json(product);
        }
    });
});

productRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Product.findById(id, function (err, product) {
        res.json(product);
    });
});

// productRoutes.route('/update/:id').post(function (req, res) {
//     Product.findById(req.params.id, function (err, product) {
//         if (!product)
//             res.status(404).send("data is not found");
//         else
//             product.name = req.body.name;
//         product.description = req.body.description;
//         product.price = req.body.price;
//         product.category = req.body.category;
//         product.color = req.body.color;

//         product.save().then(product => {
//             res.json('Product updated!');
//         })
//             .catch(err => {
//                 res.status(400).send("Update not possible");
//             });
//     });
// });

productRoutes.route('/add').post(function (req, res) {
    let product = new Product(req.body);
    product.save()
        .then(product => {
            res.status(200).json({ 'product': 'product added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new product failed');
        });
});

//setting main route(Homepage) 
app.use('/product', productRoutes);

//connecting to mongoDB 
mongoose
    .connect(
        `mongodb+srv://${process.env.MONGO_USER}:${
        process.env.MONGO_PASSWORD
        }@cluster0-4ropq.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,

        { useNewUrlParser: true }).then(() => {
            app.listen(PORT, function () {
                console.log("Server is running on Port: " + PORT);
            })
        })
    .catch(err => {
        console.log(err);
    });
