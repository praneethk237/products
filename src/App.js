import React, { Component } from 'react';
import RestCall from './RestCall';


export default class App extends Component
{

    constructor(props)
    {
        super(props)
        this.state =
        {
            query : "",
            query1 : "iphone*",
        }
    }
    handleClick = () =>
    {
        this.setState({ query1: this.state.query })
    }
    setQuery = (event) =>
    {
        this.setState({ query:event.target.value})
    }
  
    render()
    {
        return (
            <>
                <div style={{ display: "flex", justifyContent: "center" }}><h1>Search for products</h1></div>
                <div style={{ display: "flex", width: "100% ", justifyContent: "center", background: "white" }}>
                    <input type="text" onChange={this.setQuery} value={this.state.query} />
                    <button onClick={this.handleClick}>submit</button>
            </div>
                <div>
                    <table style={{ background: "white", margin: "auto", marginTop: "50px", borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                <td style={{ border: "1px solid black" }}>title</td>
                                <td style={{ border: "1px solid black" }}>description</td>
                                <td style={{ border: "1px solid black" }}>price</td>
                            </tr>

                        </thead>
                        <tbody>
                            <RestCall query1={this.state.query1} />
                        </tbody>
                     </table>
                </div>
            </> 

        );
    }
}