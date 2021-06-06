import React from 'react'
import styled from 'styled-components'

const Events = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius:5px;
    background-color: white;
    margin:17px;
    width: 45%;
    height: 600px;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
`
const Image = styled.img`
    width: 100%;
    margin-top: 0.7rem;
    margin-bottom: 0.5rem;
`
const Heading = styled.h3`
    font-size:1rem;
`
const Description = styled.p`
    font-size:.8rem;
`
const EventDate = styled.span`
    font-size: .9rem;
`
const EventJoin = styled.span`
    font-size: 1rem;
    font-weight:300;
`
const DetailsContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:20px;
`
const Link = styled.a`
        cusrsor:pionter;
        text-decoration:none;
`
const Content = styled.div`
    margin-left:10px;
    margin-right:10px;
`

const EventCard = ({ name, description, date, url, image }) => {
    return (
        <Events>
            <Image src={image} alt="Event Image" />
            <Content>
                <div class="container">
                    <Heading>{name}</Heading>
                    <Description>{description}</Description>
                </div>
                <DetailsContainer>
                    <EventDate>{`Event starts on ${date.toDateString()}`}</EventDate>
                    <EventJoin>{`Join us online at `}<Link href={url}>{url}</Link></EventJoin>
                </DetailsContainer>
            </Content>
        </Events>
    )
}

export default EventCard
