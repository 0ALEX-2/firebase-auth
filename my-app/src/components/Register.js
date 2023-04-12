
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/FirebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'


let initialData={
    email:"",
    password:"",
   
}
const Register = () => {
    const [data, setData]=useState(initialData)
    const navigate=useNavigate()

    const handleChange=(e)=>{
        let {name,value}=e.target
        setData((prev)=>({...prev, [name]:value}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
      createUserWithEmailAndPassword(auth,email,password).then((user)=>{
        console.log(user);
      }).catch((err)=>console.log(err))
        navigate("/login")
    }
    const {email,password}=data

  return (
    <div>
        <h1 className='mt-[10%] text-[25px] font-bold py-6'>Create an Account</h1>
          <form className="border w-[400px] flex flex-col m-auto justify-center gap-4 items-center  p-5 rounded-md shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-[22px] underline underline-offset-4 text-blue-700 font-bold">
          Registration Form
        </h2>
       
        <input
          type="email"
          placeholder="Enter your Email Id"
          className="border w-full rounded-md px-4 outline-none"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Enter your Password"
          className="border w-full rounded-md px-4 outline-none"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <input
          type="submit"
          value="Submit"
          className="bg-blue-400 px-4 rounded-md text-2xl text-white cursor-pointer hover:bg-blue-800"
        />
          <p>Already have an account? <Link to="/login" className='text-blue-500 underline'>Click here</Link> to Login</p>
      </form>
    </div>
  )
}

export default Register