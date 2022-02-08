import propTypes from 'prop-types';
import Avatar from './Avatar';

function UserInfo({
  userName,
  source,
}) {
  return (
    <div className="UserInfo">
      <Avatar
        source={source}
        alternateText={userName}
      />
      <div className="UserInfo-name">
        {userName}
      </div>
    </div>
  );
}

UserInfo.propTypes = {
  userName: propTypes.string.isRequired,
  source: propTypes.string.isRequired,
};

export default UserInfo;
