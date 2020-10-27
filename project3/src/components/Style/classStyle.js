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
        height: '80vh',
    },
    centerTitle: {
        textAlign: 'center'
    },
    selectionPane: {
        width: '60%'
    },
    tripPane: {
        width: '38%'
    }
}));

export default classStyles;