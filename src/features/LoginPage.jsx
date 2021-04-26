import React from 'react';
import './Style.css'

export class LoginPage extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="login-body">
            <img src="user_icon.png"/>
            <div className="two-parts">
               
                <h2>Log in</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                 
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <input type="text" className="form-control" name="username" placeholder="Username"value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <a className ="button" href="/user-list">Log in</a>
                        {loggingIn }
                    </div>
                </form>
            </div>
            </div>
              );
            }
        }
        
        