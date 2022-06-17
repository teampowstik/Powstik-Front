import React from "react";

import CardHeaders from "../cardHeaders";
import CardSlider from "../SlickSlider"

const ProductBox = () => {
  return (
    <div>
      <CardHeaders
        main="Geriatrics"
        sub="Nutrition solutions for common health conditions in ageing men and women. "
      />
      <CardSlider />
      <CardHeaders
        main="Metabolics"
        sub="Research led Low carb substitutes, Proteins etc to tackle Diabetes & obesity. "
      />
      <CardSlider />
      <CardHeaders
        main="Mother & Child"
        sub="Choicest Groceries, Pulses, Millets, and cereals from around your country. "
      />
      <CardSlider />
    </div>
  );
};

export default ProductBox;
