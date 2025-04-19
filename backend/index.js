const express = require('express')
const app = express()
const cors = require('cors')

// Middlewares
app.use(express.json())
app.use(cors())


const PORT = 3030
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})