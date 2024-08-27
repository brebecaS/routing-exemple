import { useParams } from "react-router-dom";

const RepositoryPage = () => {
  const params = useParams();

  return <h1>{params.repositoryName}</h1>;
};
export default RepositoryPage;
