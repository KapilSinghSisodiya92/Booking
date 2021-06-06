import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
width: 7rem;
height: 6rem;
border-radius: 0.4rem;
box-shadow: 0px 0px 2px rgb(0 0 0 / 25%);
color: #555;
font-size: 1.2rem;
margin-right: 1.1rem;
margin-bottom: 0.5rem;
display: flex;
flex-direction: column;
align-items: center;
cursor: pointer;
&:hover {
    background-color:#F7EEFF;
}
`

const Image = styled.img`
    width: 3rem;
    margin-top: 0.7rem;
    margin-bottom: 0.5rem;
`

const Name = styled.span`
    margin-bottom: 0.8rem;
`

const Platform = ({ image, name, onClick }) => {
    return (
        <Card onClick={onClick}>
            <Image src={image} alt={`platform ${name}`} />
            <Name>{name}</Name>
        </Card>
    )
}

export default Platform
