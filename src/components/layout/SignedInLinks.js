import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { SignOut } from "../../actions/authActions";
import { compose } from "redux";

class SignInLinks extends React.Component {

    handleSignOut = ()=> {
        this.props.signOut();
        this.props.history.push('/signin');
    }
  render() {
      return (
      <ul className="right hide-on-med-and-down">
          <li>
              <NavLink to="/newBoard">New ScrumBoard</NavLink>
          </li>
          <li>
              <a onClick={() => {this.handleSignOut();}} >Logout</a>
          </li>
          <li>
              <NavLink to="/" className="btn btn-floating pink lighten-1">
                  OFL
            </NavLink>
          </li>
      </ul>);
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(SignOut())
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withRouter
)(SignInLinks);
