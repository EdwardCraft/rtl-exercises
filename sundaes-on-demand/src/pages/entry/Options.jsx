import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";

import ScoopOptions from "./ScoopOptions";

const Options = (props) => {
  const { optionType } = props;

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        // TODO: Handle error response
      });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOptions : null;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
};

Options.propTypes = {
  optionType: PropTypes.string,
};

export default Options;
