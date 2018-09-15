import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {loginUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import './Login.css'
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



  componentDidMount(){
      if(this.props.auth.isAuthenticated){
          this.props.history.push('/newspaper');
      }
  }

  componentWillReceiveProps(nextProps){
      if(nextProps.auth.isAuthenticated){
          this.props.history.push('/newspaper');
      }
      if(nextProps.errors){
          this.setState({ errors: nextProps.errors});
      }
  }

  onSubmit(e) {
    e.preventDefault();
  

    const userData = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

   
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <p className="display-4 text-center">We Appreciate Your Help</p>
              <p className="lead text-center">
                Welcome Back, Please Tell Us You Name 
              </p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  id='lightgrey'
                  placeholder="Username"
                  name="username"
                  type="username"
                  value={this.state.username}
                  onChange={this.onChange}
                  error={errors.username}
                />

                <TextFieldGroup
                  id='lightgrey'
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(mapStateToProps, { loginUser })(Login);