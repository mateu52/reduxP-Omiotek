import React from 'react';
import { connect } from 'react-redux';
import { getUsers, reset } from '../reducer';
import { add_Danger } from './../../Message/redux';
import Message from '../../Message/Message';
function Itemsfetch( { getList, resetList, msgDanger } ){
    const handleClick = () => {
        return (    
            resetList(),
            msgDanger()
        )
    }


    return(
        <div>
            <button onClick={() => getList()}>Odśwież</button>
            <button onClick={handleClick}>resetuj</button>
            <Message />
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    getList: () => dispatch(getUsers()),
    resetList: () => dispatch(reset()),
    msgDanger: () => dispatch(add_Danger())
})

export default connect(null,mapDispatchToProps)(Itemsfetch);