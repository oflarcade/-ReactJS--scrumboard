import React, { Component } from "react";
import { connect } from 'react-redux';
import { createScrumBoard } from '../../actions/scrumBoardActions';
import { withRouter, Redirect } from 'react-router-dom'
import { compose } from 'redux';

class CreateScrumBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      label: "",
      boardData: {
        lanes: [
          {
            id: "StoryLane",
            title: "STORY",
            label: "",
            style: { width: 280 },
            cards: []
          },
          {
            id: "notStartedlane",
            title: "NOT STARTED",
            label: "",
            style: { width: 280 },
            cards: []
          },
          {
            id: "inProgressLane",
            title: "IN PROGRESS",
            label: "",
            style: { width: 280 },
            cards: []
          },
          {
            id: "DoneLane",
            title: "DONE",
            label: "",
            style: { width: 280 },
            cards: []
          }
        ]
      }
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createNewScrumBoard(this.state);
    this.props.history.push('/');
  };
  render() {
    const {firebase} = this.props;
    if(!firebase.auth.uid){
      return <Redirect to='/signin' />
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">New Scrum Board</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input id="title" type="text" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="label">label</label>
            <input id="label" type="text" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn green lighten-1 z-depth-0">
              Create New
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    scrumBoard: state.scrumBoard,
    firebase: state.firebase
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewScrumBoard: (scrumBoard) => dispatch(createScrumBoard(scrumBoard))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(CreateScrumBoard);