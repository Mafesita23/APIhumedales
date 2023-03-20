const mongoose = require('mongoose')

const humedalesSchema = new mongoose.Schema({
    name: {
        type: String
    },
    img: {
        type: String
    },
    ramsar: {
        type: String
    },
    location: {
      type: String
    },
    departments: {
      type: String
    },
    ha: {
      type: Number
  },
},
    {
        timestamps: true, // create date
        versionKey: false // delete V
    })

module.exports = mongoose.model('humedales', humedalesSchema)
