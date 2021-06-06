import React from 'react';
import styled from 'styled-components';
import EventCard from './EventCard';
import { useSelector } from 'react-redux';
import ComingSoon from '../../Asset/ComingSoon.jpg'

const Heading = styled.h4`
    height: 65px;
    width: 100%;
    z-index: 3;
    color:#04009a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    font-weight: 100;
`

const Container = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius:5px;
    background-color: white;
    width: 50%;
    margin-left:15px;
    display: flex;
    flex-wrap: wrap;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`
const Image = styled.img`
    width: 100%;
    height:600px;
`

const BookingsList = () => {
    const eventsList = useSelector((state) => state.event.event);
    console.log("Data" + eventsList.length);
    return (
        <Container>
            <Heading>EVENTS LIST</Heading>
            {eventsList.length === 0 && <Image src={ComingSoon} alt="not events found" />}
            {eventsList && eventsList?.length > 0 && eventsList.map((event, index) => (
                <EventCard key={index} name={event.eventName} description={event.eventDesc} date={event.eventDate} image={event.eventPicture} url={event.platformURL} />
            ))}
        </Container>
    )
}

export default BookingsList
