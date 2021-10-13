import React from 'react';
import useWindowSize from "./useWindowSize";
import Header1 from "./Header1";
import Header2 from "./Header2";


const HeaderLayout = () => { 

  const { width } = useWindowSize();

  return (
    <div style={{ ..._stylesHeader.header }}>
    {/* Iphone x */}
    {width < 500 && (
      <>
      <Header2/>
      </>
    )}
    {/* visible at any window size */}
    {width > 500 && (
      <>
      <Header1/>
      </>
    )}
    
  </div>

  );
};

 const _stylesHeader = {
   header: {
     height: '80px',
     width:'100%',
     display: 'flex',     
     justifyContent: 'space-evenly',
     alignItems: 'center',
   },
  
 };

export default HeaderLayout;
