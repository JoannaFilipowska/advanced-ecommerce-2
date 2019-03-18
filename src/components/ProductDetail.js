import React from "react";
import PropTypes from "prop-types";
//Use PropTypes to require a prop "product"
//Use product prop to populate the UI instead of hard coded
const ProductDetail = props => {
  return (
    <div className="grid_1_of_5 images_1_of_5">
      <img src={props.product.imgUrl} alt="" />
      <h3>{props.product.name}</h3>
      <p>{props.product.description}</p>
      <h4>{props.product.price}</h4>
      <div className="button">
        <span>
          <a href="singlepage.html">Read More</a>
        </span>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  product: React.PropTypes.object.isRequired
};

export default ProductDetail;
