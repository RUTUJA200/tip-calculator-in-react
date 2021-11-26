import React from 'react'
import Output from './Output'

const style = {
    divProps : {
        textAlign : 'center'
    },

    inputMargin : {
        marginLeft : '10px'
    },

    marginTop : {
        marginTop : '20px'
    },
    
    btnProps : {
        backgroundColor : '#007acc',
        color : 'white',
        padding : '5px',
        borderRadius : '4px',
        borderStyle : 'none'
    },

    textProps : {
        padding : '5px',
        borderRadius : '2px',
        borderStyle : 'none'
    },

    fontFamily : {
        fontFamily : '-webkit-pictograph'
    }
}

export default class Input extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            custDetails : [],
            cname : '',
            billAmount : '',
            feedback : ''
        }

        this.baseState = this.state
    }
        
    render(){
        return(
            <div style={style.divProps}>
                <div style={style.marginTop}>
                    <label style={style.fontFamily} htmlFor="amount">Enter your bill amount</label>
                    <br/><br/>
                    <input type="number" style={style.textProps} value={this.state.billAmount} onChange={(e) => {this.setState({billAmount : e.target.value})}}></input>
                    <br/><br/>
                    <hr/>
                    <br/><br/>
                    <div>
                        <label style={style.fontFamily} htmlFor="feedback">How was the service</label>
                        <select style={{...style.inputMargin,...style.textProps}} onChange={(e) => this.setState({feedback : e.target.value})}>
                            <option selected disabled>--Choose an option--</option>
                            <option value='0.2'>Excellent</option>
                            <option value='0.1'>Moderate</option>
                            <option value='0.1'>Bad</option>
                        </select>
                        <input type="text" style={{...style.inputMargin,...style.textProps}} placeholder="Customer Name" value={this.state.cname} onChange={(e) => this.setState({cname : e.target.value})}></input>
                        <br/><br/>
                        <input type="button" style={{...style.inputMargin,...style.btnProps}} value="Add Customer" onClick={() => this.setState({custDetails :[...this.state.custDetails,{cname : this.state.cname , feedback : this.state.feedback}]})}></input>
                    </div>
                </div>
                <Output custDetails={this.state.custDetails} cname={this.state.cname} feedback={this.state.feedback} billAmount={this.state.billAmount}/>
            </div>
        )
    }
}