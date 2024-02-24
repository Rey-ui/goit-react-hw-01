//import PropTypes from 'prop-types';
import css from "./Friend.module.css";
import FriendItem from "./FriendItem.jsx";
const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((item) => {
        return (
          <li key={item.id} className={css.friendItem}>
            <FriendItem item={item} />
          </li>
        );
      })}
    </ul>
  );
};
// FriendList.propTypes = {
//     friends: PropTypes.array.isRequired,
// };
export default FriendList;
