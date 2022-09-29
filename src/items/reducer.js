import { add_Info, add_Warning, storeReset } from "../Message/redux";


const REQ = 'REQ';
const SUC = 'SUC';
const FAIL = 'FAIL';
const ADD = 'ADD';
const RESET = 'RESET';


export const request = () => ({ type: REQ })
export const succed = data => ({ type: SUC, payload: data })
export const failed = () => ({ type: FAIL })
export const add = data => ({ type: ADD, payload: data })
export const reset = () => ({ type: RESET })

const initialState = {
    x: []
}
export const fetchUsers = (userCount = 10) => {
    return fetch(`https://randomuser.me/api/?results=${userCount}`)
        .then((response) => response.json());
}
export const getUsers = () => (dispatch) => {
    dispatch(request());
    dispatch(add_Info());
    fetchUsers()
        .then((data) => {
            dispatch(succed(data.results))
        })
        .catch(error => {
            dispatch(failed())
        })
}
export const addUser = () => (dispatch) => {
    dispatch(request());
    dispatch(add_Warning())
    fetchUsers(1)
        .then((data) => {
            dispatch(add(data.results[0]))
        })
        .catch(error => {
            dispatch(failed())
        })
}
export const fetchData = (valueNum=3) => {
    return function(dispatch){
        dispatch(request())
        // dispatch(info())
        fetch(`https://randomuser.me/api/?results=${valueNum}`)
            .then(response => response.json())
            .then(data => {
                dispatch(succed(data.results))
            })
            .catch(error => {
                dispatch(failed())
            })
    }
}


export default function reducer(state = initialState, action){
    switch(action.type){
        case REQ:
            return {...state}
        case SUC:
            return {...state, x:action.payload}
        case ADD:
            return {...state, x: [...state.x, action.payload]}
        case FAIL:
            return {...state}
        case RESET:
            return {...state, x: []}
        default:
            return state;
    }
}
export const selectUsers = (state) => state.numValue.x || []

