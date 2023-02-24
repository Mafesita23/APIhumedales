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

const getItem = async (req, res) => {
  try {
    const itemId = req.params.id;
    const item = await userModel.findById(itemId);
    if (!item) {
      return res.status(404).send({ message: 'Item not found' });
    }
    res.send({ data: item });
  } catch (e) {
    httpError(res, e);
  }

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


const updateItem = async (req, res) => {
  try {
    const itemId = req.params.id;
    const { receipt, date, name, concept, value } = req.body;
    const item = await userModel.findByIdAndUpdate(
      itemId,
      { receipt, date, name, concept, value },
      { new: true }
    );
    if (!item) {
      return res.status(404).send({ message: 'Item not found' });
    }
    res.send({ data: item });
  } catch (e) {
    httpError(res, e);
  }

}

const deleteItem = async (req, res) => {
  try {
    const itemId = req.params.id;
    const item = await userModel.findByIdAndDelete(itemId);
    if (!item) {
      return res.status(404).send({ message: 'Item not found' });
    }
    res.send({ data: item });
  } catch (e) {
    httpError(res, e);
  }

}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }
