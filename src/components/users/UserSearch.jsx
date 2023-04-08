import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

function UserSearch() {
  const [text, setText] = useState("");
  const { setAlert } = useContext(AlertContext);
  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div className="grid  grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2  mb-8 gap-8">
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  className="w-full pr-40 bg-gray-200 input input-md text-black"
                  placeholder="Search User"
                  onChange={handleChange}
                  value={text}
                ></input>
                <button
                  className="absolute top-0 right-0 rounded-l-none w-36 btn btn-md border-0"
                  type="submit"
                >
                  Go
                </button>
                {users
                  ? users.length > 0 && (
                      <div>
                        <button
                          className="btn btn-ghost-outline btn-md mt-3"
                          type="button"
                          onClick={clearUsers}
                        >
                          Clear
                        </button>
                      </div>
                    )
                  : ""}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserSearch;
