import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <header>
        <a
          className="header-home"
          href="/"
          activeStyle={{ color: '#FFFFFF;' }}
        >
          Lacey & Mike
        </a>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li>
              <a
                href="/"
                activeStyle={{ color: '#FFFFFF;' }}
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                href="/"
                activeStyle={{ color: '#FFFFFF;' }}
              >
                The Details
              </a>
            </li>
            <li>
              <a
                href="/"
                activeStyle={{ color: '#FFFFFF;' }}
              >
                Travel Tips
              </a>
            </li>
            <li>
              <a
                href="/"
                activeStyle={{ color: '#FFFFFF;' }}
              >
                Photos
              </a>
            </li>
            <li>
              <a
                href="/"
                activeStyle={{ color: '#FFFFFF;' }}
              >
                Registry
              </a>
            </li>
          </ul>
        </nav>
        <a
          className="header-rsvp"
          href="/"
          activeStyle={{ color: '#FFFFFF;' }}
        >
          RSVP +
        </a>
      </header>
    )
  }
}
