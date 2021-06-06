import React, { useState } from 'react';
import styled from 'styled-components';
import Platform from './Platform';
import DateTime from './DateTime'
import Popup from './Popup';

import teams from '../../Asset/teams.png';
import webex from '../../Asset/webex.png';
import youtube from '../../Asset/youtube.jpg';
import zoom from '../../Asset/zoom.png';
import Gmeet from '../../Asset/google-meet-logo.png';
import Uploader from './Uploader';
import { useDispatch } from 'react-redux';
import { createEvent } from '../../features/eventSlice';

const Container = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius:5px;
    background-color: white;
    margin-right:15px;
    width: 50%;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`
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
const EventContainer = styled.div`
    margin-left:30px;
    margin-right:30px;
`
const EventName = styled.div`
    display:flex;
    flex-direction:column;
    padding:5px;
    margin-top:10px;
    margin-right:10px;
`
const Label = styled.p`
    font-size:1.2rem;
    font-family:font-family: "Lucida Console", "Courier New", monospace;
    font-weight:400;
`
const Input = styled.input`
    height:35px;
    border: 1px solid #ccc;
    font-size: 1.1rem;
    border-width: 1px;
    border-color: #77acf1;
    border-radius: 4px;
    outline:none;
`
const InputArea = styled.textarea`
    height:35px;
    border: 1px solid #ccc;
    font-size: 1.1rem;
    border-width: 1px;
    border-color: #77acf1;
    border-radius: 4px;
    outline:none;
    height:100px;
    background: none;
`

const Devider = styled.div`
    border-bottom: 1px solid #dedede;
`
const Joining = styled.div`
    margin-top:20px;
    display: flex;
    flex-direction: column;
    justify-content: left;
`

const JoiningHeading = styled.span`
    font-size: 1rem;
    font-weight: bold;
`
const JoiningSubHeading = styled.span`
    font-size: 0.8rem;
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;   
`
const JoiningPlatforms = styled.div`
display: flex;
flex-wrap: wrap;
`
const Submit = styled.button`
    height:40px;
    width:30%;
    display:flex;
    justify-content:center;
    font-size:1em;
    font-weight:300;
    color:#77acf1;
    border-width: 1px;
    border-color: #77acf1;
    border-radius: 4px;
    background:#231e23;
    color:white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin-top: 20px;
    margin-left: 35%;
    border-radius: 81px;
    align-items: center;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
`

const ErrorSpan = styled.span`
    color:red;
    font-size:.7rem;
`

const Booking = () => {

    const [eventPicture, setEventPicture] = useState();
    const [eventName, setEventName] = useState('');
    const [eventDesc, setEventDesc] = useState('');
    const [eventDate, setEventDate] = useState(new Date());
    const [platformURL, setPlatformURL] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [error, setErrors] = useState(false);

    const dispatch = useDispatch();

    const onSelect = (pictureFiles, pictureDataURLs) => {
        setEventPicture(pictureDataURLs);
    }
    const popupClose = (URL) => {
        setPlatformURL(URL);
        setIsOpen(false)
    }

    const submit = (e) => {
        if (eventName === '' || eventDesc === '' || platformURL === '') {
            e.preventDefault();
            setErrors(true);
        } else {
            e.preventDefault();
            setErrors(false);
            dispatch(createEvent({
                eventPicture,
                eventName,
                eventDesc,
                eventDate,
                platformURL
            }));
        }
    }

    return (
        <Container>
            <Heading>LET'S CREATE YOUR EVENT</Heading>
            <Devider />
            <form onSubmit={(e) => submit(e)}>
                <EventContainer>
                    <EventName>
                        <Label>Event Name</Label>
                        <Input onChange={(e) => setEventName(e.target.value)} />
                        {error && eventName === '' && <ErrorSpan>*Event name should be entered</ErrorSpan>}
                    </EventName>
                    <EventName>
                        <Label>Event Description</Label>
                        <InputArea onChange={(e) => setEventDesc(e.target.value)} />
                        {error && eventDesc === '' && <ErrorSpan>*Event description should be entered</ErrorSpan>}
                    </EventName>
                    <>
                        <Label>Event Starts from</Label>
                        <DateTime startDate={eventDate} onDateChange={(date) => setEventDate(date)} />
                    </>
                    <Joining>
                        <JoiningHeading>Which platform are you hosting your event on?</JoiningHeading>
                        <JoiningSubHeading>This information will be displayed on your event page</JoiningSubHeading>
                        <JoiningPlatforms>
                            <Platform image={zoom} name={'Zoom'} onClick={() => setIsOpen(true)} />
                            <Platform image={teams} name={'Teams'} onClick={() => setIsOpen(true)} />
                            <Platform image={Gmeet} name={'Meet'} onClick={() => setIsOpen(true)} />
                            <Platform image={youtube} name={'Youtube'} onClick={() => setIsOpen(true)} />
                            <Platform image={webex} name={'WebEx'} onClick={() => setIsOpen(true)} />
                            {isOpen && <Popup open={isOpen} handleClose={(URL) => popupClose(URL)} />}
                        </JoiningPlatforms>
                        <JoiningSubHeading>{platformURL && `Enterd URL - ${platformURL}`}</JoiningSubHeading>
                        {error && platformURL === '' && <ErrorSpan>*Event URL should be entered</ErrorSpan>}
                    </Joining>
                    <>
                        <Label>Event Cover Image</Label>
                        <Uploader onSelect={onSelect} />
                    </>
                </EventContainer>
                <Submit>Submit</Submit>
            </form>
        </Container>
    )
}

export default Booking