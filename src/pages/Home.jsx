import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";
import Alert from "../components/users/layout/Alert";
function Home() {
  return (
    <div className="container  mx-auto p-20 ">
      <Alert />
      <UserSearch />
      <UserResults />
    </div>
  );
}

export default Home;
