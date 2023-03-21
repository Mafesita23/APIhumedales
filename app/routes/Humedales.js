const express = require('express')
const router = express.Router()
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controllers/Humedales')


/**
 * @swagger
 * components:
 *  schemas:
 *    humedales:
 *      type: object
 *      properties:
 *         name:
 *           type: string
 *           description: name of wetlands
 *         img:
 *           type: string
 *           description: img
 *         ramsar:
 *           type: string
 *           description: ramsar, or not recognized
 *         location:
 *           type: string
 *           description: location within bogota
 *         departments:
 *           type: string
 *           description: wetlands within Bogota
 *         ha:
 *           type: number
 *           description: amount of ha
 */

/**
 * @swagger
 * /:
 *  get:
 *    sumary: return all humedales
 *    tags: [humedales]
 *    responses:
 *      200:
 *        description: all humedales!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                 $ref: '#/components/schemas/humedales'
 */
router.get('/' , getItems)
/**
 * @swagger
 * /{id}:
 *  get:
 *    sumary: return one humedales
 *    tags: [humedales]
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *        required: true
 *        description: the user id
 *    responses:
 *      200:
 *        description: one create humedales!
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                 $ref: '#/components/schemas/humedales'
 *      400:
 *       description: user not found!
 */
router.get('/:id', getItem)

/**
 * @swagger
 * /:
 *  post:
 *    sumary: create a new humedal
 *    tags: [humedales]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          $ref: '#/components/schemas/humedales'
 *    responses:
 *      200:
 *        description: nuevo humedal creado!
 */
router.post('/', createItem)



/**
 * @swagger
 * /{id}:
 *  patch:
 *    sumary: update one pays
 *    tags: [humedales]
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *        required: true
 *        description: the user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *          type: object
 *          $ref: '#/components/schemas/humedales'
 *    responses:
 *      200:
 *        description: pay update!
 */
router.patch('/:id', updateItem)
/**
 * @swagger
 * /{id}:
 *  delete:
 *    sumary: return one humedales
 *    tags: [humedales]
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *        required: true
 *        description: the user id
 *    responses:
 *      200:
 *        description: pay update!
 */
router.delete('/:id', deleteItem)

module.exports = router
