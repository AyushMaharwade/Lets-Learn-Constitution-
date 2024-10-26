const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String
})

// checking mongodb connection
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to the database');
  });
  
  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err.message}`);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected from the database');
  });

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;