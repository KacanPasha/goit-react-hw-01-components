import './Profile.css'
export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="block-stats">
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className="block-stats">
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className="block-stats">
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
