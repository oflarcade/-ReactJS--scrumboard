import {ADD_SCRUM_BOARD, ADD_SCRUM_BOARD_ERROR} from '../actions/scrumBoardActions';
const initState = {
    boardList: [{title: "",
    label: "",
    boardData: {
        lanes: [
            {
                id: "StoryLane",
                title: "STORY",
                label: "",
                draggable: true,
                style: { width: 280 },
                cards: []
            },
            {
                id: "notStartedlane",
                title: "NOT STARTED",
                editable: false,
                label: "",
                style: { width: 280 },
                cards: []
            },
            {
                id: "DoingLane",
                title: "DOING",
                editable: false,
                label: "",
                style: { width: 280 },
                cards: []
            },
            {
                id: "DoneLane",
                title: "DONE",
                editable: false,
                label: "",
                style: { width: 280 },
                cards: []
            }
        ]
    }}]
}

const scrumBoardReducer = (state = initState, action) => {
    switch(action.type){
        case ADD_SCRUM_BOARD:{
            let newBoard = action.scrumBoard;
            var newList = [...state.boardList];
            newList.push(newBoard);
        }
            return {
                ...state,
                boardList: newList,
            }
        case ADD_SCRUM_BOARD_ERROR:
            return {
                ...state
            }    
        default:
        return state
    }
    
}

export default scrumBoardReducer;