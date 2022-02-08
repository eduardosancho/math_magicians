import propTypes from 'prop-types';

function Avatar({ source, alternateText }) {
  return (
    <img
      className="Avatar"
      src={source}
      alt={alternateText}
    />
  );
}

Avatar.propTypes = {
  source: propTypes.string.isRequired,
  alternateText: propTypes.string.isRequired,
};

export default Avatar;
