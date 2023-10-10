import styles from './FriendList.css'
export const FriendList = ({ friends }) => {

    return (
<ul className="friend-list">
{friends.map((friend) => (
          <li className="item"key={friend.id}>
          <span className="status" style={{ backgroundColor: friend.isOnline === true ? "green" : "red" }}></span>
          <img className="avatars" src={friend.avatar} alt="User avatar" width="48" />
          <p className="names">{friend.name}</p>
        </li>))}

</ul>
    );
};