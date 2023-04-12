import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/FirebaseConfig";


let initialData={
    email:"",
    password:""
}
const Signin = () => {
    const [data, setData]=useState(initialData)
    const navigate=useNavigate()

    const handleChange=(e)=>{
        let {name,value}=e.target
        setData((prev)=>({...prev, [name]:value}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password).then((user)=>{
            alert("User logged in successfully!")
            navigate("/dashboard")
           
          }).catch((err)=>{
           console.log(err);
          })
    }
    const {email,password}=data

  return (
    <div>
      <form className="border w-[400px] flex flex-col m-auto justify-center gap-4 items-center mt-[15%] p-5 rounded-md shadow-lg" onSubmit={handleSubmit}>
        <h2 className="text-[22px] underline underline-offset-4 text-blue-700 font-bold">
          Login Form
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
          <p>Don't have account? <Link to="/" className="text-blue-500 underline">Click here</Link> to Register. </p>
      </form>
    
    </div>
  );
};

export default Signin;
