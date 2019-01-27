import React, { Component } from 'react'
import { compose } from "redux";
import {withRouter, Redirect} from 'react-router-dom';
import { connect } from "react-redux";
import { signUp } from '../../actions/authActions';
class SignUpForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.signUp(this.state)
        this.props.history.push('/signin');
    }
    render() {
        const {authError, auth} = this.props;
        if(auth.uid != null && auth.uid !== '') return <Redirect to='/' />
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white center'>
                    <h5 className='grey-text text-darken-3'>Sign Up</h5>
                    <div className='input-field'>
                        <label htmlFor='firstName'>First Name</label>
                        <input id='firstName' type="text" onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input id='lastName' type="text" onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input id='email' type="email" onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input id='password' type="password" onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                    <div className='red-text center'>{authError ? <p>{authError}</p> : null }</div>
                        <button className='btn red lighten-1 z-depth-0'>Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authError: state.authError,
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withRouter
)(SignUpForm);