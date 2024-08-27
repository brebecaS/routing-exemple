import { usersInfoList } from "../constants";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const usersList = usersInfoList.map((user) => (
    <li key={user.id}>
      <Link to={"/user/" + user.id}>{user.name}</Link>
    </li>
  ));

  return (
    <div>
      <h1>Users</h1>
      <ul>{usersList}</ul>
    </div>
  );
};
export default UsersPage;
