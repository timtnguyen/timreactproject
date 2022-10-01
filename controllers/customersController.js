import Customer from '../models/Customer.js'
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, NotFoundError, UnAuthenticatedError } from '../errors/index.js'

const createCustomer = async (req, res) => {
    const {
        firstName,
        lastName,
        zipCode,
        phone,
        email,
        invoice,
        furnitureBought,
        sku,
        payment,
        payInFull,
        totalInvoice,
        futureNeeded,
        protection,
        totalProtection,
        mattressSpiff,
        datePurchased,
        hobbies
    } = req.body

    req.body.createdBy = req.user.userId 

    const customer = await Customer.create(req.body)
    res.status(StatusCodes.CREATED).json({ customer })
}

const deleteCustomer = async (req, res) => {
    res.send('delete customer')
}

const getAllCustomers = async (req, res) => {
    const customers = await Customer.find({ createdBy: req.user.userId })
    res.status(StatusCodes.OK).json({ 
        customers, 
        totalCustomers: customers.length, numOfPages: 1 
    })
}

const updateCustomer = async (req, res) => {
    const { id: customerId } = req.params 
    console.log({ customerId })
    // const { 
    //     firstName,
    //     lastName,
    //     zipCode,
    //     phone,
    //     email,
    //     invoice,
    //     furnitureBought,
    //     sku,
    //     payment,
    //     totalInvoice,
    //     payInFull,
    //     futureNeeded,
    //     protection,
    //     totalProtection,
    //     mattressSpiff,
    //     datePurchased,
    //     hobbies
    // } = req.body 

    // if (!firstName || !lastName || !zipCode || !phone || !email 
    // || !invoice || !furnitureBought || !sku || !payment || !totalInvoice 
    // || !payInFull || !futureNeeded || !protection || !totalProtection 
    // || !mattressSpiff || !datePurchased || !hobbies) {
    //     throw new BadRequestError('Please provide all values')
    // }

    const customer = await Customer.findOne({ _id: customerId })
    console.log(customer)
    if (!customer) {
        throw new NotFoundError(`No customer with id: ${customerId}`) 
    }
    // check permission 
    const updatedCustomer = await Customer.findOneAndUpdate({ 
        _id: customerId}, 
        req.body, {
            new: true,
            runValidators: true 
        }
    )
    res.status(StatusCodes.OK).json({ updatedCustomer })
}

const showStats = async (req, res) => {
    res.send('show stats')
}


export { createCustomer, deleteCustomer, getAllCustomers, updateCustomer, showStats }