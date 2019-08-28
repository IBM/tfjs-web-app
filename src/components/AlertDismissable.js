
import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

/**
 * Class to handle the rendering of a dismissiable alert to use for things like errors.
 * @extends React.Component
 */
class AlertDismissable extends Component {

  render() {
    if (this.props.show) {
      return (
        <Alert variant={this.props.variant || 'danger'} onClose={this.props.onClose} dismissible>
          { this.props.title && <h5><strong>{this.props.title}</strong></h5> }
          <div dangerouslySetInnerHTML={{ __html: this.props.message }} />
        </Alert>
      );
    }
    return null;
  }
}

export default AlertDismissable;
