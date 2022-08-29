export const appStyles = {
    '@keyframes fadeIn': {
        from: {
			opacity: 0,
			paddingLeft: '40px',
		},
		to: {
			opacity: 1,
			paddingLeft: '0',
		},
    },
    app: {
        textAlign: 'center',
        paddingTop: '1em',
        margin: '0 auto',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    h1: {
        fontSize: '4rem',
        fontWeight: '100',
        fontFamily: 'inherit',
        color: '#476af5',
        textTransform: 'uppercase',
        animationDuration: '1s',
        animationName: '$fadeIn',
    },
    h2: {
        fontSize: '2.5rem',
        fontWeight: '100',
        animationDuration: '1.25s',
        animationName: '$fadeIn',
    },
    paragraph: {
        fontWeight: '100',
		fontSize: '1.5em',
		animationDuration: '1.5s',
        animationName: '$fadeIn',
    },
    messageInput: {
        marginTop: '20px',
		textAlign: 'center',
		fontFamily: 'inherit',
		fontSize: '3rem',
		fontWeight: '100',
		width: '10em',
		animationDuration: '2s',
        animationName: '$fadeIn',
    }
};
