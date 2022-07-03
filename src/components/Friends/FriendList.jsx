import { FriendListItem } from "./FriendListItem"
import PropTypes from 'prop-types';



export function FriendList({friends}) {
    return <ul>
        {friends.map(friend => {
          return  <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
        })}
    </ul>
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};
