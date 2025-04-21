const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./routes/userRoutes')
const subjectRouter = require('./routes/subjectRoutes')
const dotenv = require('dotenv');
dotenv.config();


// Middlewares
app.use(express.json())
app.use(cors())

// Calling routes
app.use('/admin', userRouter)
app.use('/teacher', userRouter)
app.use('/student', )
app.use('/subject', subjectRouter)




const PORT = 3030
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})