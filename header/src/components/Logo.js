import React from 'react';

const logoStyles = {
    border: '1px solid #bbb',
    borderRadius: '10px',
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginRight: '50px',
    alignItems: 'center',
    height: '130px',
    width: '120px',
};

export const Logo = () => {
    return (
        <div style={logoStyles}>
            <h2 style={{fontWeight: 100, margin: 0, padding: 0, marginLeft: '0px'}}>A</h2>
            <h1 style={{fontWeight: 100, margin: 0, padding: 0, marginLeft: '20px'}}>Cool</h1>
            <h3 style={{fontWeight: 100, margin: 0, padding: 0, marginRight: '20px'}}>Logo</h3>
        </div>
    );
};
