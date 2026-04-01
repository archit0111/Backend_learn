const joi = require('joi');

const signUpValidation = (req,res,next)=>{
    const schema = joi.object({
        name : joi.string().min(2).max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required()
    })
    const {err}= schema.validate(req.body);
    if(err){
        return res.status(400)
        .json({message:"Bad request",err})
    }
    next();
}

const loginValidation = (req,res,next)=>{
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required()
    })
    const {err}= schema.validate(req.body);
    if(err){
        return res.status(400)
        .json({message:"Bad request",err})
    }
    next();
}

module.exports = {signUpValidation,loginValidation}