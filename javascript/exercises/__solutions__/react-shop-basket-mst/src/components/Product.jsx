import React from 'react';
import PropTypes from 'prop-types';

import AddProductButton from './AddProductButton';

import { toCurrency, toPercentage } from '../core/intl';

const Product = ({ product, onAdd }) => {
  const discount = 1 - product.price / product.basePrice;
  return (
    <div>
      <div className="panel panel-default">
        <div className="panel-heading">{product.title}</div>
        <div className="panel-body">
          <img src={product.image} width="100%" />
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <strong>Sku:</strong>
                </td>
                <td>{product.sku}</td>
              </tr>
              <tr>
                <td>
                  <strong>Name:</strong>
                </td>
                <td>{product.title}</td>
              </tr>
              <tr>
                <td>
                  <strong>Price:</strong>
                </td>
                <td>
                  {toCurrency(product.price)} {!!discount && `( -${toPercentage(discount)})`}
                </td>
              </tr>
            </tbody>
          </table>
          <AddProductButton stocked={product.stocked} onClick={onAdd} />
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    sku: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    basePrice: PropTypes.number,
  }).isRequired,
};

export default Product;
