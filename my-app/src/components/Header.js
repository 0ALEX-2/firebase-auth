import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/FirebaseConfig'

const Header = () => {
    const [loggedUser,setLoggedUser]=useState("")
     
    const navigate=useNavigate()
    
    useEffect(()=>{
       onAuthStateChanged(auth,(user)=>{ 
        if(user){
         setLoggedUser(user)
        }
        })
    },[loggedUser])

    const logout=()=>{
        signOut(auth).then(()=>{
            alert("User logged out successfully")
            setLoggedUser("")
            navigate("/login")
        }).catch((err)=>{
            alert(err)
        })
    }

  return (
    <div className='p-4 bg-teal-600 flex justify-around'>
        <Link to="/dashboard" className='text-[20px]'>Dashboard</Link>
        <Link to="/" className='text-[20px]'>Registration</Link>
       
            { (loggedUser) ?  <Link to="/login" className='text-[20px]' onClick={logout}>Logout</Link> : <Link to="/login" className='text-[20px]'>Login</Link>}
        
    </div>
  )
}

export default Header