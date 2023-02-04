import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;
    let history = useHistory();

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        const user = { email, password };
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const body = JSON.stringify(user);
            const res = await axios.post(
                'https://basic-book-crud-e3u54evafq-et.a.run.app/api/login',
                body,
                config
            );
            localStorage.setItem('token', res.data.token);
            console.log(res.data.token);
            history.push('/profil');
        } catch (err) {
            console.error(err.response.data);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        history.push('/login');
    };

    return (
        <div className='d-flex align-items-center vh-100'>
            <div className='card mx-auto' style={{ width: '400px' }}>
                <div className='card-body'>
                    <h4 className='card-title text-center mb-4'>Login</h4>
                    <form onSubmit={onSubmit}>
                        <div className='form-group'>
                            <input
                                className='form-control'
                                type='email'
                                placeholder='Email'
                                name='email'
                                value={email}
                                onChange={onChange}
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                className='form-control'
                                type='password'
                                placeholder='Password'
                                name='password'
                                value={password}
                                onChange={onChange}
                            />
                        </div>
                        <input
                            className='btn btn-primary w-100 py-2'
                            type='submit'
                            value='Login'
                        />
                        <div className='text-center mt-3'>
                            Belum memiliki akun?{' '}
                            <a href='/register'>Daftar sekarang</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;