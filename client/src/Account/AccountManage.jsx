/*
Top level user account management interface.
Required props:
- username - username string of currently
logged in user
- changePasswordRedirect - function to redirect user
to change password interface
- deleteRedirect - function to redirect user to
delete account interface
*/

import React, {Component} from "react"

class AccountManage extends Component{
    constructor(props){
        super(props)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleChangePassword(event){
        this.props.changePasswordRedirect()
    }
    handleDelete(event){
        this.props.deleteRedirect()
    }
    render(){
        return(
            <div>
                <h3>Manage your account</h3>
                <p>You are logged in as <strong>{this.props.username}</strong></p>
                <button type="button" onClick={this.handleChangePassword}>Change Password</button>
                <button type="button" onClick={this.handleDelete}>Delete Account</button>
            </div>
        )
    }
}

export default AccountManage