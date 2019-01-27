import React, { Component } from "react";
import Board from "react-trello";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Code } from "react-content-loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyCodeLoader = () => <Code />;

const handleDragStart = (cardId, laneId) => {
  console.log("drag started");
  console.log(`cardId: ${cardId}`);
  console.log(`laneId: ${laneId}`);
};

const handleDragEnd = async (cardId, sourceLaneId, targetLaneId, position, card) => {

  if (sourceLaneId === "StoryLane") {
    if (targetLaneId != "notStartedlane") {
      eventBus.publish({ type: 'REMOVE_CARD', laneId: targetLaneId, cardId: cardId });
      eventBus.publish({ type: 'ADD_CARD', laneId: sourceLaneId, card: card });
      toast.warn("This drop is not Ok !", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  } 
   if (sourceLaneId === "notStartedlane") {
     console.log("we are in to do and taget lane was",targetLaneId);
      if (targetLaneId != "inProgressLane") {
      eventBus.publish({ type: 'REMOVE_CARD', laneId: targetLaneId, cardId: cardId });
      eventBus.publish({ type: 'ADD_CARD', laneId: sourceLaneId, card: card });
      toast.warn("This drop is not Ok !", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  } 
   if(sourceLaneId === "inProgressLane") {
    if(targetLaneId != "DoneLane") {
      eventBus.publish({ type: 'REMOVE_CARD', laneId: targetLaneId, cardId: cardId });
      eventBus.publish({ type: 'ADD_CARD', laneId: sourceLaneId, card: card });
      toast.warn("This drop is not Ok !", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  }
  if(sourceLaneId === "DoneLane"){
    if(targetLaneId === "StoryLane" || targetLaneId === "notStartedlane" || targetLaneId === "inProgressLane") {
      eventBus.publish({ type: 'REMOVE_CARD', laneId: targetLaneId, cardId: cardId });
      eventBus.publish({ type: 'ADD_CARD', laneId: sourceLaneId, card: card });
      toast.warn("This drop is not Ok !", {
        position: toast.POSITION.TOP_CENTER
      }); 
    }
  }

};

const handleCardDelete = (cardId, laneId) => {
  console.log(`Card: ${cardId} deleted from lane: ${laneId}`);
};
let eventBus = undefined;
const setEventBus = handle => {
  eventBus = handle;
  console.log("our event bus", eventBus);
};
class ScrumBoard extends Component {

  shouldReceiveNewData = nextData => {
    console.log("New card has been added");
    console.log(nextData);
  };

  handleCardAdd = (card, laneId) => {
    console.log(`New card added to lane ${laneId}`);
    console.dir(card);
  };

  handleCardAdd = (card, laneId) => {
    if (laneId !== "StoryLane") {
      eventBus.publish({
        type: "REMOVE_CARD",
        laneId: laneId,
        cardId: card.id
      });
      toast.error("You can only add cards on the story lane !", {
        position: toast.POSITION.TOP_CENTER
      });
    }
    console.log(`New card added to lane ${laneId}`);
    console.dir(card);
  };

  render() {
    const { scrumBoard } = this.props;
    if (scrumBoard) {
      return (
        <div>
          <h5 class="blue-text text-darken-2" style={{ margin: "20px" }}>
            {scrumBoard.title}
          </h5>
          <Board
            editable
            draggable
            laneDraggable={false}
            data={scrumBoard.boardData}
            onCardAdd={this.handleCardAdd}
            hideCardDeleteIcon={false}
            handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}
            onCardDelete={handleCardDelete}
            REDUX_LOGGING={true}
            eventBusHandle={setEventBus}
          />
          <ToastContainer />
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <MyCodeLoader />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const scrumBoards = state.fireStore.data.scrumboards;
  const scrumBoard = scrumBoards ? scrumBoards[id] : null;
  return {
    scrumBoard: scrumBoard,
    fireStore: state.fireStore
  };
};

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  firestoreConnect([{ collection: "scrumboards" }])
)(ScrumBoard);
