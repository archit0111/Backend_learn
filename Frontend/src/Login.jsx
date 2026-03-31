import { useState } from 'react';

function Login(){
    const[email, setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[emailValid,setEmailValid]=useState(true);
    const[data,setData]=useState([]);
    const[passwordValid,setPasswordValid]=useState(true);


    //regex for validation

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^\d{6}$/;

    function validation(){
        if(emailRegex.test(email)){
            setEmailValid(true);
        }else{
            setEmailValid(false);
        }
        if(passwordRegex.test(password)){
            setPasswordValid(true);
        }else{
            setPasswordValid(false);
        }
    }

    function handelSubmit(){
        validation();
    }

    function verify(){
        let user = data.find(user=>user.email===email&&Number(user.password)===Number(password));
        if(user != undefined){
             alert(`Welcome! ${user.name}`);
             return true;
        }else{return false;}
    }

    return(
        <>
        <nav className='bg-blue-50 text-4xl'>Login</nav>
        <main className='bg-blue-100 p-10 text-center'>
            <div>
                <form action="/">
                     <div >
                     <label htmlFor="email" className='mr-4'>Email:</label>
                     <input type="email" required onChange={(e)=>(setEmail(e.target.value))} placeholder='example@gmail.com' name='email' className={emailValid?`border p-0.5 pl-1 rounded-lg ml-2 sm:w-auto w-4/6`:`border p-0.5 pl-1 rounded-lg ml-2 sm:w-auto w-4/6 border-red-500 bg-red-300`}/>
                     </div>
                     <div >
                     <label htmlFor="password" className='mr-4'>Password:</label>
                     <input type="password" required onChange={(e)=>(setPassword(e.target.value))} placeholder=' XXXX' name='password' className={passwordValid?`border p-0.5 pl-1 rounded-lg ml-2 sm:w-auto w-4/6`:`border p-0.5 pl-1 rounded-lg ml-2 sm:w-auto w-4/6 border-red-500 bg-red-300`} />
                     </div>
                </form>
                    <div> 
                        <button className='bg-green-500 p-1.5 rounded-lg hover:bg-green-600 mt-5' onClick={handelSubmit}>Login</button>
                    </div>
                    <div className='mt-4 font-extralight text-sm'><a href="/signup">Account not exist?<span className='text-blue-700 hover:text-blue-800 hover:font-bold'>SignIn</span></a></div>
            </div>
        </main>
        </>
    )
}

export default Login