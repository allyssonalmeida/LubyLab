import React, {createContext, useState} from 'react';

type UserType = {
  login: string,
  name: string,
  email: string,
  location: string,
  company: string,
  bio: string,
  avatar_url: string,
  followers_url: string,
  following_url: string,
  organizations_url: string,
  starred_url: string,
  public_repos: string,
  public_gists: string,
  followers: string,
  following: string
}

type PropsUserContext = {
  user: UserType;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
}

const DEFAULT_VALUE = {
  user: {
    login: "",
    name: "",
    email: "",
    location: "",
    company: "",
    bio: "",
    avatar_url: "",
    followers_url: "",
    following_url: "",
    organizations_url: "",
    starred_url: "",
    public_repos: "",
    public_gists: "",
    followers: "",
    following: ""
  },
  setUser: () =>{}
}

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE)

const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(DEFAULT_VALUE.user)
  return(
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export type {UserType}
export {UserContextProvider}
export default UserContext