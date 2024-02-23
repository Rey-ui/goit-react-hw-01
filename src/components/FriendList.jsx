import PropTypes from 'prop-types';
import clsx from "clsx";
import "./Friend.css"
const FriendList = ({ friends }) => {
    return (
        <ul className={clsx('friendList')}>
            {friends.map((item) => {

                return <li key={item.id} className={clsx('friendItem')}>
                    <div className={clsx('friendItemContainer')}>
                        <img src={item.avatar} className={clsx('friendImg')} alt="Avatar" width="48" />
                        <p className={clsx('friendText')}>{item.name}</p>
                        <p className={clsx("friendText",
                            item.isOnline ? "green" : "red"
                        )}></p>
                    </div>
                </li>
            })}

        </ul >
    )
}
FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};
export default FriendList