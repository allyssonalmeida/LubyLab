import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 0 auto;
  margin-top: calc(45vh - 100px);
  justify-content: center;
  align-items: center;
  gap: 20px;
  & img {
    display: block;
    height: 100px;
    width: 100px;
    margin: 0 auto;
  }
  & input[type=text] {
    width: 250px;
    height: 40px;
    border-radius: 5px;
    padding-left: 10px;
  }
  & button{
    width: 250px;
    height: 40px;
    border-radius: 5px;
    background: #FFCE00;
    color: #000;
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`