import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { zero_msg } from './redux';
import styles from'./style.css';
//do wyświetlania state.info
function Message({ info, warning, danger, closeMSG, form_form, form_error }){
    useEffect(() => {
        
        setTimeout(() => {
            closeMSG()
        }, 10000);
    })
    const handleClick = () => {
        
        
        return   <div>
                    <button onClick={() => closeMSG()}>X</button>
                    <p className='info'>{info}</p>
                    <p className='warning'>{ warning }</p>
                    <p className='danger'>{ danger }</p>
                    <p className='info'>{form_form}</p>
                    <p className='danger'>{form_error}</p>
                </div>
    }
    return(
        <div className='table'>
                {
                    info || warning || danger === null ? handleClick() : <p></p>
                } 
                
        </div>
    )
}
function mapStateToProps(state){
    return{
        info: state.message.info,
        warning: state.message.warning,
        danger: state.message.danger,
        form_form: state.message.fetch_form,
        form_error: state.message.form_error
    };
}

function mapDispatchToProps(dispatch){
    return{
        closeMSG: () => dispatch(zero_msg())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Message);