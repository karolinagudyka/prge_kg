    import React from 'react';
    import {Typography, Button} from "@mui/material";
    import {Link} from 'react-router-dom';
    import map from '../assets/map.png';
    import iconImage from '../assets/iconImage.png';

    function Home() {
  return (
    <div className="home">
      <div className="home__left">
          <h1 className="home__title">
              <span className="geo">GEO</span>
              <span className="portal">PORTAL</span>
          </h1>
          <Typography className="home__subtitle">
              Geoportal tematyczny poświęcony policji
        </Typography>
        <Button
          className="home__button"
          variant="contained"
          size="large"
          component={Link}
          to={'services'}
          startIcon={<img src={iconImage} alt="start icon" className="home__icon" />}
        >
          <span className="home__button-text">START</span>
        </Button>
      </div>
      <div className="home__right">
        <img src={map} alt="mapa tła" className="home__map" />
      </div>
    </div>
  );
}


    export default Home;