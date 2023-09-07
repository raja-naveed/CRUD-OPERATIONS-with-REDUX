import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from '../UserReducer';



const Home = () => {
  const users  = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser({id}));
    console.log(id);

  }
  
  return (
    <div className='container'>
      <h1>CRUD OPERATIONS</h1>
      
      
      <Link to='/create' className='btn btn-success my-3'>Create +</Link>
      
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/edit/${user.id}`} className='btn btn-primary mx-2'>Edit</Link>
                <button className='btn btn-danger'
                onClick={() => handleDelete(user.id)} 
                >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>


      </table>
      
    </div>
  )
}

export default Home
