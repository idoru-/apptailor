import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
  render() {
    return (
      <div>
        My
        <FontAwesomeIcon icon={faHeart} />
        Salon
      </div>
    )
  }
}

export default Navbar
