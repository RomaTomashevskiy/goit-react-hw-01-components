import { FriendListItem } from "./FriendListItem"
import PropTypes from 'prop-types';



export function FriendList({friends}) {
    return <ul>
      {friends.map(({id,avatar,name,isOnline}) => {
          return  <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
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
