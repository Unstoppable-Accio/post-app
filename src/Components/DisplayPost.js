import React,{useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { postsLoading,postsSuccess,postsError } from "../redux/actions/postAction";
import axios from "axios";
import { fetchPosts } from "../redux/actions/postAction";

const DisplayPost = () => {
    const {loading,error,data} = useSelector(state => state);

    const dispatch = useDispatch();

    // console.log(dispatch)

    console.log({loading,error,data});

    useEffect(() => {
           dispatch(fetchPosts());
    },[dispatch])
    


    // useEffect(() => {
    //       dispatch(postsLoading());
    //       axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
    //       .then(response => (dispatch(postsSuccess(response.data))))
    //       .catch(error => (
    //             dispatch(postsError(error.message))
    //       ))
    // },[])

//     useEffect(() => {
//         dispatch(postsLoading());
//         axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
//         .then(response => (dispatch(postsSuccess(response.data))))
//         .catch(error => (
//               dispatch(postsError(error.message))
//         ))
//   },[dispatch])




    return(
        <div>
            <h1>Display Post</h1>
             {/* {
                loading && <div>Loading...</div>
             } */}
             {
                error && <div>{error}</div>
             }
             {
                    data && data.map(post => (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <hr />
                        </div>
                    ))
             }
        </div>
    )
}

export default DisplayPost;





// console.log(dispatch) // address

// dispatch(postsLoading());
// dispatch(postsSuccess(response.data));
// dispatch(postsError(error.message));