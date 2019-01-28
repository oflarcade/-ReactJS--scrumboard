import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  componentDidMount() {
    console.log('from nav bar', this.props.firebase);
  }

  
  render() {
    const { firebase } = this.props;
    return (
      <MuiThemeProvider>
      <nav className="nav-wrapper blue darken-3">
        <div className="container">
          <a href="#" data-target="mobile-demo" onClick={() => this.handleToggle()} class="sidenav-trigger right"><i class="material-icons">menu</i></a>
          <Link to="/" className="brand-logo left">
            ScrumBoard
          </Link>
          <div className="hide-on-med-and-down right">
            {
              firebase.auth.isEmpty
                ? <SignedOutLinks />
                : <SignInLinks />
            }
          </div>
        </div>
        <Drawer open={this.state.open}>
            {
              firebase.auth.isEmpty
                ? <SignedOutLinks />
                : <SignInLinks />
            }
        </Drawer>
      </nav>
      </MuiThemeProvider>
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
