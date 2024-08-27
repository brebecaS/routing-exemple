import { useParams } from "react-router-dom";
import { usersInfoList } from "../constants";
import UserCard from "../components/UserCard";

const UserPage = () => {
  const params = useParams();
  const userId = params.userId;
  const currentUser = usersInfoList.find((user) => user.id === Number(userId));

  return <UserCard user={currentUser} />;
};
export default UserPage;
