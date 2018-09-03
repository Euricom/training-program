import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import './test.scss';

const App = () => <div>My Minimal React Webpack Babel Setup</div>;

const HotApp = hot(module)(App);

ReactDOM.render(HotApp, document.getElementById('app'));
