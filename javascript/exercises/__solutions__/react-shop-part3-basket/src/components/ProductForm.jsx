import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';
import classnames from 'classnames';

const ProductForm = ({
  values,
  errors,
  touched,
  isSubmitting,
  handleSubmit,
  handleBlur,
  handleChange,
  onDelete,
  onCancel,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div
              className={classnames({
                'form-group': true,
                'has-error': errors.sku && touched.sku,
              })}>
              <label htmlFor="sku">Sku</label>
              <input
                type="text"
                className="form-control"
                id="sku"
                onChange={handleChange}
                value={values.sku}
                onBlur={handleBlur}
              />
              {errors.sku &&
                touched.sku && (
                  <div className="help-block">
                    <div>{errors.sku}</div>
                  </div>
                )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div
              className={classnames({
                'form-group': true,
                'has-error': errors.title && touched.title,
              })}>
              <label htmlFor="title">Title *</label>
              <input
                type="text"
                className="form-control"
                id="title"
                onChange={handleChange}
                value={values.title}
                onBlur={handleBlur}
              />
              {errors.title &&
                touched.title && (
                  <div className="help-block">
                    <div>{errors.title}</div>
                  </div>
                )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div
              className={classnames({
                'form-group': true,
                'has-error': errors.price && touched.price,
              })}>
              <label htmlFor="price">Price *</label>
              <input
                type="number"
                className="form-control"
                id="price"
                onChange={handleChange}
                value={values.price}
                onBlur={handleBlur}
              />
              {errors.price &&
                touched.price && (
                  <div className="help-block">
                    <div>{errors.price}</div>
                  </div>
                )}
            </div>
          </div>
        </div>

        <div className=" row ">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="basePrice">Base Price</label>
              <input
                type="number"
                className="form-control"
                id="basePrice"
                onChange={handleChange}
                value={values.basePrice}
                onBlur={handleBlur}
              />
            </div>
          </div>
        </div>

        <div className=" row ">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="desc">Description</label>
              <textarea
                className="form-control"
                id="desc"
                name="desc"
                rows="6"
                onChange={handleChange}
                value={values.desc}
                onBlur={handleBlur}
              />
            </div>
          </div>
        </div>

        <div className=" row ">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="stocked" />
              <input
                type="checkbox"
                id="stocked"
                onChange={handleChange}
                value={values.stocked}
                onBlur={handleBlur}
              />&nbsp;Stocked
            </div>
          </div>
        </div>

        <div className="btn-toolbar">
          <button type="button" className="btn btn-default" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn-success" disabled={isSubmitting}>
            Save
          </button>
          <button type="button" className="btn btn-danger pull-right" onClick={onDelete}>
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: props => {
    return {
      sku: props.product.sku || '',
      title: props.product.title || '',
      price: props.product.price || '',
      basePrice: props.product.basePrice || '',
      desc: props.product.desc || '',
      stocked: props.product.stocked || '',
    };
  },
  handleSubmit: (values, { props, setSubmitting }) => {
    setSubmitting(true);
    props.save(values);
  },
  enableReinitialize: true,
  validationSchema: yup.object().shape({
    sku: yup.string().required(),
    title: yup.string().required(),
    price: yup.string().required(),
    desc: yup.string(),
  }),
})(ProductForm);
