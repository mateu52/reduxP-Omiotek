import React from 'react';
import { connect, connnect } from 'react-redux';
import { fetchData, selectUsers, addUser } from '../reducer';
import ItemsLists from './ItemsLists';

function Items({ numValue, addData, addUser }){
    console.log(numValue)
    console.log(addUser)

    return(
        <div className="container">
            <h4>open list</h4>
            <button onClick={() => addData()}>add 1</button>
            
            <ItemsLists items={numValue} /> 
        </div>
    )
}

function mapStateToProps(state){
    return{
        numValue: selectUsers(state)
    };
}
function mapDispatchToProps(dispatch){
    return{
        addData: () => dispatch(fetchData()),
        addUser: () => dispatch(addUser())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);