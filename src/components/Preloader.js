import React from 'react'

import HourGlass from './Hourglass.gif'

const Preloader = () => {
  return (
    <img className="preloader" src={HourGlass} alt="loading..." />
  )
}

export default Preloader
