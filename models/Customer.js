import mongoose from 'mongoose'

const CustomerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        maxlength: 50
    },
    lastName: {
        type: String,
        maxlength: 50
    }, 
    zipCode: {
        type: String,
        maxlength: 50
    },
    phone: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        maxlength: 150
    },
    invoice: {
        type: String,
        maxlength: 20
    },
    furnitureBought: {
        type: String,
        maxlength: 300
    },
    sku: {
        type: String,
        maxlength: 100
    },
    payment: {
        type: String,
        enum: [
           'synchrony', 
           'wells fargo', 
           'creditcard', 
           'cash', 
           'acima', 
           'american first', 
           'snap', 
           'progressive', 
           'deposit'
        ],
        default: 'creditcard'
    },
    payInFull: {
        type: String,
        enum: ['yes', 'no'],
        default: 'yes'
    },
    totalInvoice: {
        type: String,
        maxlength: 100
    },
    futureNeeded: {
        type: String,
        maxlength: 100,
        default: 'none'
    },
    protection: {
        type: String,
        enum: ['yes', 'no'],
        default: 'no'
    },
    totalProtection: {
        type: String,
        maxlength: 100
    },
    mattressSpiff: {
        type: String,
        maxlength: 100
    },
    datePurchased: {
        type: String,
        maxlength: 100
    },
    hobbies: {
        type: String,
        maxlength: 100
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user']
    }
},
    { timestamps: true}
)

export default mongoose.model('Customer', CustomerSchema)