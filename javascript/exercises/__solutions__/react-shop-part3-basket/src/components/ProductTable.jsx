import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import api from '../services/api';
import { toCurrency } from '../core/intl';

export default class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedProducts: null,
      sortBy: null,
      sortAsc: false,
    };
  }

  componentDidMount() {
    console.log('proppos', this.props);
  }

  async onSort(e, fieldName) {
    let { sortAsc, sortBy } = this.state;
    console.log(fieldName);
    e.preventDefault();
    if (fieldName === sortBy) {
      sortAsc = !sortAsc;
    } else {
      sortAsc = true;
      sortBy = fieldName;
    }
    const sortExpression = `${sortAsc ? '' : '-'}${fieldName}`;
    const products = await api.products.getAll(0, sortExpression);
    this.setState({ sortedProducts: products });
  }

  onAdd() {
    console.log(this.props);
    // this.props.history.push('/product');
    this.props.history.goBack();
  }

  selectedClass(fieldName) {
    const { sortBy, sortAsc } = this.state;
    return fieldName === sortBy ? `sort-${sortAsc}` : false;
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
        <button type="button" className="btn btn-default" onClick={() => this.onAdd()}>
          Add Product
        </button>
        <table className="table table-hover">
          <thead>
            <tr>
              <th
                className={`fieldName === ${this.state.sortBy} ? sort-${this.state.sortAsc} : false;`}
                onClick={this.onSort}
              >
                Id
              </th>
              {/* <th className="selectedClass('sku')" onClick={e => this.onSort(e, 'sku')}>
                Sku
              </th>
              <th className="selectedClass('title')" onClick={e => this.onSort(e, 'title')}>
                Title
              </th>
              <th className="selectedClass('price')" onClick={e => this.onSort(e, 'price')}>
                Price
              </th>
              <th className="selectedClass('basePrice')" onClick={e => this.onSort(e, 'basePrice')}>
                Base Price
              </th>
              <th className="selectedClass('stocked')" onClick={e => this.onSort(e, 'stocked')}>
                Stocked
              </th> */}
              <th />
            </tr>
          </thead>
          <tbody>
            {newProducts.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.sku}</td>
                <td>{product.title}</td>
                <td>{toCurrency(product.price)}</td>
                <td>{toCurrency(product.price)}</td>
                <td>{product.stocked ? 'In Stock' : '-'}</td>
                <td>
                  {/* <a href="#" onClick="onDelete(product.id);">
                    Delete
                  </a> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
