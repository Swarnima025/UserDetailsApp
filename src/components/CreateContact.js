import React from 'react'
import { Link } from 'react-router-dom';
import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/core';
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/slices/viewDetails'
import {useNavigate} from 'react-router-dom'
import schema from '../data/schema';
const CreateContact=()=> {
  const dispatch = useDispatch()
  const navigate = useNavigate()
    const handleSubmit = (data)=>{
      dispatch(addUser(data.formData))
      navigate('/');
    
}
  
  return (
    <div>
        <Link className="close-create-contact"  to="/">Back</Link>
        <Form schema = {schema} validator = {validator} onSubmit = {handleSubmit}/>
    </div>
  )
  }

export default CreateContact;