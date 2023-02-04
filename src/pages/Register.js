import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const { name, email, password, password_confirmation } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password_confirmation) {
            console.error('Password Tidak sama periksa kembali');
            return;
        }
        const newUser = { name, email, password, password_confirmation };
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const body = JSON.stringify(newUser);
            const res = await axios.post(
                'https://basic-book-crud-e3u54evafq-et.a.run.app/api/register',
                body,
                config
            );
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
   


<div className='d-flex align-items-center vh-100'>
<div className='card mx-auto' style={{ width: '400px' }}>
    <div className='card-body'>
        <h4 className='card-title text-center mb-4'>Register</h4>
        <form onSubmit={onSubmit}>
            <div className='form-group'>
            <input
             type='text'
             placeholder='Name'
             name='name'
             value={name}
             onChange={onChange}
             className='form-control'
           />
            </div>
            <div className='form-group'>
            <input
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={onChange}
            className='form-control'
          />
            </div>
            <div className='form-group'>
            <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onChange}
            className='form-control'
          />
            </div>
            <div className='form-group'>
            <input
            type='password'
            placeholder='Confirmation Password'
            name='password_confirmation'
            value={password_confirmation}
            onChange={onChange}
            className='form-control'
          />
            </div>
            <input type='submit' value='Register' className='btn btn-primary' />
            <div className='text-center mt-3'>
                Belum memiliki akun?{' '}
                <a href='/login'>Sudah Punya akun</a>
            </div>
        </form>
    </div>
</div>
</div>
    );
};

export default Register;
