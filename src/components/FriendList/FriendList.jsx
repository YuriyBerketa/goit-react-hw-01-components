import PropTypes from "prop-types";
import { Friend } from "./Friend/Friend";
import css from "./FriendList.module.css";

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) =>
            (<Friend key={id} avatar = { avatar }
                name = { name } isOnline = { isOnline } />
                 ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}