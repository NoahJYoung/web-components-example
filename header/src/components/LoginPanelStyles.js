export const loginStyles = {
    panelContainer: {
        fontFamily: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        padding: '5px',
        justifyContent: 'space-evenly',
        height: '150px',
        width: '200px',
    },
    loginForm: {
        display: 'flex',
        padding: '5px',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '150px',
        width: '200px',
    },
    button: {
        fontFamily: 'inherit',
        cursor: 'pointer',
        color: 'white',
        background: '#0390fc',
        border: 'none',
        height: '25px',
        transition: 'background 0.3s',
        '&:hover': {
            background: '#03adfc',
            transition: 'background 0.3s',
          }
    },
    label: {
        fontSize: '0.8rem'
    },
    input: {
        fontFamily: 'inherit'
    }
};
