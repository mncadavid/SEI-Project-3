import React, { useState, useEffect } from 'react';
import styled, {keyframes} from 'styled-components';
import { zoomIn } from 'react-animations';
import Icon from'@material-ui/core/Icon';
import Carousel from 'react-material-ui-carousel';
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
    width: 500px;
    height: 700px;
    
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

    let [photos, setPhotos] = useState({
        received: false,
        srcs: null
    })

    let [details, setDetails] = useState({
        received: false,
        placeDetails: null
    })

    // const getPhoto = (place) => {
    //     if(!photos.received){

    //         let photos = place.photos;
    //         if(photos.length === 0){
    //             setPhotos({
    //                 received: true,
    //                 src: null
    //             })
    //             return
    //         }
    //         let urls = []; 
    //         for(let i = 0; i< Math.min(photos.length,10); i++){
    //             let url = photos[i].getUrl({maxWidth: 500, maxHeight: 500});
    //             urls.push(url);
    //         }
    //         setPhotos({
    //             received: true,
    //             srcs: urls
    //         })
    //     }
    // }

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
        // getPhoto(props.place);
    })
    
    let dollars = new Array(props.place.price_level).fill("$");
    return(
        <ModalBackground onClick={(e) => localCloseCard(e)}>
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
                {/* <p>{props.place.opening_hours.open_now && "Open Now"}</p> */}
                <Carousel>
                {photos.received && photos.srcs.map(src => {
                        return <img className="carousel-image" referrerPolicy="no-referrer" key={src} src={src} alt={props.place.name}></img>})}
                </Carousel>
            </DetailedCard>
        </ModalBackground>
    )
}

export default DetailedPlaceCard;