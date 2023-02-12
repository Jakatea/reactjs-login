import React from "react";
class Login extends React.Component{
    constructor(){
        super();
        this.data={
            email:'',
            password:''
        }
    }
    render(){
        return (
            <div>
                <form>
                    <div>
                        <label>email</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>password</label>
                        <input type="password" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;