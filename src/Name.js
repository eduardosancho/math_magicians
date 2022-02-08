import propTypes from 'prop-types';

function Name({ name }) {
  return (
    <p>
      {' '}
      Hello,
      {name}
    </p>
  );
}

Name.propTypes = {
  name: propTypes.string.isRequired,
};

export default Name;
