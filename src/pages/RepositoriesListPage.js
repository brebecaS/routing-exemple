import { Link } from "react-router-dom";

const RepositoriesListPage = () => {
  const repositoriesListElements = [
    "shop_app",
    "useEffect_exercises",
    "useState_exercises",
  ].map((repo) => (
    <li key={repo}>
      <Link to={"/repository/" + repo}>{repo}</Link>
    </li>
  ));

  return (
    <div>
      <h1>Repositories List Page</h1>
      <ul>{repositoriesListElements}</ul>
    </div>
  );
};
export default RepositoriesListPage;
