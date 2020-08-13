import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchJokes } from '../store'
 


const Jokes = (props) => {

    useEffect(() => {
        //call an action creator that is in charge of fetching data
        props.fetchJokes()
    },[])


    return (
        <div>
            <h1> JOKES </h1>
            {props.isLoading ? <h2> Loading jokes now</h2> : null}
            {props.error ? <h2> Error</h2> : null}
            {props.jokes.length > 0 ? (
                 <div>
                  {props.jokes.map((joke) => (
                      <div>
                    <h2 key={joke.id}>{joke.setup}</h2>
                    <h3>{joke.punchline}</h3>
                 </div>
                     ))}
        </div>
      ) : null}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
       jokes: state.jokes,
       isLoading: state.isLoading,
       error: state.error 
    }
}

export default connect(mapStateToProps, { fetchJokes })(Jokes)