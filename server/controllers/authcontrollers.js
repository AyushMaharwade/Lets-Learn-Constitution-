const User = require('../models/user')


// loginHandler.js
const test = (req, res) => {
    res.send('Login Successful everthing is fine');
  };

const registerUser = async (req,res) =>{
  try{
    const{name, email, password} = req.body;
    // check if name was entered
    if(!name){
      return res.json({
        error: 'name is required'
      })
    };
    // check for password
    if(!password || password.length <6){
      return res.json({
        error: 'password is required and should be at least 6 char long'
      })
    };
    // check email
    const exist = await User.findOne({email});
    if(exist){
      return res.json({
        error: 'email is taken'
      })
    }

    const user = await User.create({
      name, email, password
    })

    return res.json(user)
  }catch(error){
    console.log(error)
  }
}
  

module.exports = {test,registerUser};
  