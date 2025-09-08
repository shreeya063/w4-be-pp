const auth = require('./middleware/auth');

const express = require('express');
const app = express();
const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');
const morgan = require('morgan');
app.use(morgan('tiny'));


// Middleware to parse JSON
app.use(express.json());

//app.use('/api', auth)

// Use the tourRouter for all /tours routes
app.use('/api/tours', tourRouter);

// Use the tourRouter for all /users routes
app.use('/api/users', userRouter);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});