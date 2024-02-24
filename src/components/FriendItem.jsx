import clsx from "clsx";
import css from "./Friend.module.css";
const FriendItem = ({ item }) => {
  return (
    <div className={clsx("friendItemContainer")}>
      <img
        src={item.avatar}
        className={clsx("friendImg")}
        alt="Avatar"
        width="48"
      />
      <p className={css.friendText}>{item.name}</p>
      <p
        className={clsx(css.friendText, item.isOnline ? css.green : css.red)}
      ></p>
    </div>
  );
};

export default FriendItem;
