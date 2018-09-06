import React, { Component } from 'react';
import classnames from 'classnames';
// import axios from 'axios';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
  }

    // const user = {
    //   email: this.state.username,
    //   password: this.state.password
    // };

   
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
            <div className='register'>
 
                <div className='container'>
                    <div className='row'>
                    <div className='col-md-8 m-auto'>
                    <h1 className='display-4 text-center'>Log In</h1>
                    <p className='lead text-center'>
                    Can you solve our town mystery? No time to waste!
                    </p>
                    <form onSubmit={this.onSubmit}>

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
                        </div>
                        <div className='form-group'>
                        <input
                        type='password'
                        className={classnames('form-control form-control-lg', {
                            'is-invalid': errors.username
                        })}
                        placeholder='Password'
                        value={this.state.password}
                        name='password'
                        onChange={this.onChange}

                        
                        />
                   
                        

                        
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

export default Login;