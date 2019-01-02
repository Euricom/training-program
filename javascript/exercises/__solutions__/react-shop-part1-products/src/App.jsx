import React, { Component } from 'react';

import ProductGrid from './containers/ProductGridContainer';
import ProductTable from './containers/ProductTableContainer';

class App extends Component {
  state = {
    viewMode: 'grid',
  };
  handleSwitchView = () => {
    this.setState(state => {
      return {
        viewMode: state.viewMode === 'grid' ? 'table' : 'grid',
      };
    });
  };

  renderView() {
    const { viewMode } = this.state;
    if (viewMode === 'grid') {
      return <ProductGrid />;
    }
    return <ProductTable />;
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <h1>Web Shop</h1>
        <button className="btn btn-default" onClick={this.handleSwitchView}>
          Switch View
        </button>
        <div className="row">
          <div className="col-md-8">{this.renderView()}</div>
        </div>
      </div>
    );
  }
}

export default App;
