import { useState } from 'react'
import PropTypes from 'prop-types'



export const CounterApp = ({ value }) => {
    
    const [ contador, setCounter  ] = useState(value)

    const handleAdd = () => {
        setCounter( contador + 1)
    }
    const decrement = () => {
        setCounter( (c) => c - 1);
    }
    const reset = () => {
        setCounter(value);
    }
    
    
    return(
        <>
            <h1>CounterApp</h1>
            <h2> { contador } </h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={decrement}>-1</button>
            <button  aria-label='btn-reset' onClick={reset}>Reset</button>
        </>
        
    )
}  

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}