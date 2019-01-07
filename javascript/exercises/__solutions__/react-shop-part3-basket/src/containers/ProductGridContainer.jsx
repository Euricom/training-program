import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import eventBus from 'pubsub-js';

import api from '../services/api';
import ProductList from '../components/ProductList';

export default class ProductGridContainer extends Component {
  state = { products: [], hasMore: true };

  loadFunc = async page => {
    const { products } = this.state;
    const loadedProducts = await api.products.getAll(page);
    const newProductList = [...products, ...loadedProducts];
    const hasMore = newProductList.length !== loadedProducts.total;
    this.setState({
      products: newProductList,
      hasMore,
    });
  };

  handleAddProduct = (product, quantity) => {
    eventBus.publish('addProduct', { product, quantity });
    api.basket.addProduct(product, quantity);
  };

  render() {
    const { products, hasMore } = this.state;
    return (
      <div>
        <h2>Product Grid</h2>
        <InfiniteScroll
          initialLoad
          pageStart={-1}
          loadMore={this.loadFunc}
          hasMore={hasMore}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }>
          <ProductList products={products} onAddProduct={this.handleAddProduct} />
        </InfiniteScroll>
      </div>
    );
  }
}
