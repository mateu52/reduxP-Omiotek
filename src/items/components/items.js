import React, { useEffect } from 'react';
import { connect, connnect } from 'react-redux';
import { getUsers, selectUsers, addUser } from '../reducer';
import ItemsLists from './ItemsLists';

function Items({ numValue, addData, addUSR, actual }){
    console.log(numValue)
    useEffect(() => {
        if(actual.length === 0)
            return addData()
    
        
    },[])
    return(
        <div className="container">
            <h4>open list</h4>
            <button onClick={() => addData()}>add list</button>
            <button onClick={() => addUSR()}>add 1</button>
            
            <ItemsLists items={numValue} /> 
        </div>
    )
}

function mapStateToProps(state){
    return{
        numValue: selectUsers(state),
        actual: state.numValue.x
    };
}
function mapDispatchToProps(dispatch){
    return{
        addData: () => dispatch(getUsers()),
        addUSR: () => dispatch(addUser()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);