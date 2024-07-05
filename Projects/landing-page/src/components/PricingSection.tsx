import React from 'react'
import { pricing } from '../constants'
import { Pricing } from './Pricing'

export const PricingSection = () => {
  return (
    <div>
      {pricing.map(({ title, description, isPopular, features, price }, index) => (
        <Pricing
          key={index}
          price={price}
          title={title}
          features={features}
          isPopular={isPopular}
          description={description}
        />
      ))}
    </div>
  )
}