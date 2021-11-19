import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Categories = () => {

  const navigate = useNavigate()

  useEffect(() => {
    document.addEventListener('keyup', (e) => {
      if (e.key === 'h') {
        navigate('/', {replace: true})
      } else if (e.key === 'f') {
        navigate('quote/famous/', {replace: true})
      } else if (e.key === 'p') {
        navigate('/quote/programming/', {replace: true})
      }        
    })
    // eslint-disable-next-line
  }, [])

  return (
    <div className="category">
      <Link to="quote/famous">Famous Quotes</Link>
      <Link to="quote/programming">Programming Quotes</Link>
    </div>
  )
}

export default Categories