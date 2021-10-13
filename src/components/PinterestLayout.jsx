import React from 'react';
import PinCard from './PinCard';
import '../App.css';

const PinterestLayout = () => {
  return (
    <div style={_stylesLayout.pin_container} className='fondo'>
      <PinCard size='small' image='https://picsum.photos//300/300'/>
      <PinCard size='medium' image='https://picsum.photos//350/390'/>
      <PinCard size='large' image='https://picsum.photos//400/500'/>
      <PinCard size='small' image='https://picsum.photos//280/290'/>
      <PinCard size='medium' image='https://picsum.photos//334/402'/>
      <PinCard size='large' image='https://picsum.photos//420/510'/>
      <PinCard size='small' image='https://picsum.photos//286/300'/>
      <PinCard size='medium' image='https://picsum.photos//335/405'/>
      <PinCard size='large' image='https://picsum.photos//415/480'/>
      <PinCard size='small' image='https://picsum.photos//302/285'/>
      <PinCard size='medium' image='https://picsum.photos//348/406'/>
      <PinCard size='large' image='https://picsum.photos//420/520'/>
      <PinCard size='small' image='https://picsum.photos//305/279'/>
      <PinCard size='medium' image='https://picsum.photos//369/397'/>
      <PinCard size='large' image='https://picsum.photos//502/480'/>
      <PinCard size='small' image='https://picsum.photos//300/298'/>
      <PinCard size='medium' image='https://picsum.photos//389/400'/>
      <PinCard size='large' image='https://picsum.photos//410/534'/>
      <PinCard size='small' image='https://picsum.photos//289/283'/>
      <PinCard size='medium' image='https://picsum.photos//369/385'/>
      <PinCard size='large' image='https://picsum.photos//502/473'/>
      <PinCard size='small' image='https://picsum.photos//300/301'/>
      <PinCard size='medium' image='https://picsum.photos//389/403'/>
      <PinCard size='large' image='https://picsum.photos//410/520'/>
    </div>
  );
};

const _stylesLayout = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: '98%',
    backgroundColor: 'white',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gridAutoRows: '10px',
    justifyContent: 'center',
  },

};

export default PinterestLayout;
