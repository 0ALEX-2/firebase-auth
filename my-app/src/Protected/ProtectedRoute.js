import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../firebase/FirebaseConfig'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = (props) => {
    const {Dashboard}=props
    const navigate=useNavigate()

    useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
        if(!user){
           
            navigate("/login")
        }
      })
    },[])
  return (
    <div>
        <Dashboard/>
    </div>
  )
}

export default ProtectedRoute