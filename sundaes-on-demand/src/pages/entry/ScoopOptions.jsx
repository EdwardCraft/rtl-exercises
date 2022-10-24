import PropTypes from "prop-types";

import Col from "react-bootstrap/Col";

const ScoopOptions = (props) => {
  const { name, imagePath } = props;
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        alt={`${name} scoop`}
        src={`http://localhost:3030/${imagePath}`}
      />
    </Col>
  );
};

ScoopOptions.propTypes = {
  name: PropTypes.string,
  imagePath: PropTypes.string,
};

export default ScoopOptions;
