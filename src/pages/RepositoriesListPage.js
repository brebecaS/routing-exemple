import { Link } from "react-router-dom";

const RepositoriesListPage = () => {
  const repositoriesListElements = [
    "shop_app",
    "useEffect_exercises",
    "useState_exercises",
  ].map((repo) => (
    <li key={repo}>
      <Link to="/repository/.....">{repo}</Link>
    </li>
  ));

  return (
    <div>
      <h1>Repositories List Page</h1>
      <ul>
        <li>
          <Link to="/repository/shop_app">shop_app</Link>
        </li>
        <li>
          <Link to="/repository/useEffect_exercises">useEffect_exercises</Link>
        </li>
        <li>
          <Link to="/repository/useState_exercises">useState_exercises</Link>
        </li>
      </ul>
    </div>
  );
};
export default RepositoriesListPage;
