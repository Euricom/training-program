import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddProductProduct extends Component {
  state = {
    quantity: 1,
  };

  handleInputChange = event => {
    this.setState({
      quantity: parseInt(event.target.value, 10),
    });
  };

  render() {
    const { stocked, onClick } = this.props;
    const { quantity } = this.state;
    if (stocked) {
      return (
        <div>
          <input
            className="input-field"
            type="number"
            value={quantity}
            onChange={this.handleInputChange}
            min="1"
            max="5"
            size="10"
          />
          <button type="button" className="btn btn-primary btn-sm" onClick={() => onClick(quantity)}>
            Add
          </button>
        </div>
      );
    }
    return <span style={{ color: 'red' }}>Out of Stock</span>;
  }
}

AddProductProduct.propTypes = {
  stocked: PropTypes.bool,
  onClick: PropTypes.func,
};

AddProductProduct.defaultProps = {
  stocked: true,
  onClick: null,
};
