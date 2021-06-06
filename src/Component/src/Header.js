import React from 'react'
import styled from 'styled-components'
import mainlogo from '../../Asset/logo1.png';

const HeaderContainer = styled.div`
    background-color:#1d1819;
    margin-bottom:10px;
    display:flex;
    align-items:center;
    width:100%;
`
const Image = styled.img`
    margin-left: 20px;
    height:70px;
`
const Title = styled.span`
    color:white;
    margin-left:10px;
    font-size:1.7rem;
    font-family: "Lucida Console", "Courier New", monospace;
    user-select: none;
`

const Header = () => {
    return (
        <HeaderContainer>
            <Image src={mainlogo} alt='Comedy Logo' />
            <Title>Comedy Adda</Title>
        </HeaderContainer>
    )
}

export default Header
