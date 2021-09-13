import React, { useContext, useState, useEffect } from 'react'
import api from "../../service/api"
import { useHistory } from 'react-router-dom'
import UserContext from '../../context/user';
import { Wrapper, FollowersWrapper, RepoItem} from "../../theme/userPage"
import { Header } from '../../theme/globalStyle'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer';
import {FiArrowLeft} from 'react-icons/fi'

function Repositorios(){
  const history = useHistory()
  const { user } = useContext(UserContext)
  const [ repos, setRepos ] = useState<Array<any>>([])

  if(user.name === ''){
    history.push("/login")
  }

  async function getRepos(){
    try{
      const response = await api.get(`https://api.github.com/users/${user.login}/repos`)
      setRepos(response.data)
      //console.log(repos)
    }
    catch(error){
      console.error(error)
    }
  }

  useEffect(()=>{
    repos === undefined || repos.length <= 0 ? getRepos() : console.log('PEI')
    //console.log(repos)
  })
  
  return(
    <>
    <Header>
      <Link to="/inicio" className="voltar" ><FiArrowLeft /></Link>
      <h1> {user.public_repos} repositórios</h1>
      <span></span>
    </Header>
    <Wrapper className="mt-0">
      <FollowersWrapper>
        {repos.map(repo =>(
          <RepoItem key={repo.id}>
            <a href={repo.html_url} >
              <h2>{repo.name}</h2>
            </a>
            <p>{repo.description}</p>
            <span>{repo.stargazers_count}</span>
          </RepoItem>
        ))}
      </FollowersWrapper>
    </Wrapper>
    <Footer />
    </>
  )
};

export default Repositorios;