import React, { useState, useEffect } from 'react';
import styled, {keyframes} from 'styled-components';
import { zoomIn } from 'react-animations';
const slideAnimation = keyframes`${zoomIn}`;


const ModalBackground = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: rgba(0,0,0,0.4);
    z-index: 1;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DetailedCard = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    border: solid black 1px;
    min-height: 50px;
    margin: 5px auto;
    box-shadow: 0px 0px 8px gray;
    border-radius: 5px;
    background: white;
    position: relative;
    animation: ${slideAnimation} .5s;
    border-radius: 10px;
    box-shadow: 1px 1px 10px 1px black;
    
    .close{
        position: absolute;
        top: 0;
        right: 0;
    }   
`

function DetailedPlaceCard(props){

    const localCloseCard = (e) => {
        if (e.currentTarget === e.target) {
            props.closeDetailsCard(e);
        }
    }

    let [photo, setPhoto] = useState({
        received: false,
        src: null
    })

    const getPhoto = (reference) => {
        if(!photo.received){

            let photos = props.place.photos;
            if(!photos){
                setPhoto({
                    received: true,
                    src: null
                })
                return
            }
            let url = photos[0].getUrl({maxWidth: 300, maxHeight: 300});
            setPhoto({
                received: true,
                src: url
            })
        }
    }

    useEffect(() => {getPhoto(props.place.photos[0].photo_reference);})
    
    return(
        <ModalBackground onClick={(e) => localCloseCard(e)}>
            <DetailedCard>
                <button className="close" onClick={(e) => props.closeDetailsCard(e)}>X</button>
                <h2>{props.place.name}</h2>
                <h3>&#9733;{props.place.rating}</h3>
                <h4>{props.place.price_level}</h4>
                {/* <p>{props.place.opening_hours.open_now && "Open Now"}</p> */}
                {photo.received && <img src={photo.src} alt={props.place.name}></img>}
            </DetailedCard>
        </ModalBackground>
    )
}

export default DetailedPlaceCard;