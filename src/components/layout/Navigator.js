import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navigator = () => {
  const [active, setActive] = useState(window.location.pathname)

  let options = [
    {
      to: '/',
      name: 'Stats'
    },
    {
      to: '/calendar',
      name: 'Calendar'
    },
    {
      to: '/details',
      name: 'Details'
    }
  ]

  return (
    <div className='nav-parent'>
      {options.map((el, i) => (
        <Link
          key={i}
          to={el.to}
          className={`nav-child ${active === el.to && 'nav-active'}`}
          onClick={() => setActive(el.to)}>
          <div>{el.name}</div>
        </Link>
      ))}
    </div>
  )
}

export default Navigator
