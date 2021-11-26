import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Input from './Input'

const style = {
    formstyle : {
        width : '600px',
        marginLeft : 'auto',
        marginRight : 'auto',
        marginTop : '50px',
        backgroundColor :  '#ffbbff',
    }
}

export default class Form extends React.Component{
    constructor(props){
        super(props)
        
    }

    

    render(){
        return(
            <div>
                <form style={style.formstyle}>
                    <Header/>
                    <Input/>
                    <Footer/>
                </form>
            </div>
        )
    }
}
