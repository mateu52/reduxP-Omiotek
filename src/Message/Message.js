import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { add_Info, zero_msg, close_btn, form_message} from './redux';
import styles from'./style.css';
//do wyświetlania state.info
function Message({ message, info, warning, danger, closeMSG }){
    // const hInfo = () => {
    //useEffect - po 5 sekundach uruchomic akcje wyswietlającą tylko stan i zerująca komunikaty
    // }
    useEffect(() => {
        
        setTimeout(() => {
            closeMSG()
        }, 8000);
    })
    const handleClick = () => {
        
        
        return   <button className='close_btn'>X</button>
        
        
    }
    return(
        <div className='table'>
                {
                    info || warning || danger === null ? handleClick() : <p></p>
                } 
                    
                
            {/* <button onClick={closeMSG()}>x</button> */}
                {form_message()}
                <p>{message}sd</p>
                <p className='info'>{info}</p>
                <p className='warning'>{ warning }</p>
                <p className='danger'>{ danger }</p>
        </div>
    )
}
//komponent który się bedzie wywoływał w momencie wyswietlenia stanu true( !=null)
function mapStateToProps(state){
    return{
        info: state.message.info,
        warning: state.message.warning,
        danger: state.message.danger,
        message: state.message.message
    };
}

function mapDispatchToProps(dispatch){
    return{
        // addInfo: () => dispatch(add_Info()),
        closeMSG: () => dispatch(zero_msg()),
        addMSG: () => dispatch(form_message())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Message);