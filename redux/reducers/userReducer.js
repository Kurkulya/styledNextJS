
import _ from 'lodash';
import actions from 'redux/actions/userActions';

const initialState = {
    isSignIn: false,
    name: 'Jon'
};

export default (state = initialState, action) => {
    switch (action.type) {
    case actions.DO_SUCCESS: return { ...state, nameA: action.a, nameB: action.b };
    default:
        return state;
    }
}