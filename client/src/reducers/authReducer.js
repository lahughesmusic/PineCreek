import { SET_CURRENT_USER } from '../actions/types';
import isEmpty from '../validation/is-empty';
import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser } from '../actions/authActions';

const initialState = {
    isAuthenticated: false, 
    user: {}
}

export default function(state = initialState, action){
    switch (action.type) {
        case SET_CURRENT_USER:
        return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            user: action.payload
        }
        default: 
            return state;
            
            

    }
}

//Log user out
export const logoutUser = () => dispatch => {
    //remove token from localStorage
    localStorage.removeItem('jwtToken');
    //remove auth header for future requests
    setAuthToken(false);
    //set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
} 