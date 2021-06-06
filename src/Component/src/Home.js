import React from 'react'
import Booking from './Booking';
import BookingsList from './BookingsList';
import styled from 'styled-components'

const Container = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    font-size: 1.7em;
    display: flex;
`
const Home = () => {
    return (
        <Container className="home">
            {/*block for create booking form*/}
            <Booking />

            {/*block for list of booking created*/}
            <BookingsList />
        </Container>
    )
}

export default Home
