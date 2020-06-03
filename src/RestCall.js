import React, { Component } from 'react';
class RestCall extends Component {
    state = {
        contacts: [],
        con: [],
        
    }
  
      
    componentDidUpdate(props)
    {
        console.log(this.props.query1)
        const url = 'http://localhost:8080/index?query='
        var add = ''
        
            add = this.props.query1
        
        
        const adur = url + add
        console.log(adur)
        fetch(adur)
            .then(res => res.json())
            .then((data) => {
                this.setState({ con: data })
                console.log(this.state.con)
            })
            .catch(console.log)
    }
    render()
    {
    return (
        <>
            
            
            

            {this.state.con.map((product, index) =>
                (
                
                        <tr key={index}>
                        <td style={{border:"1px solid black"}}>{product.title}</td>
                        <td style={{border:"1px solid black"}}>{product.description}</td>
                        <td style={{border:"1px solid black"}}>{product.price}</td>
                        </tr>
                   
            ))}
            

            
        </>
    )
    }
}
export default RestCall