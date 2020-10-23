import React from 'react';
import {Link, Route} from 'react-router-dom';
import PlaceCardContainer from './PlaceCardContainer';


 function ResultsContainer(){

    return(
        <div className="results-container">
            <nav className="nav-bar">
                <Link className="nav-link" to="/restaurants">Restaurants</Link>
                <Link className="nav-link" to="/parks">Parks</Link>
                <Link className="nav-link" to="/museums">Museums</Link>
            </nav>
            <Route path="/restaurants" 
                render={routerProps => (<PlaceCardContainer results={results}/>)} />
            {/* <Route path="/parks" render={routerProps => (<PlaceCardContainer results={parkResults}/>)} />
            <Route path="/museums" render={routerProps => (<PlaceCardContainer results={museumResults}/>)} /> */}
        </div>
    )
}

let results = [
    {
       "business_status" : "OPERATIONAL",
       "geometry" : {
          "location" : {
             "lat" : -33.8587323,
             "lng" : 151.2100055
          },
          "viewport" : {
             "northeast" : {
                "lat" : -33.85739417010727,
                "lng" : 151.2112278798927
             },
             "southwest" : {
                "lat" : -33.86009382989272,
                "lng" : 151.2085282201073
             }
          }
       },
       "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
       "name" : "Cruise Bar",
       "opening_hours" : {
          "open_now" : false
       },
       "photos" : [
          {
             "height" : 575,
             "html_attributions" : [
                "\u003ca href=\"https://maps.google.com/maps/contrib/112582655193348962755\"\u003eA Google User\u003c/a\u003e"
             ],
             "photo_reference" : "CmRaAAAAoP5GK5krYiyEDJ0IQxmVDfG2LzA_Yo9VZ1PS2wEyDABLBD_4niGEfSEdGIQFj17lMdl94SbQcDMBk8TuURRlgqutSPLES2HUOfI5fKQxKgwkdfllWChi-Cn4iXBc56uNEhCUl12EeKPOkgx-Agc9cEscGhSuu2FaOLI1DKHEnWJSmwgu6UOgzg",
             "width" : 766
          }
       ],
       "place_id" : "ChIJi6C1MxquEmsR9-c-3O48ykI",
       "plus_code" : {
          "compound_code" : "46R6+G2 The Rocks, New South Wales",
          "global_code" : "4RRH46R6+G2"
       },
       "price_level" : 2,
       "rating" : 4,
       "reference" : "ChIJi6C1MxquEmsR9-c-3O48ykI",
       "scope" : "GOOGLE",
       "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ],
       "user_ratings_total" : 1047,
       "vicinity" : "Level 1, 2 and 3, Overseas Passenger Terminal, Circular Quay W, The Rocks"
    },
    {
       "business_status" : "OPERATIONAL",
       "geometry" : {
          "location" : {
             "lat" : -33.8677371,
             "lng" : 151.2016936
          },
          "viewport" : {
             "northeast" : {
                "lat" : -33.86637842010727,
                "lng" : 151.2031597798928
             },
             "southwest" : {
                "lat" : -33.86907807989272,
                "lng" : 151.2004601201073
             }
          }
       },
       "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
       "name" : "Sydney Harbour Dinner Cruises",
       "opening_hours" : {
          "open_now" : false
       },
       "photos" : [
          {
             "height" : 2459,
             "html_attributions" : [
                "\u003ca href=\"https://maps.google.com/maps/contrib/109764923610545394994\"\u003eA Google User\u003c/a\u003e"
             ],
             "photo_reference" : "CmRaAAAAn7cDrPqIki6uE4rDzRmh_BDbJjK6DMtT66gMX_CbOs7zQso4_NrvQMZHk_pcdNSQXNmw2p8UePdvozr-D5gGXpzR0EKOknJkglcS0FyXyljZVVlZy8sl60yIZOv84XW5EhCGFiPQR4wZLRcnxSXeeGmzGhQWZDDFYNsphntG4lLjjlRDN1GHKQ",
             "width" : 2500
          }
       ],
       "place_id" : "ChIJM1mOVTS6EmsRKaDzrTsgids",
       "plus_code" : {
          "compound_code" : "46J2+WM Sydney, New South Wales",
          "global_code" : "4RRH46J2+WM"
       },
       "rating" : 4.5,
       "reference" : "ChIJM1mOVTS6EmsRKaDzrTsgids",
       "scope" : "GOOGLE",
       "types" : [
          "tourist_attraction",
          "travel_agency",
          "restaurant",
          "food",
          "point_of_interest",
          "establishment"
       ],
       "user_ratings_total" : 4,
       "vicinity" : "32 The Promenade, Sydney"
    },{
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : -33.8587323,
              "lng" : 151.2100055
           },
           "viewport" : {
              "northeast" : {
                 "lat" : -33.85739417010727,
                 "lng" : 151.2112278798927
              },
              "southwest" : {
                 "lat" : -33.86009382989272,
                 "lng" : 151.2085282201073
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/bar-71.png",
        "name" : "Cruise Bar",
        "opening_hours" : {
           "open_now" : false
        },
        "photos" : [
           {
              "height" : 575,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/112582655193348962755\"\u003eA Google User\u003c/a\u003e"
              ],
              "photo_reference" : "CmRaAAAAoP5GK5krYiyEDJ0IQxmVDfG2LzA_Yo9VZ1PS2wEyDABLBD_4niGEfSEdGIQFj17lMdl94SbQcDMBk8TuURRlgqutSPLES2HUOfI5fKQxKgwkdfllWChi-Cn4iXBc56uNEhCUl12EeKPOkgx-Agc9cEscGhSuu2FaOLI1DKHEnWJSmwgu6UOgzg",
              "width" : 766
           }
        ],
        "place_id" : "ChIJi6C1MxquEmsR9-c-3O48ykI",
        "plus_code" : {
           "compound_code" : "46R6+G2 The Rocks, New South Wales",
           "global_code" : "4RRH46R6+G2"
        },
        "price_level" : 2,
        "rating" : 4,
        "reference" : "ChIJi6C1MxquEmsR9-c-3O48ykI",
        "scope" : "GOOGLE",
        "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 1047,
        "vicinity" : "Level 1, 2 and 3, Overseas Passenger Terminal, Circular Quay W, The Rocks"
     },
     {
        "business_status" : "OPERATIONAL",
        "geometry" : {
           "location" : {
              "lat" : -33.8677371,
              "lng" : 151.2016936
           },
           "viewport" : {
              "northeast" : {
                 "lat" : -33.86637842010727,
                 "lng" : 151.2031597798928
              },
              "southwest" : {
                 "lat" : -33.86907807989272,
                 "lng" : 151.2004601201073
              }
           }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
        "name" : "Sydney Harbour Dinner Cruises",
        "opening_hours" : {
           "open_now" : false
        },
        "photos" : [
           {
              "height" : 2459,
              "html_attributions" : [
                 "\u003ca href=\"https://maps.google.com/maps/contrib/109764923610545394994\"\u003eA Google User\u003c/a\u003e"
              ],
              "photo_reference" : "CmRaAAAAn7cDrPqIki6uE4rDzRmh_BDbJjK6DMtT66gMX_CbOs7zQso4_NrvQMZHk_pcdNSQXNmw2p8UePdvozr-D5gGXpzR0EKOknJkglcS0FyXyljZVVlZy8sl60yIZOv84XW5EhCGFiPQR4wZLRcnxSXeeGmzGhQWZDDFYNsphntG4lLjjlRDN1GHKQ",
              "width" : 2500
           }
        ],
        "place_id" : "ChIJM1mOVTS6EmsRKaDzrTsgids",
        "plus_code" : {
           "compound_code" : "46J2+WM Sydney, New South Wales",
           "global_code" : "4RRH46J2+WM"
        },
        "rating" : 4.5,
        "reference" : "ChIJM1mOVTS6EmsRKaDzrTsgids",
        "scope" : "GOOGLE",
        "types" : [
           "tourist_attraction",
           "travel_agency",
           "restaurant",
           "food",
           "point_of_interest",
           "establishment"
        ],
        "user_ratings_total" : 4,
        "vicinity" : "32 The Promenade, Sydney"
     }]

export default ResultsContainer;