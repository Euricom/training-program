import React, { Component } from 'react';

import { toCurrency } from '../core/intl';

export default class ProductTable extends Component {
  state = { sortBy: null, sortAsc: false };

  handleSort = async (e, fieldName) => {
    e.preventDefault();

    // set sorted field on state
    let { sortAsc, sortBy } = this.state;
    if (fieldName === sortBy) {
      sortAsc = !sortAsc;
    } else {
      sortAsc = true;
      sortBy = fieldName;
    }
    this.setState({ sortAsc, sortBy });

    // fire event to parent
    const sortExpression = `${sortAsc ? '' : '-'}${fieldName}`;
    this.props.sort(sortExpression);
  };

  selectedClass(fieldName) {
    const { sortBy, sortAsc } = this.state;
    return fieldName === sortBy ? `sort-${sortAsc}` : '';
  }

  render() {
    const { sortedProducts } = this.state;
    let newProducts;
    if (!sortedProducts) {
      const { products } = this.props;
      newProducts = products;
    } else {
      newProducts = sortedProducts;
    }
    return (
      <div className="col-md-12">
        <h2>Table View</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th
                className={this.selectedClass('id')}
                onClick={e => this.handleSort(e, 'id')}>
                Id
              </th>
              <th
                className={this.selectedClass('sku')}
                onClick={e => this.handleSort(e, 'sku')}>
                Sku
              </th>
              <th
                className={this.selectedClass('title')}
                onClick={e => this.handleSort(e, 'title')}>
                Title
              </th>
              <th
                className={this.selectedClass('price')}
                onClick={e => this.handleSort(e, 'price')}>
                Price
              </th>
              <th
                className={this.selectedClass('basePrice')}
                onClick={e => this.handleSort(e, 'basePrice')}>
                Base Price
              </th>
              <th
                className={this.selectedClass('stocked')}
                onClick={e => this.handleSort(e, 'stocked')}>
                Stock
              </th>
            </tr>
          </thead>
          <tbody>
            {newProducts.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.sku}</td>
                <td>{product.title}</td>
                <td>{toCurrency(product.price)}</td>
                <td>{toCurrency(product.basePrice)}</td>
                <td>{product.stocked ? 'In Stock' : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
