import counter from './counter';

const ADD = 'todolist/ADD';
const REMOVE = 'todolist/REMOVE';
const SEE = 'todolist/SEE';

export const add = message => {
    return {
        type: ADD,
        data: { message }
    };
};
export const remove = id => {
    return {
        type: REMOVE,
        data: { id }
    };
};
export const see = id => {
    return {
        type: SEE,
        data: { id }
    };
};

const initialState = {
    list: {
        1: {
            id: 1,
            seen: false,
            message: 'This is Redux.'
        },
        2: {
            id: 2,
            seen: false,
            message: 'This is Redux Sample.'
        },
        3: {
            id: 3,
            seen: false,
            message: 'This is Redux Sample Project.'
        }
    },
    topId: 3
};

export default function todolist(state = initialState, action) {
    switch (action.type) {
        case REMOVE: {
            delete state.list[action.data.id];
            return {
                ...state
            };
        }
        case ADD: {
            return {
                ...state,
                list: {
                    ...state.list,
                    [state.topId + 1]: {
                        id: [state.topId + 1],
                        message: action.data.message,
                        seen: false
                    }
                },
                topId: state.topId + 1
            };
        }
        case SEE: {
            return {
                ...state,
                list: {
                    ...state.list,
                    [action.data.id]: {
                        ...state.list[action.data.id],
                        seen: true
                    }
                }
            };
        }
        default: {
            return state;
        }
    }
}
