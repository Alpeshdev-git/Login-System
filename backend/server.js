const express=require("express")
const core=require("cors")
const bodyParser=require("body-parser")
const { router } = require("./routes/router")

const app=express()

app.use(core())
app.use(express.json())

app.use('/api',router)

const port=8000

app.listen(port,()=>{
    console.log(`the app listen on port ${port}`)
})
module.exports={app}