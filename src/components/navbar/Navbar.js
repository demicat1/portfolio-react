import React from 'react'
import { NavLink } from 'react-router-dom'

import ButtonDarkMode from '../buttonDarkMode/ButtonDarkMode'

function Navbar() {
  const activeLink = "nav-list__link nav-list__link--active"
  const normalLink = "nav-list__link"

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Adilkhan</strong> portfolio
          </NavLink>
          <ul className="nav-list">
            <li className="nav-list__link">
              <NavLink to="/" className={({ isActive }) => {
                return isActive ? activeLink : normalLink
              }}>
                Home
              </NavLink>
            </li>
            <li className="nav-list__link">
              <NavLink to="/projects" className={({ isActive }) => {
                return isActive ? activeLink : normalLink
              }}>
                Projects
              </NavLink>
            </li>
            <li className="nav-list__link">
              <NavLink to="/contacts" className={({ isActive }) => {
                return isActive ? activeLink : normalLink
              }}>
                Contacts
              </NavLink>
            </li>
          </ul>
          <ButtonDarkMode />
        </div>
      </div>
    </nav>
  )
}

export default Navbar