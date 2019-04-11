
import { put, takeEvery, call, putResolve } from 'redux-saga/effects';
import actions from 'redux/actions/userActions';

export function* doSmth({ payload, resolve }) {
    console.log('payload: ', payload);
    yield put(actions.doSuccess({ a: 1, b: 2 }));
    yield call(resolve, payload);
    // yield putResolve(777);
}


export default function* actionWatcher() {
    yield takeEvery(actions.DO, doSmth);
}
