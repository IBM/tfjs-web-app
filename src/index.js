import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


class Index extends Component {
  state = {
    contentCached: false,
    updateAvailable: false,
  };

  componentDidMount() {
    const config = {
      onUpdate: this.handleUpdate,
    };

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.register(config);
  }

  render() {
    return (
      <Router>
        <App updateAvailable={this.state.updateAvailable} />
      </Router>
    );
  }

  handleUpdate = (registration) => {
    const waitingServiceWorker = registration.waiting;

    if (waitingServiceWorker) {
      waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
    }
    this.setState({ updateAvailable: true});
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
