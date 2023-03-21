

import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import {Link,useNavigate} from 'react-router-dom';
import { setData,fetchUserDetails,deleteUser } from '../redux/slices/viewDetails';
const ListContacts = () =>  {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const listContacts = useSelector((state)=>state.viewDetails)
  console.log(listContacts)
   const [currentUser,setCurrentUser] = useState(0)
  //  const [contacts,setContacts] = useState([])
     const [query,setQuery] = useState("");
  const updateQuery =(query)=>{
      setQuery(query.trim());
  }
  const userList = query=== "" ? listContacts.data : listContacts.data.filter((c) => c.firstName.toLowerCase().includes(query.toLowerCase()));
  const clearQuery = () => {
    updateQuery("");
  }
  useEffect(()=>{
    console.log('hellopp')
    if(listContacts.firstTime){
    dispatch(fetchUserDetails())
    }
},[])
const handleClick = (userId)=>{
  setCurrentUser(userId)
}
const dispatchUser = (userData)=>{
  dispatch(setData(userData))
  navigate(`/viewDetails/userId=${userData.id}`)
}
const handleDelete = (userId)=>{
  dispatch(deleteUser(userId))
}
    return(
    <div className='list-contacts'>
      <div className='list-contacts-top'>
        <input className='search-contacts' type="text" placeholder='Search Contacts' value={query}
        onChange ={(e)=>updateQuery(e.target.value)} />
              <Link to="/create" className="add-contact">Add Contacts</Link>

      </div>
      {
        userList.length !== listContacts.data.length && (
          <div className='showing-contacts'>
            <span>Now Showing {userList.length} of {listContacts.data.length}</span>
            <button className='show-all' onClick={()=> clearQuery()}>Show All</button>
          </div>
        )
      }
       <tr className="heading">
        <th>Avatar</th>
      <th>FirstName</th>
      <th>LastName</th>
      <th>Age</th>
    </tr>
  <ol>
   
  {listContacts?.data?.map((user) => 
  <li key={user.id} className="contact-list-item">
     <tr className='list-item' onClick={()=>{handleClick(user.id)}}>
                   <td> <img className='contact-avatar' src={user.image}/></td>
                   <td> {user.firstName}</td>
                   <td> {user.lastName}</td> 
                   <td> {user.age}</td>
     </tr>
                    <div className='user-details'>
                    <button className="pop-btn" onClick={()=>{dispatchUser(user)}}>
                        View Details
                    </button>
                    <button className="contact-remove" onClick={()=>{handleDelete(user.id)}}>
                        Delete User
                    </button>
                  </div>
            </li>
            )}


    </ol>
   </div>
  )
} 


export default ListContacts;