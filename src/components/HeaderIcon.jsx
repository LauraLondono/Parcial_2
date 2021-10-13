import React from 'react';
import '../App.css';

const buttonsHover = (e) => {
    e.target.style.backgroundColor = '#efefef';
    e.target.style.borderRadius= '50%';
}

const buttonsNoHover = (e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.borderRadius= '0';
}

const HeaderLogo = (props) => {
    return (
        <div >
            {/* Pinterest logo */}
            <div style={{ ..._stylesLayout.btn }} onMouseEnter={buttonsHover} onMouseLeave={buttonsNoHover}>
                <svg xmlns={props.svgUrl} viewBox="0 0 496 512" style={{ ..._stylesLayout.logo }}>
                    <path fill='#e60023'
                        d={props.svgPath}
                    />
                </svg>
            </div>
        </div>
    );
};

const HeaderSearchIcon = (props) => {
    return (
        <div >
            {/* lupa buscar */}
            <div style={{ ..._stylesLayout.btn }}>
                <svg xmlns={props.svgUrl} viewBox="0 0 496 512" style={{ ..._stylesLayout.buscar }}>
                    <path fill='gray'
                        d={props.svgPath}
                    />
                </svg>
            </div>

        </div>
    );
};

const HeaderButtonIcon = (props) => {
    return (
        <div >
            {/* botones notif, mnsjs, perfil*/}
            <div style={{ ..._stylesLayout.btn }} onMouseEnter={buttonsHover} onMouseLeave={buttonsNoHover}>
                <svg className='btnsHeader' xmlns={props.svgUrl} viewBox="0 0 496 512" style={{ ..._stylesLayout.svg }}>
                    <path fill='gray'
                        d={props.svgPath}
                    />
                </svg>
            </div>
        </div>
    );
};

const _stylesLayout = {
    btn: {
        backgroundColor: 'transparent',
        border: 'none',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
    },

    logo: {
        position: 'relative',
        width: '30px',
        height: '30px',
        cursor: 'pointer',
        padding: '5px',
        borderRadius: '50%',
    },

    buscar: {
        position: 'absolute',
        padding: '15px',
        width: '15px',
        height: '15px',
    },

    svg: {
        position: 'relative',
        width: '20px',
        height: '20px',
        padding: '6px',
        cursor: 'pointer',       
    },
};

export { HeaderLogo, HeaderSearchIcon, HeaderButtonIcon };