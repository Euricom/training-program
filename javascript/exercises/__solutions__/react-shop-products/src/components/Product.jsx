import React from 'react';
import PropTypes from 'prop-types';

import { toCurrency, toPercentage } from '../core/intl';

const Product = ({ product }) => {
  const discount = 100 - (product.price / product.basePrice) * 100;
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
                  {toCurrency(product.price)}{' '}
                  {!!discount && `( -${toPercentage(discount)})`}
                </td>
              </tr>
            </tbody>
          </table>
          {product.stocked && (
            <span style={{ color: 'red' }}>Out of Stock</span>
          )}
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
