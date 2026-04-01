const { signUpValidation } = require('../Middlewares/AuthValidation');
const { signUp } = require('../Controllers/AuthController')

const router = require('express').Router();

router.post('/login',(req, res)=>{
    res.send('login Done');
})

router.post('/signUp', signUpValidation, signUp);

module.exports = router;