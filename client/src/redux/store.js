import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createEpicMiddleware } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import reducer from './reducers';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic, {
    dependencies: { ajax }
});
const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(epicMiddleware);
    }

    // Enable additional logging in non-production environments.
    return applyMiddleware(epicMiddleware, createLogger());
};
const store = createStore(reducer, composeWithDevTools(getMiddleware()));

export default store;
