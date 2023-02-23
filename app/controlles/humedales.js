const { httpError } = require('../helpers/handleError')
const userModel = require('../models/Humedales')

const getItems = async (req, res) => {


    try {
        const listAll = await userModel.find({})
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

const getItem = (req, res) => {

}

const createItem = async (req, res) => {
    try {
        const { name, img, ramsar, location, departments, ha } = req.body
        const resDetail = await userModel.create({
            name, img, ramsar, location, departments, ha
        })
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}


const updateItem = () => {

}

const deleteItem = () => {

}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }
