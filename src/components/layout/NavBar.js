import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

class NavBar extends Component {
    componentDidMount(){
        console.log('from nav bar',this.props.firebase);
    }
  render() {
    const {firebase} = this.props;
    return (
      <nav className="nav-wrapper blue darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            ScrumBoard
          </Link>
          {
            firebase.auth.isEmpty 
            ? <SignedOutLinks />
            : <SignInLinks /> 
          }
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    firebase: state.firebase
  };
};

export default connect(
  mapStateToProps,
  null
)(NavBar);
