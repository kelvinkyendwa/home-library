import React, { Component } from 'react';
import { Progress } from 'semantic-ui-react';

class Biography extends Component {
  render() {
    return (
      <div>
        <h2>Biography Tips</h2>
        <p>Reading might help</p>
        <p>
          <Progress percent={20} inverted progress success>
            Keep Reading to achieve 100%
          </Progress>
        </p>
      </div>
    );
  }
}

export default Biography;
