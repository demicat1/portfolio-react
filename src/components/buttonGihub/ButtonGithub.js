import React from 'react'

import icon from "../../img/icons/gitHub-black.svg"

function ButtonGithub({ link }) {
  return (
    <a href={link} target='_blank' rel="noopener noreferrer" className="btn-outline">
      <img src={icon} alt="" />
      GitHub repo
    </a>
  )
}

export default ButtonGithub