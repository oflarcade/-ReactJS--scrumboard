export const ADD_SCRUM_BOARD = "ADD_SCRUM_BOARD";
export const ADD_SCRUM_STORY = "ADD_SCRUM_STORY";
export const ADD_SCRUM_CARD = "ADD_SCRUM_CARD";
export const ADD_SCRUM_BOARD_ERROR = "ADD_SCRUM_BOARD_ERROR";
export const createScrumBoard = scrumBoard => {
  return (dispatch, getState,{getFirestore}) => {
    const fireStore = getFirestore();
    fireStore.collection('scrumboards').add({
      ...scrumBoard,
      authorId: 'Oflcad'
    })
    .then(()=>{
      dispatch({ type: ADD_SCRUM_BOARD, scrumBoard });
    })
    .catch((err)=>{
      dispatch({ type: ADD_SCRUM_BOARD_ERROR, err });
    })
  };
};

export const createScrumStory = card => {
  return (dispatch, getState) => {
    //create async call
    dispatch({ type: ADD_SCRUM_STORY, card });
  };
};

export const createScrumCard = card => {
  return (dispatch, getState) => {
    //create async call
    dispatch({ type: ADD_SCRUM_STORY, card });
  };
};
