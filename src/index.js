import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

import './index.css';
import App from './components/App';
import combineReducers from './reducers';

// function logger(obj,next,action)
// logger(obj)(next)(action)
// const logger = function({dispatch,getState}) {
//    return function(next) {
//       return function(action){
//          //middleware code
//          console.log('ACTION_TYPE =', action.type);
//          next(action);
//       }
//    }
// }

const logger = ({dispatch,getState}) => (next) => (action) => {
   //logger code
   // if(typeof action !== 'function'){
      console.log('ACTION =', action);
   // }
   next(action);
}

// const thunk = ({dispatch,getState}) => (next) => (action) => {
//    //logger code
//    if(typeof action === 'function'){
//       action(dispatch);
//       return;
//    }
//    next(action);
// }

const store = createStore(combineReducers,applyMiddleware(logger,thunk));
//console.log('store', store); 
console.log('STATE', store.getState());

// export const StoreContext = createContext();

// console.log('StoreContext', StoreContext);

// class Provider extends React.Component{
//    render(){
//       const {store} = this.props;
//       return(
//          <StoreContext.Provider value={store}>
//             {this.props.children}
//          </StoreContext.Provider>
//       );
//    }
// }

// const connectedComponent = connect(callback)(App);
// export function connect(callback) {
//    return function (Component) {
//      class ConnectedComponent extends React.Component {
//        constructor(props) {
//          super(props);
//          this.unsubscribe = this.props.store.subscribe(() => {
//            this.forceUpdate();
//          });
//        }
 
//        componentWillUnmount() {
//          this.unsubscribe();
//        }
//        render() {
//          const { store } = this.props;
//          const state = store.getState();
//          const dataToBeSentAsProps = callback(state);
 
//          return <Component dispatch={store.dispatch} {...dataToBeSentAsProps} />;
//        }
//      }
 
//      class ConnectedComponentWrapper extends React.Component {
//        render() {
//          return (
//            <StoreContext.Consumer>
//              {(store) => {
//                return <ConnectedComponent store={store} />;
//              }}
//            </StoreContext.Consumer>
//          );
//        }
//      }
//      return ConnectedComponentWrapper;
//    };
//  }

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'WONDER WOMAN'}]
// });
// console.log('AFTER STATE', store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
<Provider store = {store}>
    <App />
</Provider>
 // </React.StrictMode>
);


