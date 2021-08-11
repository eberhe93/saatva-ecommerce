import React from 'react';
import MattressView from './screens/mattressView/mattressView';
import Navbar from './components/navbar/navbar.js';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <MattressView />
      </Provider>
    </div>
  )
}

export default App;