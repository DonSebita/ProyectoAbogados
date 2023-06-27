const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI

const conexionBD = async()=>{

  mongoose.connect(MONGODB_URI, {

    useNewUrlParser: true, 

    useUnifiedTopology: true 

  })
  .then(console.log("por fin ctm"))
  .catch((err)=>console.log(err))

}

export default conexionBD