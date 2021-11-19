import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FcHome } from 'react-icons/fc'

import Preloader from './Preloader'
import { db } from './data/db.js'

const Quote = () => {

  const { type } = useParams()
  const [quote, setQuote] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  // Another Quote
  const anotherQuote = () => {
    fetchRandomQuote()
  }
  
  // Fetch Random Quote
  const fetchRandomQuote = async () => {

    if (type === 'famous') {   

      setLoading(true)

      const res = await fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
      const data = await res.json()
      setQuote(data.data[0])

      setLoading(false)

    } else if (type === 'programming') {

      setLoading(true)
      
      setQuote(db[Math.round(Math.random() * db.length-1)])

      setLoading(false)

    }

  }

  useEffect(() => {
    fetchRandomQuote()
    // eslint-disable-next-line
  }, [type])

  const goHome = () => {
    navigate('/', { replace: true })
  }

  if (!loading) {
    if (!quote) {
      fetchRandomQuote()
    }
    var tweet = type === 'famous' ? `"${quote.quoteText}" \n- ${quote.quoteAuthor}` : `"${quote.en}" \n- ${quote.author}`
    var tweetIntent = `https://twitter.com/intent/tweet?text=${tweet}`
  }

  return (
    <>
      <button onClick={goHome} className="go-home"><FcHome /> Go Home</button>
      {
        loading ? <Preloader /> : (
          <>
            <div className="quote-card">
              {type === 'famous' ? (
                <>
                  <h4>{quote.quoteText}</h4>
                  <h5>Author - {quote.quoteAuthor}</h5>
                  <span>Genre - {quote.quoteGenre}</span> 
                </>
              ) : (
                <>
                  <h4>{quote.en}</h4>  
                  <h5>Author - {quote.author}</h5>                
                </>                           
              )}
            </div>

            <div className="options">
              <button onClick={anotherQuote}>Another Quote</button>
              {tweet.length <= 280 ? <a href={tweetIntent} target="_blank" rel="noreferrer">Tweet it</a> : <span>Tweet Length &gt; 280</span>}
            </div>
          </>
        )
      }
    </>
  )
}

export default Quote
