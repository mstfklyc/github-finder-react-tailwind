import React from "react";
import RepoItem from "./RepoItem";
function RepoList({ repos }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Reposteries
        </h2>
      </div>
      {repos.map((repo) => {
        return <RepoItem repo={repo} key={repo.id} />;
      })}
    </div>
  );
}

export default RepoList;
