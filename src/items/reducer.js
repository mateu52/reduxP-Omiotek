
const REQ = 'REQ';
const SUC = 'SUC';
const FAIL = 'FAIL';
const ADD = 'ADD';


export const request = () => ({ type: REQ })
export const succed = data => ({ type: SUC, payload: data })
export const failed = () => ({ type: FAIL })
export const add = user => ({ type: ADD, payload: user })


const initialState = {
    x: []
}
export const fetchData = (valueNum=3) => {
    return function(dispatch){
        dispatch(request())
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
export const addUser = (valueNum=1) => {
    return function(dispatch){
        dispatch(request())
        fetch(`https://randomuser.me/api/?results=${valueNum}`)
            .then(response => response.json())
            .then(data => {
                dispatch(add(data.results[0]))
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
        default:
            return state;
    }
}
export const selectUsers = (state) => state.numValue.x || []

