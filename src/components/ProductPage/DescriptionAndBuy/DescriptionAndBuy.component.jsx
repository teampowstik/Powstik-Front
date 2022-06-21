import React from 'react'
import { DescriptionContainer, Itemcounter, PageInfo, PageInfoButton } from './DescriptionAndBuy.styles'
import { H1, P1 } from '../../../util/StyledComponent/premadeComponent'
const DescriptionAndBuy = ({ heading, disease, type, price, description1, description2, count }) => {
    return (
        <DescriptionContainer >
            <H1 size={24} color="#000000" lineHeight={32} >{heading}</H1>
            <PageInfo>
                <PageInfoButton>{disease}</PageInfoButton>
                <PageInfoButton>{type}</PageInfoButton>
            </PageInfo>
            <PageInfo>
                <H1 style={{ marginRight: 10 }}>Description</H1>
                <P1 color='#616161'>Vender info</P1>
            </PageInfo>
            <hr style={{ color: "rgba(139, 195, 74, 0.65)", height: 2, marginTop: -12 }} />
            <P1 color='#616161'>{description1}</P1>
            {description2 ? <div></div> : <br />}
            <P1 color='#616161'>{description2}</P1>
            <br />
            <PageInfo>
                <P1 color='#616161'>Item Quantity:</P1>
                <P1 color='#000000' weight={500}>-</P1>
                <Itemcounter>{count}</Itemcounter>
                <P1 color='#000000' weight={500}>+</P1>
            </PageInfo>
            <H1>Rs. {price}</H1>
        </DescriptionContainer>
    )
}

export default DescriptionAndBuy