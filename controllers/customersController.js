const createCustomer = async (req, res) => {
    res.send('create customer')
}

const deleteCustomer = async (req, res) => {
    res.send('delete customer')
}

const getAllCustomers = async (req, res) => {
    res.send('get all customers')
}

const updateCustomer = async (req, res) => {
    res.send('update customer')
}

const showStats = async (req, res) => {
    res.send('show stats')
}


export { createCustomer, deleteCustomer, getAllCustomers, updateCustomer, showStats }