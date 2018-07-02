import React from 'react';

import MyComponent from './components/MyComponent';

// eslint-disable-next-line
export default class App extends React.Component {
  name = 'test';

  title = 'MyComponentTitle';

  customers = [
    { id: 1, name: 'consonto' },
    { id: 2, name: 'bellware' },
    { id: 3, name: 'sultana' },
  ];

  render() {
    return (
      <div>
        <MyComponent title={this.title} data={this.customers} />
      </div>
    );
  }
}
