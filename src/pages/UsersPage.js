import { usersInfoList } from "../constants";

const UsersPage = () => {
  const usersList = usersInfoList.map((user) => (
    <li key={user.id}>
      <a>{user.name}</a>
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
