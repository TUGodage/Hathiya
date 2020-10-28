import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Alert, Button, FormGroup, InputGroup, Label, InputGroupAddon, Input, InputGroupText } from 'reactstrap';
import Widget from '../../../components/Widget';
import { registerUser, authError, loginUser } from '../../../actions/auth';
import microsoft from '../../../images/microsoft.png';
import Login from '../login';
import axios from 'axios';
import './register.css';

class Register extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            fullname: '',
            email: '',
            password: '',
            confirmPassword: '',
           
            name: ''
        };

        this.doRegister = this.doRegister.bind(this);
        this.changefullname = this.changefullname.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        this.isPasswordValid = this.isPasswordValid.bind(this);
    }

    

    changefullname(event) {
        this.setState({username: event.target.value});
        this.setState({name: event.target.value});
    }

    changeEmail(event) {
        this.setState({email: event.target.value});
    }

    changePassword(event) {
        this.setState({password: event.target.value});
    }

    changeConfirmPassword(event) {
        this.setState({confirmPassword: event.target.value});
    }

    checkPassword() {
        if (!this.isPasswordValid()) {
            if (!this.state.password) {
                this.props.dispatch(authError("Password field is empty"));
            } else {
                this.props.dispatch(authError("Passwords are not equal"));
            }
            setTimeout(() => {
                this.props.dispatch(authError());
            }, 3 * 1000)
        }
    }

    isPasswordValid() {
       return this.state.password && this.state.password === this.state.confirmPassword;
    }

    doRegister(e) {
        e.preventDefault();
        if (!this.isPasswordValid()) {
            this.checkPassword();
        } else {
            this.props.dispatch(registerUser({
                fullname: this.state.username,
                email: this.state.email,
                password: this.state.password,
                
                name: this.state.name
            }));
            const obj = {
                fullname : this.state.username,
                email: this.state.email,
                password : this.state.password,
               
                name : this.state.name
            };
    
            console.log(obj);
    
            axios.post('http://localhost:5000/users/register', obj)
            .then(res => {
                console.log(res.data);
                this.props.history.push(`/login`);
            });
            this.setState({
                fullname : '',
                email : '',
                password: '',
                name: ''
            })


        }

    }

    googleLogin() {
        this.props.dispatch(loginUser({social: "google"}));
    }

    microsoftLogin() {
        this.props.dispatch(loginUser({social: "microsoft"}));
    }

    render() {
        
        return (
            <div className="auth-page">
                <Container>
                    <Widget className="widget-auth mx-auto" title={<h3 className="mt-0">Register</h3>}>
                        <p className="widget-auth-info">
                            Please fill all fields below.
                        </p>
                        <form onSubmit={this.doRegister}>
                            {
                                this.props.errorMessage && (
                                    <Alert className="alert-sm widget-middle-overflow rounded-0" color="danger">
                                        {this.props.errorMessage}
                                    </Alert>
                                )
                            }

                            

                            <FormGroup className="mt">
                                <Label for="fullname">Full Name</Label>
                                <InputGroup className="input-group-no-border">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="la la-user text-white"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input id="fullname" className="input-transparent pl-3" value={this.state.fullname}
                                           onChange={this.fullname} type="text"
                                           required name="fullname" placeholder="Full Name"/>
                                </InputGroup>
                            </FormGroup>

                            <FormGroup className="mt">
                                <Label for="email">Email</Label>
                                <InputGroup className="input-group-no-border">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="la la-user text-white"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input id="email" className="input-transparent pl-3" value={this.state.email}
                                           onChange={this.changeEmail} type="email"
                                           required name="email" placeholder="Email"/>
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
                            <FormGroup>
                                <Label for="confirmPassword">Confirm</Label>
                                <InputGroup className="input-group-no-border">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="la la-lock text-white"/>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input id="confirmPassword" className="input-transparent pl-3" value={this.state.confirmPassword}
                                           onChange={this.changeConfirmPassword} onBlur={this.checkPassword} type="password"
                                           required name="confirmPassword" placeholder="Confirm"/>
                                </InputGroup>
                            </FormGroup>
                            <div className="bg-widget-transparent auth-widget-footer">
                                <Button type="submit" color="danger" className="auth-btn"
                                        size="sm" style={{color: '#fff'}}>{this.props.isFetching ? 'Loading...' : 'Register'}</Button>
                                <p className="widget-auth-info mt-4">
                                    Already have the account? Login now!
                                </p>
                                <Link className="d-block text-center mb-4" to="login">Enter the account</Link>
                                <div className="social-buttons">
                                   {/* <Button color="primary" className="social-button">
                                        <i className="social-icon social-google"/>
                                        <p className="social-text">GOOGLE</p>
                                    </Button>
                                    <Button color="success" className="social-button">
                                        <i className="social-icon social-microsoft"
                                           style={{backgroundImage: `url(${microsoft})`}}/>
                                        <p className="social-text" style={{color: '#fff'}}>MICROSOFT</p>
                        </Button>*/}
                                </div>
                            </div>
                        </form>
                    </Widget>
                    {/*<Widget className="widget-auth mx-auto" title={<h3 className="mt-0">Create an account</h3>}>*/}
                        {/*<p className="widget-auth-info">*/}
                            {/*Please fill all fields below*/}
                        {/*</p>*/}
                        {/*<form className="mt" onSubmit={this.doRegister}>*/}
                            {/*{*/}
                                {/*this.props.errorMessage && (*/}
                                    {/*<Alert className="alert-sm" color="danger">*/}
                                        {/*{this.props.errorMessage}*/}
                                    {/*</Alert>*/}
                                {/*)*/}
                            {/*}*/}
                            {/*<div className="form-group">*/}
                                {/*<input className="form-control no-border" value={this.state.email}*/}
                                       {/*onChange={this.changeEmail} type="text" required name="email"*/}
                                       {/*placeholder="Email"/>*/}
                            {/*</div>*/}
                            {/*<div className="form-group">*/}
                                {/*<input className="form-control no-border" value={this.state.password}*/}
                                       {/*onChange={this.changePassword} type="password" required name="password"*/}
                                       {/*placeholder="Password"/>*/}
                            {/*</div>*/}
                            {/*<div className="form-group">*/}
                                {/*<input className="form-control no-border" value={this.state.confirmPassword}*/}
                                       {/*onChange={this.changeConfirmPassword} onBlur={this.checkPassword} type="password" required name="confirmPassword"*/}
                                       {/*placeholder="Confirm"/>*/}
                            {/*</div>*/}
                            {/*<Button type="submit" color="inverse" className="auth-btn mb-3" size="sm">{this.props.isFetching ? 'Loading...' : 'Register'}</Button>*/}
                            {/*<p className="widget-auth-info">or sign up with</p>*/}
                            {/*<div className="social-buttons">*/}
                                {/*<Button onClick={this.googleLogin} color="primary" className="social-button mb-2">*/}
                                    {/*<i className="social-icon social-google"/>*/}
                                    {/*<p className="social-text">GOOGLE</p>*/}
                                {/*</Button>*/}
                                {/*<Button onClick={this.microsoftLogin} color="success" className="social-button">*/}
                                    {/*<i className="social-icon social-microsoft"*/}
                                       {/*style={{backgroundImage: `url(${microsoft})`}}/>*/}
                                    {/*<p className="social-text">MICROSOFT</p>*/}
                                {/*</Button>*/}
                            {/*</div>*/}
                        {/*</form>*/}
                        {/*<p className="widget-auth-info">*/}
                            {/*Already have the account? Login now!*/}
                        {/*</p>*/}
                        {/*<Link className="d-block text-center" to="login">Enter the account</Link>*/}
                    {/*</Widget>*/}
                </Container>
                <footer className="auth-footer">
                    
                </footer>
                <div>
                <h2>
                    <div>
                        <div>
                            <form >
                                <h1>
                                <p>Login</p>
                                <div>
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Enter Email"
                                        value = {this.state.email}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Enter Password"
                                       
                                    />
                                </div>
                                <button className="btn btn-lg btn-primary btn-block">Sign In</button> 
                                </h1>
                            </form>
                        </div>
                    </div> 
                </h2>
            </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.auth.isFetching,
        errorMessage: state.auth.errorMessage,
    };
}

export default withRouter(connect(mapStateToProps)(Register));

