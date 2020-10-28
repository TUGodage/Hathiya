import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Alert, Button, FormGroup, Label, InputGroup, InputGroupAddon, Input, InputGroupText,} from 'reactstrap';
import Widget from '../../components/Widget';
import { loginUser } from '../../actions/user';
import microsoft from '../../images/microsoft.png';
import axios from 'axios';



class Login extends React.Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    };

    static isAuthenticated(token) {
        if (token) return true;
    }

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };

        this.doLogin = this.doLogin.bind(this);
        this.changeUserName = this.changeUserName.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    changeUserName(event) {
        this.setState({ username: event.target.value });
    }

    // changeEmail(event) {
    //     this.setState({ email: event.target.value });
    // }

    changePassword(event) {
        this.setState({ password: event.target.value });
    }

    doLogin(e) {
        e.preventDefault();
          //this.props.dispatch(loginUser({ username: this.state.username, password: this.state.password }));

        const obj = {
            username: this.state.username,
            password : this.state.password
        };

        
    

        axios.post('http://localhost:5000/users/login-customer', obj)
        .then(response => {
                    console.log(response);
            
            if(response){
               
               this.props.dispatch(loginUser({ username: obj.username, password: obj.password }));
               this.props.history.push('app/main/dashboard');
               console.log('logged');  
               
            //localStorage.setItem("usertoken", response.data);
            }
            
            return response;

        })
        .catch((err) => {
            console.log(err);
            
          });
    }

    signUp() {
        this.props.history.push('/register');
    }

    render() {
        

        const { from } = this.props.location.state || { from: { pathname: '/app' } }; // eslint-disable-line

        // cant access login page while logged in
        if (Login.isAuthenticated(JSON.parse(localStorage.getItem('authenticated')))) {
            return (
                <Redirect to='app/main/dashboard' />//changed{from}
            );
        }

        return (
            <div className="auth-page">
                <Container>
                    <Widget className="widget-auth mx-auto" title={<h3 className="mt-0">Login</h3>}>
                        <p className="widget-auth-info">
                            Use your user name to sign in.
                        </p>
                        <form onSubmit={this.doLogin}>
                            {
                                this.props.errorMessage && (
                                    <Alert className="alert-sm widget-middle-overflow rounded-0" color="danger">
                                        {this.props.errorMessage}
                                    </Alert>
                                )
                            }
                            <FormGroup className="mt">
                                <Label for="username">User Name</Label>
                                <InputGroup className="input-group-no-border">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="la la-user text-white"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input id="username" className="input-transparent pl-3" value={this.state.username} onChange={this.changeUserName} type="username"
                                           required name="username" placeholder="User name"/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <InputGroup className="input-group-no-border">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="la la-lock text-white"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input id="password" className="input-transparent pl-3" value={this.state.password}
                                           onChange={this.changePassword} type="password"
                                           required name="password" placeholder="Password"/>
                                </InputGroup>
                            </FormGroup>
                            <div className="bg-widget auth-widget-footer">
                                <Button type="submit" color="danger" className="auth-btn"
                                        size="sm" style={{color: '#fff'}}>
                                  <span className="auth-btn-circle" style={{marginRight: 8}}>
                                    <i className="la la-caret-right"/>
                                  </span>
                                  {this.props.isFetching ? 'Loading...' : 'Login'}
                                </Button>
                                <p className="widget-auth-info mt-4">
                                    Don't have an account? Sign up now!
                                </p>
                                <Link className="d-block text-center mb-4" to="register">Create an Account</Link>
                                
                            </div>
                        </form>
                    </Widget>
                </Container>
                <footer className="auth-footer">
                    
                </footer>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.auth.isFetching,
        isAuthenticated: state.auth.isAuthenticated,
        errorMessage: state.auth.errorMessage,
    };
}

export default withRouter(connect(mapStateToProps)(Login));


