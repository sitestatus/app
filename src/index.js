import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';
import App from './components/App';

injectTapEventPlugin();
registerServiceWorker();

ReactDOM.render(<App />, document.getElementById('root'));
