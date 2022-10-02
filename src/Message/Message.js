import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { zero_msg } from './redux';
import styles from'./style.css';
//do wyświetlania state.info
function Message({ info, warning, danger, closeMSG }){
    useEffect(() => {
        
        setTimeout(() => {
            closeMSG()
        }, 8000);
    })
    const handleClick = () => {
        
        
        return   <div>
                    <button onClick={() => closeMSG()}>X</button>
                    <p className='info'>{info}</p>
                    <p className='warning'>{ warning }</p>
                    <p className='danger'>{ danger }</p>
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
        danger: state.message.danger
    };
}

function mapDispatchToProps(dispatch){
    return{
        closeMSG: () => dispatch(zero_msg())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Message);