import clsx from 'clsx';
import PropTypes from 'prop-types';
import classes from './Friends.module.css';

const Friends = ({ friends }) => (
  <ul className={classes.friends}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className="item" key={id}>
        <span
          className={clsx(classes.dot, isOnline && classes.greenDot)}
        ></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    ))}
  </ul>
);

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

export default Friends;
