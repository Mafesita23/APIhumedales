const epxress = require('express');
const router = epxress.Router();
const fs = require('fs');


const pathRouter = `${__dirname}`

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file)
    const skip = ['index'].includes(fileWithOutExt)
    if (!skip) {
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`)) //TODO: localhost/humedales
        console.log('CARGAR RUTA ---->', fileWithOutExt)
    }
})

router.get('*', (req, res) => {
    res.status(404)
    res.send({ error: 'Not found' })
})
//swagger
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const path = require("path")
const swaggerSpec ={ //inicio de swagger
  definition:{
    openapi: "3.0.0",
    info:{
      title:"humedales API",
      version: "1.0"
    },
    servers:[
      {
        url: "https://apihumedales.onrender.com/api/1.0/humedales"
      }
    ]
  },
  apis:[`${path.join(__dirname, "./humedales.js")}`] //rutas
}

router.use('/api-doc', swaggerUI.serve , swaggerUI.setup(swaggerJsDoc(swaggerSpec))) //ruta de la documentacion

module.exports = router
