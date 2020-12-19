import React from 'react';
import { Link } from 'react-router-dom'

const Stats = () => (
    <section>
      <div>
        <h6>SIMPLE AND FAST WAY TO RENT</h6>
        <h3>Comfortable home from reliable people</h3>
      </div>
      <div>
        <h4>all stats at your fingertips at any time</h4>
        <p></p>
        <Link to='#' className='btn--learnmore'>LEARN MORE</Link>
      </div>
      <div>
        <img src={''} alt='stats image' className='stats__image' />
      </div>
    </section>
)

export default Stats;