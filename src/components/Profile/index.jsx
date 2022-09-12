import PropTypes from 'prop-types';
import classes from './index.module.css';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <div className={classes.profile}>
    <div className={classes.description}>
      <img src={avatar} alt="User avatar" className={classes.avatar} />
      <p className={classes.username}>{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className={classes.stats}>
      <li>
        <span className={classes.label}>Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className={classes.label}>Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className={classes.label}>Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
