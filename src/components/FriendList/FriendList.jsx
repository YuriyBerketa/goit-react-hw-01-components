import PropTypes from "prop-types";
import { Friend } from "./Friend/Friend";

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
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