import React, {useState} from 'react'
import PropTypes from 'prop-types';
import {InputGroup, FormControl} from 'react-bootstrap'

export const AddCategory = ({SetCategories}) => {
    const [state, setstate] = useState('')
    const handlerInput = ({target}) => {
        setstate(target.value)
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        if (state.trim().length > 1) {
            SetCategories(idx => {
                return [state, ...idx]
     
             })
             setstate('')
        }
    }
    return (
        <form onSubmit={handlerSubmit} >
          <InputGroup className="mb-3">
          <FormControl
          placeholder="Search..."
           type="text" 
           value={state} 
           onChange={handlerInput}
          />
        </InputGroup>
        </form>
    )
}

AddCategory.propTypes = {
    SetCategories: PropTypes.func.isRequired
}