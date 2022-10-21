import React, { useState } from 'react'

export const useForm = (initialState = {}) => {

    const [formState, setFormState] = useState(initialState)

    const onInputChange = ({target}) =>{
        const {value, name} = target
        setFormState({
            ...formState,
            [name] : value
        })
    }

    const onResetForm = () =>{
        setFormState(initialState)
    }

    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        setFormState
    }
}


