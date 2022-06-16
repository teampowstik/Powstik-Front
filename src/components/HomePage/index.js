import React from 'react'

import CardSlider from './SlickSlider';
import Headers from './Headers';

const HomePage = () => {
  return (
    <div>
        <Headers main="Geriatrics" sub="Nutrition solutions for common health conditions in ageing men and women. "/>
        <CardSlider/>
        <Headers main="Metabolics" sub="Research led Low carb substitutes, Proteins etc to tackle Diabetes & obesity. "/>
        <CardSlider/>
        <Headers main="Mother & Child" sub="Choicest Groceries, Pulses, Millets, and cereals from around your country. "/>
        <CardSlider/>
    </div>
  )
}

export default HomePage;