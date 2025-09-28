const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({

    productName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: [
            {
                type: String,
                enum: ['veg', 'non-veg']
            }
        ]
    },
    image: {
        type: String
    },
    bestseller: {
        type: String
    },
    discription: {
        type: String
    },

    firm: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Firm'
        }
    ]
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product