import React, { useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import UserContext from '../../context/user'
import { Wrapper, ProfileImg, ProfileInfo,ProfileMenu } from "../../theme/userPage"
import { Header } from '../../theme/globalStyle'
import Footer from '../../components/Footer'
import {FiLogOut} from 'react-icons/fi'

function Inicio(){
  const history = useHistory()
  const { user, setUser } = useContext(UserContext)
  if(user.name === ''){
    history.push("/login")
  }

  function logout(){
    setUser({
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
    })
    history.push("/login")
  }
  return(
    <>
    <Header>
      <a href={`http://github.com/${user.login}`} target="_blank" rel="noreferrer">#{user.login}</a>
      <button onClick={logout}><span>Sair</span> <FiLogOut /></button>
    </Header>
    <Wrapper>
      <ProfileImg>
        <img src={user.avatar_url} alt={user.name} />
      </ProfileImg>
      <ProfileInfo>
        <h1>{user.name}</h1>
        <span>{user.email}</span>
        <span>{user.location}</span>
      </ProfileInfo>
      <ProfileMenu>
        <Link to="/seguidores">
          <span>{user.followers}</span>
          Seguidores
        </Link>
        <Link to="/seguindo">
          <span>{user.following}</span>
          Seguindo
        </Link>
        <Link to="/repositorios">
          <span>{user.public_repos}</span>
          Repos
        </Link>
      </ProfileMenu>
      <ProfileInfo>
        <h1>Bio</h1>
        <p>{user.bio}</p>
      </ProfileInfo>
    </Wrapper>
    <Footer />
    </>
  )
};

export default Inicio;