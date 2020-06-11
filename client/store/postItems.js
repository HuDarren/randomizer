import axios from 'axios'
// import history from "../history"

const GET_POST = 'GET_POST'

const ADD_POST = 'ADD_POST'

const getPost = data => ({
  type: GET_POST,
  data
})

// const addPost = (data) => ({
//   type: ADD_POST,
//   data,
// })

export const fetchPost = userId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/posts/${userId}`)
      dispatch(getPost(data))
    } catch (error) {
      console.log(error)
    }
  }
}

// export const addPostThunk = (userId, post) => {
//   return async (dispatch) => {
//     try {
//       const {data} = await axios.post(`/api/posts/add/${userId}`, {
//         data: post,
//       })
//       dispatch(addPost(data))
//     } catch (error) {
//       console.log('error')
//     }
//   }
// }

const initialState = []

export default function PostReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POST:
      return action.data
    case ADD_POST:
      return [...state, action.data]
    default:
      return state
  }
}
