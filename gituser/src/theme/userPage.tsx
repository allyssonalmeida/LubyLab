import styled from 'styled-components'
import TitleImg from "../assets/title.png"
import Star from "../assets/star.png"

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  width: 75vw;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
  background: #292929;

  .small{
    width: 64px;
    height: 64px;
    margin: initial;
    cursor: pointer;
    & img{
      width: 100%;
    }
  }

  @media(max-width: 768px){
    width: 100vw;
  }
`

export const ProfileImg = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 100%;
  border: 4px solid #fff;
  margin: 0 auto;
  margin-top: -90px;
  & img {
      display: block;
      object-fit: cover;
      object-position: center center;
      width: 100%;
      clip-path: circle();
    }
`
export const ProfileInfo = styled.div`
  position: relative;
  & h1 {
    padding: 20px;
    background: url(${TitleImg});
    background-repeat: no-repeat;
    background-position: center left;
  }
  & p{
    padding: 20px;
  }
  & span{
    display: block;
    padding-left: 20px;
  }
`

export const ProfileMenu = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #383838;
  margin: 20px 0;
  padding: 5px 0;
  & a{
    & span{
      display: block;
      font-size: 2.5rem;
      font-weight: 600;
      text-align: center;
    }
  }
`

export const FollowersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & div{
    display: flex;
    flex-direction: row;

    & img{
      width: 50px;
    }
  }
`

export const FollowerItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: url(${TitleImg});
  background-position: left center;
  background-repeat: no-repeat;

  & h2{
    font-size: 1.1rem;
    cursor: pointer;
  }
  & button{
    background: transparent;
    color: #fff;
    font-weight: 600;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
  }
`

export const RepoItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: url(${TitleImg});
  background-position: left center;
  background-repeat: no-repeat;
  border-bottom: 1px solid rgba(255, 255, 255, .3);

  & h2{
    font-size: 1.1rem;
    cursor: pointer;
    width: 100%;
  }
  & p{
    display: block;
    font-size: .9rem;
    font-weight: 300;
    width: 100%;
  }
  & button{
    background: transparent;
    color: #fff;
    font-weight: 600;
    font-size: 2rem;
    border: none;
    cursor: pointer;
  }
  & span {
    display: flex;
    align-items: center;
    padding-left: 25px;
    position: relative;
    font-weight: 300;
    font-size: .9rem;
    &::before{
      position: absolute;
      top: -4px;
      left: 0;
      content: '';
      display: inline-block;
      height: 20px;
      width: 20px;
      background: url(${Star});
      background-size: 20px;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`