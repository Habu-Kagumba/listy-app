import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './containers/App';
import registerServiceWorker from './service_worker/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
