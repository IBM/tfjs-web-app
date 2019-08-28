import React, { Component } from 'react';
import './About.css';

/**
 * Class to handle the rendering of the Home page.
 * @extends React.Component
 */
export default class Home extends Component {
  render() {
    return (
      <div className="About container">
        <h1>About</h1>
        <p>
          This is a TensorFlow.js web application where users can classify images selected locally
          or taken with their device's camera. The app uses TensorFlow.js and a pre-trained model
          converted to the TensorFlow.js format to provide the inference capabilities.
          This model is saved locally in the browser using IndexedDB. A service worker is also used
          to provide offline capabilities.
        </p>
      </div>
    );
  }
}
