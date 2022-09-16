import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers, reset } from '../reducer';
function Itemsfetch( { getList, resetList } ){
    
    return(
        <div>
            <button onClick={() => getList()}>Odśwież</button>
            <button onClick={() => resetList()}>resetuj</button>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    getList: () => dispatch(getUsers()),
    resetList: () => dispatch(reset())
})

export default connect(null,mapDispatchToProps)(Itemsfetch);