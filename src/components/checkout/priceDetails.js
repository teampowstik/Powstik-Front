import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { H1 } from "../../util/StyledComponent/premadeComponent";
import GButton from "../../util/buttons/reusableButton/button";
import { useSelector } from "react-redux";

const PriceDetails = (props) => {
  const items = useSelector((state) => state.cartSelectedItem.cartSelectedItem);
  console.log(items);
  const [mrp, setmrp] = useState(0);

  useEffect(() => {
    let tmrp = 0;
    for (let i of items) {
      tmrp += i.price;
    }
    setmrp(tmrp);
  }, [items]);

  return (
    <React.Fragment>
      <Wrapper>
        <div>
          <H1 size="18" weight="500">
            Price Details({items.length} items)
          </H1>
          <H1 size="18" weight="300">
            {" "}
            Total MRP : {mrp}
          </H1>
          <H1 size="18" weight="300">
            {" "}
            Discount Applied : {"n"}
          </H1>
          <H1 size="18" weight="300">
            {" "}
            Coupan Discount : {"n"}
          </H1>
          <H1 size="18" weight="300">
            {" "}
            Conveinence Fee : {"n"}
          </H1>
          <hr />
          <H1 size="18" weight="500">
            Total Amount : {"n"}{" "}
          </H1>
        </div>
        <div>
          <GButton title="Place Order" bg="#8BC34A" width="100%" />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};
export default PriceDetails;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20%;
  @media (max-width: 790px) {
    justify-content: center;
  }
`;
