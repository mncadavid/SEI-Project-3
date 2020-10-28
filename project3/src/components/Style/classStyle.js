import { makeStyles } from '@material-ui/core/styles';

const classStyles = makeStyles((theme) => ({
    // root: {
    //   flexGrow: 1
    // },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
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
    loginModal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginBox: {
        background: 'white',
        border: '1px solid black',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
    },
    loginForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    tripBarHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
        alignItems: 'center',
        paddingTop: '10px'
    },
    tripAppBar: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    formInput: {
        margin: '10px 0 !important',
        width: '35ch'
    },
    loginHeader: {
        width: '80%',
        background: theme.palette.primary.main,
        borderRadius: '15px',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        padding: '10px'
    },
    submitButton: {
        marginTop: '10px !important',
        marginBottom: '15px !important'
    }
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
    }
}));

export default classStyles;