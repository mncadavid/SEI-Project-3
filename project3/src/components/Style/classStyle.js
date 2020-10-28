import { makeStyles } from '@material-ui/core/styles';


const classStyles = makeStyles((theme) => ({
    // root: {
    //   flexGrow: 1,
    // },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: 'white'
    },
    homePageWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainWrapper: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    searchBarWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        minWidth: '400px',
        alignItems: 'center'
    },
    searchTitle: {
        textAlign: 'center'
    },
    searchBox: {
        width: '30ch'
    },
    resultsPage: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '80vw',
        minWidth: '50rem',
        height: '80vh'
    },
    centerTitle: {
        textAlign: 'center'
    },
    selectionPane: {
        width: '60%',
        height: 'inherit',
        overflow: 'auto'
    },
    tripPane: {
        width: '38%',
        height: 'inherit',
        overflow: 'auto'
    },
    placeCardContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto'
    },
    tripCardContainer: {
        width: '100%',
        overflow: 'auto'
    },
    selectedPlaceCard: {
        display: 'flex',
        alignItems: 'center',
        minHeight: '135px',
        justifyContent: 'space-between',
        padding: '10px 10px'
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 25px',
        backgroundColor: 'lightgrey'
    },
    infoButton: {
        display: 'flex',
        alignItems: 'center',
    },
    placeName: {
        margin: '5px'
    },
    conditionalContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    priceLevel: {
        display: 'flex'
    },
    carouselImage: {
        margin: '0 auto'
    },
    detailedCard: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'solid black 1px',
        minHeight: '50px',
        margin: '5px auto',
        background: 'white',
        position: 'relative',
        borderRadius: '10px',
        boxShadow: '1px 1px 10px 1px black',
        width: '500px',
        height: '700px '
    },
    close: {
        position: 'absolute',
        top: '0',
        right: '0'
    },
    placeCard:{
        display: 'flex',
        alignItems: 'center'
    },
    placeCardInner: {
        width: '50%'
    },
    rating: {
        width: '15%',
        paddingLeft: '20px'
    },

}));

export default classStyles;