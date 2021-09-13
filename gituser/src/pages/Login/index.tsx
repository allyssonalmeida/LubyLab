import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom"
import api from '../../service/api'
import { Form } from "./style"
import Github from "../../assets/github.png"
import UserContext from '../../context/user'
import {FiArrowRight} from 'react-icons/fi'
function Inicio(){
  const history = useHistory()
  const [login, setLogin] = useState<string>('')
  const { setUser } = useContext(UserContext)
  function handleSubmit(event: { preventDefault: () => void }){
    event.preventDefault();
      api.get(`https://api.github.com/users/${login}`)
      .then(response => {
        setUser({
          login: response.data.login,
          name: response.data.name,
          email: response.data.email,
          location: response.data.location,
          company: response.data.company,
          bio: response.data.bio,
          avatar_url: response.data.avatar_url,
          followers_url: response.data.followers_url,
          following_url: response.data.following_url,
          organizations_url: response.data.organizations_url,
          starred_url: response.data.starred_url,
          public_repos: response.data.public_repos,
          public_gists: response.data.public_gists,
          followers: response.data.followers,
          following: response.data.following
        })
      }).then(()=>{ history.push("/inicio")})
  }
  return(
    <Form onSubmit={handleSubmit}>
        <img src={Github} alt="logo" />
        <input required type="text" id="login" inputMode="text" pattern="[a-z]{1,15}" name="login" placeholder="Usuário" value={login} onChange={e => setLogin(e.target.value)} />
        <button type="submit">Entrar <FiArrowRight /></button>
    </Form>
  )
};

export default Inicio;