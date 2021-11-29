import React from 'react';
import { Provider } from 'react-redux';
import { HomePage } from './pages/home';
import store from './store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
