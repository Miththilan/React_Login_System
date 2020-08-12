import React, { Component } from 'react'

import {Link} from "react-router-dom"

class LoginFront extends Component {

    constructor(){
        super();
        this.state={
            err:''

        }
    }

    login(e){
        e.preventDefault();
        var username=e.target.elements.username.value;
        var password=e.target.elements.password.value;
        if(username==="react" && password==="1234"){
            this.props.history.push('/Welcome/' + username)

        }
        else{
                this.setState({
                    err:'Invalid'
                })

        }


    }
    render() {
        let format={
            color:"red"
        }
        
        return (
            
        
                <div className="col-md-5">

                        <h4 className="col-md-5"><strong>Login</strong></h4>
                        <span style={format}>{this.state.err !=''? this.state.err :''}</span>
                        <form method="post" onSubmit={this.login.bind(this)}> 
                            <div className="form-group">
                                <input type="text" name="username" className="form-control" placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="form-control" placeholder="Password"/>
                            </div>
<br/>
                            <input className="btn btn-outline-primary text-uppercase mt-1" type="submit" value="Login"/>
                            
                            
                        </form>
                </div>
            
            

        )
    }
}
export default LoginFront;