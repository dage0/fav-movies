import React, { Component } from 'react';

export default class Info extends Component {
  static propTypes = {

  }

  state = {}

  render() {
    return (
      <div className="row center-xs">
        <div className="col-xs-12">
          <h1>create-react-app v2 + react-router + apollo-client </h1>
        </div>
        <div className="col-xs-8">
          <h3>
            <a href="https://github.com/dage0">Github repo</a>
          </h3>
        </div>
        <div className="col-xs-8">
          <h3>
            <a href="https://x717qx9vxq.sse.codesandbox.io/">Apollo server codepen</a>
          </h3>
        </div>
      </div>
    );
  }
}
