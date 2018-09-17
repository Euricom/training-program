import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import api from '../api';
import ProductList from '../components/ProductList';

export default class ProductContainer extends Component {
  state = { products: [], hasMore: true };

  loadFunc = page => {
    const { products } = this.state;
    api.get(`/products?page=${page}`).then(res => {
      const newProductList = [...products, ...res.data.selectedProducts];
      const hasMore = newProductList.length !== res.data.total;
      this.setState({
        products: newProductList,
        hasMore,
      });
    });
  };

  render() {
    const { products, hasMore } = this.state;
    return (
      <div>
        <h2>Products</h2>
        <InfiniteScroll
          initialLoad
          pageStart={-1}
          loadMore={this.loadFunc}
          hasMore={hasMore}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          <ProductList products={products} />
        </InfiniteScroll>
      </div>
    );
  }
}
