import React, { Component } from "react";
import BoardList from "../scrumboard/ScrumBoardList";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
    
  }
  render() {
    const { fireStore, firebase } = this.props;

    
    if(fireStore && !firebase.auth.uid){
    return (
      <div className="container">
        <div className="row">
          <BoardList boards={fireStore} />
        </div>
      </div>
    )} else {
      return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div>Welcome to Scrum Board v1.0.0</div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    scrumBoard: state.scrumBoard,
    fireStore: state.fireStore.ordered.scrumboards,
    firebase: state.firebase
  };
};

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  firestoreConnect([{ collection: "scrumboards" }])
)(Dashboard);
