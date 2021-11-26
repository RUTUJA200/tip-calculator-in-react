import React from 'react'
import './style.css'

const style = {
    btnProps : {
        backgroundColor : 'red',
        color : 'yellow',
        padding : '5px',
        borderRadius : '8px',
        borderStyle : 'none',
        marginBottom : '5px'
    },

    tablePadding  : {
        paddingLeft : '50px',
        paddingRight : '50px'
    },

    divProps : {
        textAlign : 'center',
        marginTop : '15px'
    },

    resetBtn : { 
        backgroundColor : '#ff781a',
        color : 'white',
        padding : '5px',
        borderRadius : '4px',
        borderStyle : 'none',
        marginLeft : '5px',
        marginTop : '5px'
    }
}


export default class Output extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            totaltip : ''
            
        }  
    }
    calculateTip = () => {
        const total = this.props.custDetails.reduce((sum,item) => {
            return sum + Number((item.feedback * this.props.billAmount)) 
        },0)
        this.setState({totaltip : total})
    }
    
    resetForm = () => {
        this.setState(this.props.baseState)
    }

    render(){
        return(
            <div>
                {this.props.custDetails.length > 0 && 
                <div>
                    <div style={style.divProps}>
                        <b>Customer List</b>
                    </div>
                    <div style={{textAlign : 'left'}}>
                        <ul>
                        {this.props.custDetails.map((item,index) => {
                            return <li key={index}>
                                {`${item.cname} offering a tip of ${item.feedback * this.props.billAmount} rupee`}
                            </li>

                            })}
                        </ul>
                    </div>
                </div> }
                <input style={{...style.btnProps,...style.divProps}} type="button" onClick={this.calculateTip} value="Calculate Tip & Customer"></input>
                {this.state.totaltip && 
                <div>
                    <table>
                        <th>
                            <tr>
                                <td>Total Customer</td>
                                <td style={style.tablePadding}>Tip</td>
                            </tr>
                            <tr>
                                <td>{this.props.custDetails.length}</td>
                                <td>{this.state.totaltip}</td>
                            </tr>
                        </th>
                    </table>
                </div> }
                <br/>
                <button style={style.resetBtn} onClick={this.resetForm}>Reset</button>
            </div>
        )
    }
}