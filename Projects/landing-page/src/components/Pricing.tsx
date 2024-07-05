import React from 'react'

export const Pricing = ({ price, title, description, features, isPopular }) => {
  return (
    <div className='plan-card'>
      {isPopular && (
        <div className='popular_tag'>Popular</div>
      )}
      <div>
        <div>
          <h3>{price}</h3>
          <span>/month</span>
        </div>
      </div>
    </div>
  )
}