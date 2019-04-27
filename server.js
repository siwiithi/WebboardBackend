import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import router from './router'

// Connect to MongoDB
mongoose.connect('mongodb://localhost/accounts', { useNewUrlParser: true });
// mongo.then(()=>{
//   console.log('connected');
// }).catch((err)=>{
//   console.log('err', err);
// })
// Initialize http server
const app = express();

// Logger that outputs all requests into the console
app.use(morgan('combined'))
// Use v1 as prefix for all API enpoints
app.use('/v1', router)

// Launch the server on port 3000
const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
