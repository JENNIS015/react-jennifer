import React from 'react'
import './Homepage-css.css'

export default function Homepage() {
  return (
    <div className="intro-header">
  

      <div className="row">
        <div className="col-lg-4">
          <div className="intro-message">
       
            <h1 className="animated slideInLeft">Encuentra la tecnologia que necesitas.</h1>
            <h3 className="animated slideInRight">Explora las opciones.</h3>

            <ul className="list-inline intro-social-buttons">
              <li>
                <a href="/">
                  <button className="btn animated">
                    <span className="network-name">Ofertas</span>
                  </button>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>

    </div>

  )
}
