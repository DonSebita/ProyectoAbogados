import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

const conexionBD = async()=>{

  try{
    await mongoose.connect(MONGODB_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    console.log("conexion realizada")

  }catch(error){
    console.log(error)
    process.exit(1)
  }
}

export default conexionBD