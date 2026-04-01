const userModel = require('../Modals/user')
const bcrypt = require('bcrypt');

const signUp = async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        const user = await userModel.findOne({email});
        if(user){
            return res.status(409)
            .json({message:"user already exist!"})
        }
        const userModel = new userModel({name,email,password});
        userModel.password=await bcrypt.hash(password,12);
        await userModel.save();
        res.status(201)
        .json({message:"user created!"});
    }catch(err){
        res.status(500)
        .json({message:"Internal Server error"});
    }
}

module.exports = {signUp};