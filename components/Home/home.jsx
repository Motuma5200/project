import React from 'react'
import Tittle from '../common/tittle/Tittle'
const home = () => {
  return (
    <>
       <section className="hero">
        <div className="container">
            <div className="row">
                <Tittle subtitle= 'BAGA NAGAAN DHUFTAN!' tittle='Karaa ogummaaf Waloomaa' />
                <p>Ergamumman ergama namummaa qabatee kan ka'e kayyoo dhaloota qaroomsuu fi of beeksisuu qaba. kannen danqa isatti ta'uu danda'an otuma jiranuu haalaa fi akkaataa barootaa mo'achuun galma kaayooo isaa ga'uuf harreeda</p>
                <div className="button">
                    <button className="primary-btn">
                        GET STARTED NOW 
                    </button>

                </div>
            </div>
        </div>
        </section>  
        <div className="margin"></div>  
    </>
  )
}

export default home