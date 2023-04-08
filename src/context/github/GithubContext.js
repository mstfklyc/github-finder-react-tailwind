import { createContext, useEffect, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],  
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Search  users
  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
    const { items } = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };
  // Get User Repos
  const getUserRepos = async (login) => {
    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });
    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`
    );
    const data = await response.json();
    dispatch({
      type: "GET_REPOS",
      payload: data,
    });
  };

  // Get Single User
  const getUser = async (login) => {
    setLoading(true);
    const response = await fetch(`${GITHUB_URL}/users/${login}`);
    setLoading(false);
    const data = await response.json();
    dispatch({
      type: "GET_USER",
      payload: data,
    });
  };
  // clear users
  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };
  // Set Loading
  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
        user: state.user,
        getUser,
        repos: state.repos,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
