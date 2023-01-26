import React, { Component } from 'react'

export default class Register extends Component {

    handleRegister = event => {
        event.preventDefault();
        let password = event.target.password.value
        let confirmPass = event.target.confirmPass.value
        if (password !== confirmPass){
            console.warn('Passwords do not match');
        } else {
            console.log('Passwords match')

            let myHeaders= new Headers();
            myHeaders.append('Content-Type', 'application/json');

            let formData = JSON.stringify({
                username: event.target.username.value,
                email: event.target.email.value,
                password

            })
            fetch("http://127.0.0.1:5000/api/users", {
                method: 'POST',
                headers: myHeaders,
                body: formData
            })

            .then(res => res.json())
            .then(data => {
                if (data.error){
                    console.error(data.error)
                } else {
                    console.log(data)
                }
            })

        }
    }


    render() {
        return (
            <>
                <h3 className="text-center mt-3">Register</h3>
                <form action="" onSubmit={this.handleRegister}>
                    <div className="form-group">
                        <input type="text" className="form-control my-3" placeholder='Enter Email' name='email' />
                        <input type="text" className="form-control my-3" placeholder='Enter Username' name='username' />
                        <input type="password" className="form-control my-3" placeholder='Enter Password' name='password' />
                        <input type="password" className="form-control my-3" placeholder='Confirm Password' name='confirmPass' />

                        <input type="submit" value="Register" className='btn btn-info w-100' />
                    </div>
                </form>
            </>
        )
    }
}
