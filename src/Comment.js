import propTypes from 'prop-types';
import UserInfo from './UserInfo';

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment({
  date,
  text,
  authorName,
  authorAvatar,
}) {
  return (
    <div className="Comment">
      <UserInfo
        userName={authorName}
        source={authorAvatar}
      />
      <div className="Comment-text">
        {text}
      </div>
      <div className="Comment-date">
        {formatDate(date)}
      </div>
    </div>
  );
}

Comment.propTypes = {
  date: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  authorName: propTypes.string.isRequired,
  authorAvatar: propTypes.string.isRequired,
};

export default Comment;
