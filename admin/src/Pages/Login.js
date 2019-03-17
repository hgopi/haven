import React, { Component } from 'react';
import { LoginPage, FormContainer, H1, LoginInput, LoginButton, BgImage } from '../Styles/style';

class Login extends Component {

    state = {
        username: '',
        password: '',
        hasError: false,
        loginFailed: false
    }

    handleUsernameChange = ($event) => {
        this.setState({ username: $event.target.value, hasError: false });
    }

    handlePasswordChange = ($event) => {
        this.setState({ password: $event.target.value, hasError: false });
    }

    handleSubmit = ($event) => {
        $event.preventDefault();
        const { username, password } = this.state;
        if (!username || !password) {
            this.setState({ hasError: true });
            return;
        }
        this.setState({ loginFailed: false });
        fetch('/api/authenticate', {
            method: 'POST', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify({ username, password })
        })
            .then((res) => res.json())
            .then(res => {
                if (res.status === 200 && res.userfound === true) {
                    this.props.history.push('/dashboard');
                } else {
                    throw Error(res);
                }
            })
            .catch(err => {
                console.log(err)
                this.setState({ loginFailed: true });
            });
    }

    render() {

        const { username, password, hasError, loginFailed } = this.state;

        return (
            <LoginPage>
                <BgImage />
                <FormContainer>
                    <H1>Admin Login</H1>
                    <form onSubmit={this.handleSubmit}>
                        <LoginInput type="text" name="username" value={username} placeholder="Username" onChange={this.handleUsernameChange} />
                        <LoginInput type="password" name="password" value={password} placeholder="Password" onChange={this.handlePasswordChange} />
                        {hasError && <div>Please enter the username and password.</div>}
                        {loginFailed && <div>Incorrect username or password.</div>}
                        <LoginButton>Login</LoginButton>
                    </form>
                </FormContainer>
            </LoginPage>
        )
    }
}

export default Login;