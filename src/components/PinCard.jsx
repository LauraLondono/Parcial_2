import React from 'react';
import '../App.css';

const PinCard = (props) => {

  const hoverPin = (e) => {
    e.target.style.opacity = '1';
    e.target.style.backgroundColor = 'rgba(0,0,0,0.5)';
  }

  const notHoverPin = (e) => {
    e.target.style.opacity = '0';
    e.target.style.backgroundColor = 'rgba(0,0,0,0)';
  }

  const hoverGuardar = (e) => {
    e.target.style.backgroundColor = '#b5001c';
  }

  const notHoverGuardar = (e) => {
    e.target.style.backgroundColor = '#e60023';
  }

  const hoverButton = (e) => {
    e.target.style.opacity = '1';
  }

  const notHoverButton = (e) => {
    e.target.style.opacity = '0.8';
  }

  return (
    <div
      className='card'
      style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size] }}
    >
      <img src={props.image} alt="" style={{ ..._stylesPinCard.image }} />

      {/* <ButtonsPinCard/> */}
      <div style={{ ..._stylesPinCard.buttons }} onMouseEnter={hoverPin} onMouseLeave={notHoverPin}>
        <button className='btnGuardar' style={{ ..._stylesPinCard.buttons.buttonGuardar }} onMouseEnter={hoverGuardar} onMouseLeave={notHoverGuardar}>Guardar</button>
        <button style={{ ..._stylesPinCard.buttons.button1 }} onMouseEnter={hoverButton} onMouseLeave={notHoverButton}>
          <svg className='btn1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ ..._stylesPinCard.buttons.svg }}>
            <path d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
          </svg>
        </button>
        <button style={{ ..._stylesPinCard.buttons.button2 }} onMouseEnter={hoverButton} onMouseLeave={notHoverButton}>
          <svg className='btn2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ ..._stylesPinCard.buttons.svg }}>
            <path d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z" />
          </svg>
        </button>
      </div>

      <div style={{ ..._stylesPinCard.descrip }} >
        <span style={{ ..._stylesPinCard.descrip.text }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </span>
        <div style={{ ..._stylesPinCard.profile }}>
          <img src='https://picsum.photos/200' alt="" style={{ ..._stylesPinCard.profile.img }} />
          <span style={{ ..._stylesPinCard.profile.user }}>User1234</span>
        </div>

      </div>
    </div>
  );
};


const _stylesPinCard = {
  pin_card: {
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
    backgroundColor: 'white',
    borderStyle: 'none',
    position: 'relative',
    cursor: 'zoom-in',
    display: 'grid',
    // gridTemplateColumns: '1fr',
    aligItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },

  small: {
    gridRowEnd: 'span 32',
  },

  medium: {
    gridRowEnd: 'span 38',
  },

  large: {
    gridRowEnd: 'span 45',
  },

  image: {
    width: '100%',
    height: '100%',
    padding: '0',
    borderStyle: 'none',
    borderColor: 'transparent',
    borderRadius: '16px',
    zIndex: '1',
    gridColumn: '1/2',
    gridRow: '1/2'
  },

  buttons: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0)',
    opacity: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius:'16px',
    zIndex: '10',
    gridColumn: '1/2',
    gridRow: '1/2',

    buttonGuardar: {
      position: 'absolute',
      top: '27px',
      left: '78%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '25px',
      borderStyle: 'none',
      cursor: 'pointer',
      backgroundColor: '#e60023',
      color: 'white',
      padding: '10px',
      fontSize: '15px',
      fontWeight: 'bold',

    },

    button1: {
      display: 'flex',
      position: 'absolute',
      top: '70%',
      left: '70%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      height: '25px',
      width: '25px',
      backgroundColor: 'white',
      opacity:'0.8'
    },

    button2: {
      display: 'flex',
      position: 'absolute',
      top: '70%',
      left: '87%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      height: '25px',
      width: '25px',
      backgroundColor: 'white',
      opacity:'0.8'
    },
    svg: {
      height: '25px',
      width: '25px',
    }
  },

  descrip: {
    backgroundColor: 'white',
    display: 'flex',
    borderStyle: 'none',
    flexFlow: 'column',
    justifyContent: 'space-evenly',
    height: '100%',
    width: '100%',
    borderRadius: '16px',
    zIndex: '1',

    text: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: 1,
      WebkitBoxOrient: 'vertical',
      paddingLeft: '10px',

    },
  },

  profile: {
    display: 'flex',
    flexFlow: 'row',
    height: '30%',
    paddingLeft: '10px',
    paddingBottom: '10px',
    borderStyle: 'none',

    img: {
      height: '20px',
      width: '20px',
      display: 'flex',
      justifyContent: 'flex-start',
      borderRadius: '50%',
    },

    user: {
      paddingLeft: '10px',
    },
  },
};

export default PinCard;
