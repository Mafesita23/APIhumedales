const express = require('express')
const router = express.Router()
// const checkOrigin = require('../middleware/origin')
// const checkAuth = require('../middleware/auth')
// const checkRoleAuth = require('../middleware/roleAuth')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controlles/Humedales')
// const { validateCreate } = require('../validators/users')

router.get('/', getItems)

router.get('/:id', getItem)

//TODO: Donde recibimos data
router.post('/' ,createItem)

router.patch('/:id', updateItem)

router.delete('/:id', deleteItem)


module.exports = router
