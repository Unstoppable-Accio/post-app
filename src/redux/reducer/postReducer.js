import { POSTS_LOADING,POSTS_SUCCESS,POSTS_ERROR } from "../actions/actionTypes";


const initialState = {
    loading: false,
    error: "",
    data: []
}

const postReducer = (state = initialState, action) => {
         if(action.type === POSTS_LOADING){
            return {
                ...state,
                loading: true
            }
        }
        else if(action.type === POSTS_SUCCESS){
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        }
        else if(action.type === POSTS_ERROR){
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        return state;
        
         
}

export default postReducer;