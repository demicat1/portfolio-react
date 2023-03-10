import React from 'react'

function Contacts() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p><a target='_blank' href='https://2gis.kz/astana' rel="noreferrer">Kazakhstan, Astana</a></p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p><a href="tel:+77012345678">+7 (701) 234-56-78</a></p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p><a href="mailto:webdev@protonmail.com">webdev@protonmail.com</a></p>
          </li>
        </ul>

      </div>
    </main>
  )
}

export default Contacts