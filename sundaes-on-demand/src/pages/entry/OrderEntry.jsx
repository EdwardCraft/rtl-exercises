import PropTypes from "prop-types";

import Options from "./Options";

const OrderEntry = (props) => {
  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
    </div>
  );
};

OrderEntry.propTypes = {};

export default OrderEntry;
