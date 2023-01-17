import React from "react";
import {AuthService} from "../services/AuthServices"

interface  LoginProps{
    authService: AuthService
}

export class Login extends React.Component <LoginProps> {
  render(){
    return (
        <div>
          <h2>Please login</h2>
        </div>
    )
  }
}