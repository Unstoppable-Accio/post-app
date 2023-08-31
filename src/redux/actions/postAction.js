import { POSTS_LOADING,POSTS_SUCCESS,POSTS_ERROR } from "./actionTypes";
import axios from "axios";

// action creator: 

export const postsLoading = () => {
    return {
        type: POSTS_LOADING
    }
}

export const postsSuccess = (data) => {
    return {
        type: POSTS_SUCCESS,
        payload: data
    }
}

export const postsError = (error) => {
    return {
        type: POSTS_ERROR,
        payload: error
    }
}

export function fetchPosts(){
        return (dispatch)=>{
            dispatch(postsLoading());
            axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
            .then(response => (dispatch(postsSuccess(response.data))))
            .catch(error => (
                dispatch(postsError(error.message))
            ))
        }
}