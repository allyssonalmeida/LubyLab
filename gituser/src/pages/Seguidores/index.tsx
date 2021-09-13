import React, { useContext, useState, useEffect } from 'react'
import api from "../../service/api"
import { useHistory } from 'react-router-dom'
import UserContext, { UserType } from '../../context/user';
import { Wrapper, ProfileImg, FollowersWrapper, FollowerItem} from "../../theme/userPage"
import { Header } from '../../theme/globalStyle'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer';
import {FiArrowLeft, FiArrowRight} from 'react-icons/fi'

function Seguidores(){
  const history = useHistory()
  const { user, setUser } = useContext(UserContext)
  const [ followers, setFollowers ] = useState<Array<UserType>>([])
  if(user.name === ''){
    history.push("/login")
  }

  async function getFollowers(){
    try{
      const response = await api.get(user.followers_url)
      setFollowers(response.data)
      console.log(followers)
    }
    catch(error){
      console.error(error)
    }
  }
  useEffect(()=>{
    followers === undefined || followers.length <= 0 ? getFollowers() : console.log('PEI')
    console.log(followers)
  })
  
  function changeUser(login: string){
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
    <>
    <Header>
      <Link to="/inicio" className="voltar"><FiArrowLeft /></Link>
      <h1>{user.followers} seguidores</h1>
      <span></span>
    </Header>
    <Wrapper className="mt-0">
      <FollowersWrapper>
        {followers.map(follow => (
          <FollowerItem>
            <ProfileImg className="small">
              <img src={follow.avatar_url} alt={follow.login} />
            </ProfileImg>
            <h2>#{follow.login}</h2>
            <button onClick={() => { changeUser(follow.login) }}><FiArrowRight /></button>
          </FollowerItem>
        ))}
      </FollowersWrapper>
    </Wrapper>
    <Footer />
    </>
  )
};

export default Seguidores;