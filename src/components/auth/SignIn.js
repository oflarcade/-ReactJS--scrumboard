import React, { Component } from 'react'
import { connect } from 'react-redux';
import {signIn} from '../../actions/authActions';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    handleSubmit = e => {
        const { firebase } = this.props;
        e.preventDefault();
        
        this.props.signIn(this.state);
    
            this.props.history.push('/');
        
    }
    render() {
        const {authError}= this.props;
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white center'>
                    <h5 className='grey-text text-darken-3'>Login</h5>
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
                        <button className='btn green lighten-1 z-depth-0'>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        firebase: state.firebase
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}



export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withRouter
)(SignIn);