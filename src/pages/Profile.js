import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LogoutButton from './LogoutButton';

const Profil = () => {
  const [user, setUser] = useState({
    name: '',
    email: ''
    });

    useEffect(() => {
      const token = localStorage.getItem('token');
      const config = {
          headers: {
              'Content-Type': 'application/json',
              'x-auth-token': token
          }
      };
  
      axios
          .get('https://basic-book-crud-e3u54evafq-et.a.run.app/api/user', config)
          .then(res => setUser(res.data))
          .catch(err => console.error(err.response.data));
  }, []);
  
  return (
      <div className='d-flex align-items-center vh-100'>
          <div className='card mx-auto' style={{ width: '400px' }}>
              <div className='card-body'>
                  <h4 className='card-title text-center mb-4'>Profil</h4>
                  <div className='form-group'>
                      <label>Nama</label>
                      <input
                          className='form-control'
                          type='text'
                          value={user.name}
                          readOnly
                      />
                  </div>
                  <div className='form-group'>
                      <label>Email</label>
                      <input
                          className='form-control'
                          type='email'
                          value={user.email}
                          readOnly
                      />
                  </div>
                  <LogoutButton />
              </div>
          </div>
      </div>
  );
  
  // ... useEffect and state logic ...

  // return (
  //   <div>
  //     {/* ... display profile data ... */}
  //     <LogoutButton />
  //   </div>
  // );  
};

export default Profil;