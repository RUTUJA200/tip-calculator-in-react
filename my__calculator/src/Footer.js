import React from 'react'

const style = {
    fixedFooter : {
        backgroundColor: '#4da696',
        textAlign: 'center',
        marginTop : '10px',
        padding : '5px'
    },
    fontFamily : {
        fontFamily : '-webkit-pictograph',
        fontSize : '12px'
    }
}

export default class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <footer style={{...style.fixedFooter,...style.fontFamily}}>
                    @2021 TIP-CALCULATOR
                </footer>
            </div>
        )
    }
}