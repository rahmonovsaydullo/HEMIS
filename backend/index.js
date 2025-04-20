const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./routes/userRoutes')

// Middlewares
app.use(express.json())
app.use(cors())

// Calling routes
app.use('/', userRouter)




const PORT = 3030
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})