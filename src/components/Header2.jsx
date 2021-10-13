import React from 'react';

const Header2 = (props) => {
    const hover = (e) => {
        e.target.style.borderBottom='4px solid black';
    }

    const noHover = (e) => {
        // e.target.style.backgroundColor = 'transparent';
        e.target.style.borderBottom='4px solid white';
    }


    return (
        <div style={{ ..._stylesHeader2.header }} onMouseEnter={hover} onMouseLeave={noHover}>
            <button style={{ ..._stylesHeader2.button }}>Para ti</button>
            <button style={{ ..._stylesHeader2.button }}>Hoy</button>
            <button style={{ ..._stylesHeader2.button }}>Recetas</button>            
        </div>

    );
};


const _stylesHeader2 = {
    header: {
      width:'100%',
      display: 'flex',
      padding: '10px',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },

    button:{
      cursor: 'pointer',
      display: 'flex',
      height: '30px',
      width: '75px',
      color: 'black',
      backgroundColor:'transparent',
      borderStyle: 'none',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: '20px'
    }

  };

export default Header2;