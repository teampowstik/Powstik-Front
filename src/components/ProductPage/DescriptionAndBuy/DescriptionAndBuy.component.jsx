import React from 'react'
import { DescriptionContainer, PageInfo, PageInfoButton } from './DescriptionAndBuy.styles'
import { H1, P1 } from '../../../util/StyledComponent/premadeComponent'
const DescriptionAndBuy = ({ heading, disease, type, price, description1, description2 }) => {
    return (
        <DescriptionContainer >
            <H1>{heading}</H1>
            <PageInfo>
                <PageInfoButton>{disease}</PageInfoButton>
                <PageInfoButton>{type}</PageInfoButton>
            </PageInfo>
            <PageInfo>
                <H1>Description</H1>
                <P1>Vender Info</P1>
            </PageInfo>
            <hr />
            <P1>{description1}</P1>
            {description2 ? <br /> : <div></div>}
            <P1>{description2}</P1>
            <br />
            <PageInfo>
                <P1>Item Quantity:</P1>
                <H1>-</H1>

                <H1>+</H1>
            </PageInfo>
        </DescriptionContainer>
    )
}

export default DescriptionAndBuy