import "./UserCard.css";

const UserCard = ({ user }) => {
  return (
    <div className="container">
      <div className="card">
        <h2 style={{ textAlign: "center" }}>{user?.name}</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div className="info">Email: {user.email}</div>
            <div className="info">
              Phone:{" "}
              <a className="link" href="/">
                {user.phone}
              </a>
            </div>
            <div className="info">
              Address: {user.address.street}, {user.address.suite}
            </div>
          </div>
          <div>
            <div className="info">
              website:{" "}
              <a className="link" href={user.email}>
                {user.email}
              </a>
            </div>

            <div className="info">Company: {user.company.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
