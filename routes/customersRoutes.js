import express from 'express'
const router = express.Router()

import {
    createCustomer,
    deleteCustomer,
    getAllCustomers,
    updateCustomer,
    showStats
} from '../controllers/customersController.js'



router.route('/').post(createCustomer).get(getAllCustomers)

// remember about :id 
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteCustomer).patch(updateCustomer)

export default router 