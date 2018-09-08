import axios from 'axios'
import { GET_PROFILE, PROFILE_LOADING, GET_ERRORS } from './types';

//get current profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfilLoading());
    axios.get('/api/profile')
    .then(res =>
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        }))
        .catch(err => 
            dispatch({
                type: GET_PROFILE,
                payload: {}
            }))
    //Profile Loading
}

export const setProfilLoading = () => {
    return {
        type: PROFILE_LOADING
    }
}