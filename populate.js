import mongoose from 'mongoose'
import Account from './models/account'

const accounts = [
  {
    name: 'Joohyuk',
    surname: 'Nam',
    username: 'skawngur',
    email: 'skawngur.njh@gmail.com',
  },
  {
    name: 'Minhyun',
    surname: 'Wang',
    username: 'optimuswang',
    email: 'optimus.wang@hotmail.com',
  },
  {
    name: 'Leon',
    surname: 'Leong',
    username: 'kangkang.l@gmail.com',
    email: 'leonleong.l@gmail.com',
  },
]

// Connect to MongoDB
mongoose.connect('mongodb://localhost/accounts', { useNewUrlParser: true })
// mongo.then(()=>{
//   console.log('connected');
// }).catch((err)=>{
//   console.log('err', err);
// })

// Go through each account
accounts.map(data => {
  // Initialize a model with account data
  const account = new Account(data);
  // and save it into the database
  account.save()
})