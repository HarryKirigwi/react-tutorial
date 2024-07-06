import propTypes from "prop-types";

function Greetings(props) {
  return props.isLoggedIn ? (
    <h1>Welcome {props.username}</h1>
  ) : (
    <h1>Please login to continue</h1>
  );
}

Greetings.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

Greetings.propTypes = {
  isLoggedIn: propTypes.bool,
  username: propTypes.string,
};

export default Greetings;
