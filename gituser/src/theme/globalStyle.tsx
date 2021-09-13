import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    background:#1F1F1F ;
    color: #FBFBFB;
    font-size: 100%;
    font-family: 'Inter', sans-serif;
  }
  a{
    text-decoration: none;
    color: #FBFBFB;
  }
  textarea:focus, input:focus{
    outline: none;
  }

  .invalid{
    border: 2px solid #ff0000;
  }

  .mt-0{
    margin-top: 0!important
  }

  .active{
    color: #000!important;
  }

  .voltar svg{
    font-size: 1.75rem;
  }
`;

export const Header = styled.header`
  display: flex;
  width: 75vw;
  height: 100px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  background: #1F1F1F;
  padding: 10px;
  & a{
    display: block;
  }

  & h1{
    font-size: 1rem;
    text-align: center;
  }

  & button {
    background: transparent;
    border: none;
    color: #D03434;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 5px;
    & span{
      font-size: 1rem;
      color: #fbfbfb;
    }
  }

  @media(max-width: 768px){
    width: 100vw;
  }
}`;

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 20px 10px;
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 75vw;
  margin-left: -37.5vw;
  border-radius: 15px 15px 0 0;
  & a{
    color: #A5A5A5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & svg{
      font-size: 1.5rem;
    }
  }

  @media(max-width: 768px){
    width: 100vw;
    left: 0;
    margin-left: initial;
  }
`
export const BottomNav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 75vw;

  @media(max-width: 768px){
    width: 100vw;
  }
`

export default GlobalStyle;
