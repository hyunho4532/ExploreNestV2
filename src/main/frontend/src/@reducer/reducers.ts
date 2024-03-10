const initialState = {
    buttonStatus: false
}

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'TOGGLE_BUTTON':
            return {
                ...state,
                buttonStatus: !state.buttonStatus,
            };
        default:
            return state;
    }
};

export default rootReducer;