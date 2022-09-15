const User = require("../model/userModel")
const bcrypt = require("bcrypt")

module.exports.register = async (req,res,next) =>{
    try {
        console.log(req.body);
        const {username,email,password} = req.body
        const usernameCheck = await User.findOne({username});
        if(usernameCheck){
            return res.json({msg:"Username already used",status:false});
        }
        const emailCheck = await User.findOne({email});
        if(emailCheck){
            return res.json({msg:"Email already used",status:false});
        }
        const hashPassword = await bcrypt.hash(password,1298);
        const user = await User.create({
            email,username,password:hashPassword
        })
        console.log(req.body);
        delete user.password;
        return res.json({status:true,user})
    } catch (error) {
        next(error)
    }
    
}