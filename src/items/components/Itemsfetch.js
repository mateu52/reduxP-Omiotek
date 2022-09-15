import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../reducer';
function Itemsfetch( { getList } ){


    return(
        <div>
            <button onClick={() => getList()}>Odśwież</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getList: () => dispatch(getUsers())
})

export default connect(null,mapDispatchToProps)(Itemsfetch);