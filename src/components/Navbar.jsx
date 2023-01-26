import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    function handleForm(e){
        e.preventDefault();
        let name = e.target.username.value
        let city = e.target.hometown.value
        props.updateUser(name, city)
        e.target.username.value = '';
        e.target.hometown.value = '';
    };
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                {   
                    props.city && props.name ?
                    <Link className="navbar-brand" to='/'>Welcome {props.name} from {props.city}</Link> :
                    <Link className='navbar-brand' to='/'>Welcome Stranger</Link>
                }

                    <Link className='nav-link text-primary fw-bold fs-5' to="/">Home</Link>
                    <Link className='nav-link text-warning fw-bold fs-5' to="/buttons">Buttons</Link>
                    <Link className='nav-link text-success fw-bold fs-5' to="/standings">Standings</Link>
                    <Link className='nav-link text-secondary fw-bold fs-5' to="/register">Register</Link>


                <form action='' className='row' onSubmit={handleForm}>
                    <div className="col">
                        <input type='text' name='username' className='form-control' placeholder='Enter Your Name'/>
                    </div>
                    <div className="col">
                        <input type='text' name='hometown' className='form-control' placeholder='Enter Your Hometown'/>
                    </div>
                    <div className="col">
                        <input type='submit' className='btn btn-success'/>
                    </div>
                </form>
            </div>
        </nav>
  )
}