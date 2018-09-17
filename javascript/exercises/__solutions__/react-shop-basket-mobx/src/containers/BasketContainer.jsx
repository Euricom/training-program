import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Basket from '../components/Basket';

@inject('store') // inject store into props
@observer // make component observable to state changes
class BasketContainer extends Component {
  render() {
    // prettier-ignore
    const { store: { basketWithProducts } } = this.props;
    if (basketWithProducts.items.length === 0) {
      return (
        <div>
          <h2>Basket</h2>
          <span>No Product in Basket</span>
        </div>
      );
    }
    return (
      <div>
        <h2>Basket</h2>
        <Basket basket={basketWithProducts} />
      </div>
    );
  }
}

export default BasketContainer;
