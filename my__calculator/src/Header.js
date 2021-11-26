import React from 'react'


const style = {
    headMargin : {margin : '2px'},
    divProps : {
        textAlign : 'center',
        backgroundColor : '#4da6ff'
    },

    fontFamily : {
        fontFamily : '-webkit-pictograph'
    }
    
}

export default class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={style.divProps}>
                <h3 style={{...style.headMargin,...style.fontFamily}}>Tip Calculator</h3>
                <p style={{...style.headMargin,...style.fontFamily}}>Build in React</p>
            </div>
        )
    }
}