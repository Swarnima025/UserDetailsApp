import React from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
export default function Details() {
  const userData = useSelector((state)=>state.viewDetails)
  const navigate = useNavigate()
  return (
    <>
    <button onClick={()=>{navigate('/')}}>Home</button>
    <div className='details'>
        <h5>Name: {userData?.currentUser?.firstName}</h5>
        <h5>Gender: {userData?.currentUser?.gender}</h5>
       <h5>Phone No. : {userData?.currentUser?.phone}</h5>
       <h5>Email id: {userData?.currentUser?.email}</h5> 
       <h5>BirthDate: {userData?.currentUser?.birthDate}</h5>
       <h5>university: {userData?.currentUser?.university}</h5>




    </div>
    </>
  )
}