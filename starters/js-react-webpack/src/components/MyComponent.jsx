import React from 'react';

export default class MyComponent extends React.Component {
  render() {
    const { title } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>MyComponent</h1>
        <h3>{title}</h3>
      </div>
    );
  }
}
