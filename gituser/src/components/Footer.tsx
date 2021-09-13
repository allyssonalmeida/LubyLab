import React from 'react'
import { FiGithub, FiHome, FiUsers  } from "react-icons/fi";
import { FooterWrapper, BottomNav } from '../theme/globalStyle'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <FooterWrapper>
      <BottomNav>
      <NavLink to="/inicio" activeClassName="active">
        <FiHome />
        <span>Home</span>
      </NavLink>
      <NavLink to="/repositorios" activeClassName="active">
        <FiGithub />
        <span>Repos</span>
      </NavLink>
      <NavLink to="/seguidores" activeClassName="active">
        <FiUsers />
        <span>Seguidores</span>
      </NavLink>
      <NavLink to="/seguindo" activeClassName="active">
        <FiUsers />
        <span>Seguindo</span>
      </NavLink>
      </BottomNav>
    </FooterWrapper>
  )
}
