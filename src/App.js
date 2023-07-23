import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Login from './pages/Login/Login';
import DashBoard from './pages/Dashboard/Dashboard';
import configureStore from './redux/store/index';
import { APPLICATION_CONSTANTS } from './AppConstant';

const store  = configureStore({});

function App() {
  return (
		<Router>
			<Provider store={store}>
			<Routes>
				<Route exact path={APPLICATION_CONSTANTS.HOME_PAGE_URL} element={<Login />} />
				<Route exact path={APPLICATION_CONSTANTS.DASHBOARD_URL} element ={<DashBoard />} />
			</Routes>
			</Provider>
		</Router>
  );
}

export default App;
