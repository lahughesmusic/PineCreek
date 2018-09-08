import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';
// REGISTER USER
export const registerUser = (userData, history) => dispatch => {

       axios
            .post('/api/users/register', userData)
            .then(res => history.push('/login'))
            .catch(err =>
                dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

//LOGIN USER
export const loginUser = (userData) => dispatch => {
    axios.post('/api/users/login', userData)
    .then(res => {
        //SAVE LOCALSTORAGE
        const { token } = res.data;
        //SET TOKEN TO LOCALSTORAGE
        localStorage.setItem('jwtToken', token);
        //SET TOKEN TO AUTH HEADER
        setAuthToken(token);
        //DECODE TOKEN TO GET USE DATA
        const decoded = jwt_decode(token);
        //SET CURRENT USER
        dispatch(setCurrentUser(decoded));

    })
    .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data

    }));
};

//SET LOGIN USER
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

//LOG USER OUT
export const logoutUser = () => dispatch => {
    //REMOVE TOKEN FORM LOCAL STORAGE
    localStorage.removeItem('jwtToken');
    //REMOVE AUTH HEADER FOR FUTURE REQUEST
    setAuthToken(false);
    //SET CURRENT USER TO {} WHICH WILL SET ISAUTHENTICATED TO FALSE
    dispatch(setCurrentUser({}));
}