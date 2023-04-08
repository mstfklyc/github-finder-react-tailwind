import { Link } from "react-router-dom";
function UserItem({ user: { login, avatar_url, type, hireable } }) {
  return (
    <div className="card shadow-sm shadow-white compact side bg-base-300 p-5">
      <div className="ml-2 mr-1 badge badge-success ">{type}</div>
      {hireable ? <div className="mx-1 badge badge-info"> Hireable</div> : null}

      <div className="flex-row items-center space-x-4 card-body">
        <div className="avatar">
          <div className="rounded-full shadow w-16 h-16">
            <img src={avatar_url} alt="userimage"></img>
          </div>
        </div>
      </div>
      <h2 className="card-title">{login}</h2>
      <Link className="text-base-content text-opacity-40" to={`/user/${login}`}>
        Visit Profile
      </Link>
    </div>
  );
}

export default UserItem;
