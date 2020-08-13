import axios from 'axios'

export const FETCHING_JOKES_START = 'FETCHING_JOKES_START'
export const FETCH_JOKES_SUCCESS = 'FETCH_JOKES_SUCCESS'


export const fetchJokes = () => {
    //fetch with an axios
    return (dispatch) => {
        //dispatch FETCHING action
        dispatch({ type: FETCHING_JOKES_START })
        //make an axios call
        axios.get('https://official-joke-api.appspot.com/random_ten')
            .then((res) =>  {
                console.log(res)
                dispatch({type: FETCH_JOKES_SUCCESS, payload: res.data})
            })
            .catch((err)=> console.log(err))
        // inside .then dispatch new action with data
    }
}

//redux thunk

const thunk = (store) => (next) => (action) => {
    if (typeof action === "object") {
      next(action);
    } else if (typeof action === "function") {
      action(store.dispatch);
    }
  };