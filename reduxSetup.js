const INITIAL_STATE = {mood: '（＾ω＾）'};

function rootReducer(state = INITIAL_STATE, action) {
    if(action.type === 'SAD'){
        return {...state, mood: '╥﹏╥'};
    } else if (action.type === 'SHY'){
        return {...state, mood: '(｡･･｡)'};
    }

    return {...state};
}

const store = Redux.createStore(rootReducer);