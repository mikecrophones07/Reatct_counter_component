const counter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        case 'MULTIPLYBYTWO':
            return state*2;
        case 'DIVIDEBYTWO':
            return state/2;
        default:
            return 0;
    }
}

export default counter;
