import React, {Component, SyntheticEvent} from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

class Register extends Component{
    firstName = '';
    lastName = '';
    email = '';
    password = '';
    passwordConfirm = '';
    state = {
        redirect: false
    };

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await axios.post('register', {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            password_confirm: this.passwordConfirm,
        })

        this.setState({
            redirect: true
        });
    }

    render() {
        if (this.state.redirect) {
            return <Navigate to='/login'/>
        }
    return(
        <main className="form-signin">
        <form onSubmit={this.submit}>
            <h1 className="h3 mb-3 fw-normal">Please register</h1>

            <div className="form-floating">
                <input type="text" className="form-control" id="firstName" placeholder='first name' onChange={e => this.firstName = e.target.value}/>
                <label htmlFor="firstName">First name</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="lastName" placeholder='last name' onChange={e => this.lastName = e.target.value}/>
                <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => this.email = e.target.value}/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => this.password = e.target.value}/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPasswordRepeated" placeholder="Password" onChange={e => this.passwordConfirm = e.target.value}/>
                <label htmlFor="floatingPasswordRepeated">Password confirm</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
    </main>

    );
    }

}

export default Register;