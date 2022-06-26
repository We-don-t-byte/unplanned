import React, { useState } from 'react';
import Paper from '@mui/material/Paper';


const PlaceCard = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const place  = props;

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <Paper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      elevation={isHovered ? 4 : 1}
      style={{
        padding: '10px',
        margin: '10px',
        width: '300px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      // Image div
      <div style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${place?.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} />
      // Text div
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        padding: '10px',
      }}>
        <h3>{place?.name}</h3>
        <p>{place?.description}</p>

      </div>
    </Paper>
  );
}

export default PlaceCard;
