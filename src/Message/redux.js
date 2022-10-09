import React from "react";
const INFO = 'INFO';
const WARNING = 'WARNING';
const DANGER = 'DANGER';
const TOZERO = 'TOZERO';
const MESSAGE = 'MESSAGE';
const GET_FORM = 'GET_FORM';
const FORM_ERROR = 'FORM_ERROR';

export const info = () => ({
    type: INFO, payload: 'pobrano z API'
})
export const warning = () => ({
    type: WARNING, payload: 'uwaga, dodano użytkownika'
})
export const danger = () => ({
    type: DANGER, payload: 'uwaga, zresetowano liste'
})
export const zero_msg = payload => ({
    type: TOZERO, payload
})
export const message = payload => ({
    type: MESSAGE, payload
})
export const form_msg = () => ({
    type: GET_FORM, payload : 'Wysłano formularz'
})
export const fetch_error = () => ({
    type: FORM_ERROR, payload: 'nie Udało się wysłać formularza...'
})

export function close_btn(){
    return (    
            <div>
                <p>x</p>
            </div>
        )
}

const initialState = {
    info: '',
    message: '',
    warning: '',
    danger: '',
    fetch_form: '',
    form_error: ''
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case INFO:
            return {...state, info: action.payload}
        case WARNING:
            return {...state, warning: action.payload}
        case DANGER:
            return {...state, danger: action.payload}
        case TOZERO:
            return {...state, danger: '', warning:'', 
                        info:'', fetch_form:'', form_error:''}
        case MESSAGE:
            return {...state, message: action.payload}
        case GET_FORM:
            return {...state, fetch_form: action.payload}
        case FORM_ERROR:
            return {...state, form_error: action.payload}
        default:
            return state;
    }
}

export const add_Info = () => {
    return function(dispatch){
        dispatch(info());
    }
}
export const add_Warning = () => {
    return function(dispatch){
        dispatch(warning())
    }
}
export const add_Danger = () => {
    return function(dispatch){
        dispatch(danger())
    }
}
export const resetState = () => {
    return function(dispatch){
        dispatch(zero_msg())
    }
}
export const formState = () => {
    return function(dispatch){
        dispatch(form_msg())
        {console.log("hello")}
    }
}
export const formStateFail = () => {
    return function(dispatch){
        dispatch(fetch_error())
        dispatch(warning())
        {console.log("hello")}
    }
}

