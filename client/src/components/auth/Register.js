import React, { Component } from 'react'
import classnames from 'classnames'
import axios from 'axios'

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username:'',
            password:'',
            errors:{}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();

        

        const newUser = {
            username: this.state.username,
            password: this.state.password    
        };

        axios
            .post('/api/users/register', newUser)
            .then(res => console.log(res.data))
            .catch(err => this.setState({ errors: err.response.data}))
    }

    render() {
        const { errors } = this.state;

        return (         
            <div className='register'>
 
                <div className='container'>
                    <div className='row'>
                    <div className='col-md-8 m-auto'>
                    <h1 className='display-4 text-center'>Sign Up</h1>
                    <p className='lead text-center'>
                    Can you solve our town mystery? No time to waste!
                    </p>
                    <form onSubmit={this.onSubmit}>




                        {/* USERNAME */}
                        <div className='form-group'>
                        <input
                        type='text'
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.username
                        })}
                        placeholder='Name'
                        value={this.state.username}
                        name='username'                        
                        onChange={this.onChange}                       
                        />
                        {errors.username && (
                        <div className="invalid-feedback">{errors.username}</div>
                        )}
                        </div>



                        {/* PASSWORD */}
                        <div className='form-group'>
                        <input
                        type='password'
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.password
                        })}                        
                        placeholder='Password'
                        value={this.state.password}
                        name='password'
                        onChange={this.onChange}
                            />
                        {errors.password && (
                        <div className="invalid-feedback">{errors.password}</div>
                        )}
                      
                        </div>

                        <input type="submit" className="btn btn-info btn-block mt-4" />


                    </form>
                    </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Register;