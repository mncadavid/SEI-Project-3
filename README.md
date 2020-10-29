# SEI-Project-3 : Quarantine N'Dream

## App Idea
Quarantine N'Dream serves as a trip planner where you can organize places you would like to visit on your next trip.  The user inputs the location of their next trip and our app will provide a list of resaurants, museums, and parks nearby that they could visit. The user can then add places to their trip.  Trips can also include multiple destinations.  Any visitor to the app can create a trip, but they must be signed in to save trips.  A authorized user can save trips for viewing at a later time.  They can also create multiple trips.


## MVP
- [x] User input of trip location
- [x] App displays list of places(restaurants, museums, etc.) in that location
- [x] User can add/remove places in the trip
- [x] User can select between restaurant, park and museum categories
- [x] App deployed on Surge
- [ ] Use React Router to move between Restaurant/Park/Museum displays


## Stretch Goals
- [x] Implement Google Firebase
- [x ] User can create multiple trips
- [x] User can create multi-location trips
- [x] Implementing auth so there can be multiple users
- [ ] Add more place types
- [ ] Add days tab to trip
- [ ] Incorporate Google Maps visual into the selection screen
- [x] Utilize styling library - *Material-UI*
- [ ] Draggable - add places to trip
- [x] Details page for each place

## Technologies Used
* React
* React Router
* React Hooks
* [Google Place API](https://developers.google.com/places/web-service/overview)
* [Google Firebase](https://firebase.google.com/)
* [Material-UI](https://material-ui.com/)

## Technical Difficulties
* Managing where data is held, changed, and accessed
* Restructure of data for implementing additional features
* Tricky method of making API calls
* Understanding which data should be passed and where based on use case (e.g, authorized vs unauthorized user, new vs existing trip)

## App Flowchart

![Flowchart](https://i.imgur.com/D9uIfZH.jpg)

## Wireframes

Homepage:
![Homepage](https://i.imgur.com/RS63u8U.jpg)

Results Page:
![Results Page](https://i.imgur.com/3WZlHA3.jpg)

## App Screenshots

![Search Page](https://i.imgur.com/Kpp43IQ.png)
![Log In](https://i.imgur.com/x2nLHMT.png)
![Results Page](https://i.imgur.com/y22BL8O.png)
![Detail Card](https://i.imgur.com/WhiXdH9.png)

