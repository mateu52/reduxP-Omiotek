import e from 'cors';
import React from 'react';
import { connect } from 'react-redux';
import { add_Info, warning } from './redux';
//do wyświetlania state.info
function Message({ info, warning, danger }){
    // const hInfo = () => {

    // }
    return(
        <div>
            <p>{info}</p>
            <p>{ warning }</p>
            <p>{ danger }</p>
        </div>
    )
}

function mapStateToProps(state){
    return{
        info: state.message.info,
        warning: state.message.warning,
        danger: state.message.danger
    };
}

function mapDispatchToProps(dispatch){
    return{
        addInfo: () => dispatch(add_Info()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Message);