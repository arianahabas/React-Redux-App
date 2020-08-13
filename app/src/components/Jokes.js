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
            <div className='block'>
                <div className='hero is-half
                 has-background-black'>
                     <div className="container">
                         <br/>
                         <h1 className='title is-1 '> JOKES ON YOU 🤣  </h1>
                         <br/>
                        {props.isLoading ? <h2> Loading jokes now</h2> : null}
                        {props.error ? <h2> Error</h2> : null}
                    </div>
                </div>
            </div>

            <div className='section has-background-light'>
                <div className="container">
                    <div className="columns">
                    <div className='column'>
                        {props.jokes.map(joke => (
                            
                                <div className="notification is-primary">
                                    <p className='title is-3' key={joke.id} >{joke.setup}</p>
                                    <p >{joke.punchline}</p> 
                                </div>
                           
                        ))}
                      </div>
                    </div>
                </div>
            </div>
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