import React from 'react'
import mobilePosts from '../images/phone.svg'
import { GetContext } from '../ContextApi'

const Hero = () => {
   const{closeSubMenu} = GetContext();

  return (
    <main className='hero_wrapper' onMouseOver={closeSubMenu}>
        <section className='hero_container'>
            <article>
                <h1>Payments infrastructure 
                    <br/>for the internet
                </h1>
                <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
                <button className='signIn'>Sign in</button>
            </article>
            <article>
                <div className='image_post'>
                    <img src={mobilePosts} alt='stripe mobile view'/>
                </div>
            </article>
        </section>    
    </main>
  )
}

export default Hero