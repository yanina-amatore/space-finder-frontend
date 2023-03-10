
import React, { SyntheticEvent } from "react";
import {AuthService} from "../services/AuthServices"

interface  LoginProps{
    authService: AuthService
}

interface  LoginState{
    userName: string,
    password: string,
    logginAttempted: boolean,
    logginSuccesfull: boolean
}

interface CustomEvent {
  target: HTMLInputElement
}
export class Login extends React.Component <LoginProps,LoginState> {

   state: LoginState = {
    userName: "",
    password: "",
    logginAttempted: false,
    logginSuccesfull: false
  }
  
  private setUsername(event: CustomEvent){
    this.setState({userName: event.target.value})
    
  }
  private setPassword(event: CustomEvent){
    this.setState({password: event.target.value})
  }

  private async handleSubmit(event: SyntheticEvent){
    event.preventDefault()
    const result = await this.props.authService.login(
      this.state.userName,
      this.state.password
    )
    if (result){
      console.log(result)
    }else{
      console.log('wrong login')
    }
  }

  render(){
    return (
        <div>
          <h2>Please login</h2>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input value ={this.state.userName} onChange={ e => this.setUsername(e)}/><br/>
            <input value ={this.state.password} onChange={ e => this.setPassword(e)} type='password'/><br/>
            <input type= 'submit'/>

          </form>
        </div>
    )
  }
}