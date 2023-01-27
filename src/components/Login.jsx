import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

    const navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();
        // Get Form Data
        let username = event.target.username.value;
        let password = event.target.password.value;
        let stringToEncode = `${username}:${password}`;
        let myHeaders = new Headers();
        myHeaders.append('Authorization', `Basic ${btoa(stringToEncode)}`)

        let response = await fetch("http://127.0.0.1:5000/api/token", {
            headers: myHeaders
        })

        if (response.ok){
            let data = await response.json()
            let token = data.token
            let expiration = data.token_expiration

            localStorage.setItem('token', token)
            localStorage.setItem('tokenExp', expiration)

            props.flashMessage('You have successfully logged in', 'success')
            navigate('/')
        } else {
            props.flashMessage('Your username and/or password are incorrect', 'danger')
        }

    }

    return (
        <>
            <h3 className='text-center'>Login</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input type="text" className='form-control my-3' placeholder='Enter Username' name='username'/>
                    <input type="password" className='form-control my-3' placeholder='Enter Password' name='password'/>

                    <input type="submit" value='Log In' className='btn btn-info w-100' />
                </div>
            </form>
        </>
    )
    }
