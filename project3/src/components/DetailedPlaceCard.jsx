import React, { useState, useEffect } from 'react';
import styled, {keyframes} from 'styled-components';
import { zoomIn } from 'react-animations';
import Icon from'@material-ui/core/Icon';
import Carousel from 'react-material-ui-carousel';
const slideAnimation = keyframes`${zoomIn}`;

const DetailedCard = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    border: solid black 1px;
    min-height: 50px;
    margin: 5px auto;
    background: white;
    position: relative;
    animation: ${slideAnimation} .5s;
    border-radius: 10px;
    box-shadow: 1px 1px 10px 1px black;
    width: 500px;
    height: 700px;
    
    .close{
        position: absolute;
        top: 0;
        right: 0;
    }   
`

function DetailedPlaceCard(props){

    let [photos, setPhotos] = useState({
        received: false,
        srcs: null
    })

    let [details, setDetails] = useState({
        received: false,
        placeDetails: null
    })

    const getDetails = (place) => {
        if(!details.received){
            /*global google*/
            let request = {
                placeId: `${place.place_id}`
              };
            let map = document.querySelector('#map');
            new google.maps.places.PlacesService(map).getDetails(request, callback)
              
            function callback(place, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    setDetails({
                        received: true,
                        placeDetails: place
                    })
                    if(place.photos.length === 0){
                        setPhotos({
                            received: true,
                            src: null
                        })
                        return
                    }
                    let urls = []; 
                    for(let i = 0; i< Math.min(place.photos.length,10); i++){
                        let url = place.photos[i].getUrl({maxWidth: 500, maxHeight: 450});
                        urls.push(url);
                    }
                    setPhotos({
                        received: true,
                        srcs: urls
                    })
                }
            }
        }
    }

    useEffect(() => {
        getDetails(props.place);
    })
    
    let dollars = new Array(props.place.price_level).fill("$");
    return(
        <DetailedCard>
            <button className="close" onClick={(e) => props.closeDetailsCard(e)}>X</button>
            <h2>{props.place.name}</h2>
            {details.placeDetails !== null &&
                <div className="conditional-content">
                    <p>{details.placeDetails.formatted_address}</p>
                    <p>{details.placeDetails.formatted_phone_number}</p>
                    <a target="_blank"rel="noreferrer" href={details.placeDetails.website}>Website</a> 
                </div> 
                }
            <h3>&#9733;{props.place.rating}</h3>
            <div className="price-level">
                {dollars.map(dollar => <Icon>attach_money</Icon>)}
            </div>
            <Carousel>
            {photos.received && photos.srcs.map(src => {
                    return <img className="carousel-image" referrerPolicy="no-referrer" key={src} src={src} alt={props.place.name}></img>})}
            </Carousel>
        </DetailedCard>
    )
}

export default DetailedPlaceCard;