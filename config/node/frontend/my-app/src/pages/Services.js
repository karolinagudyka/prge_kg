import React from 'react';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import '../styles/_services.scss';
import komisariat from '../assets/komisariat.jpg';
import mapa from '../assets/mapa.png';
import button from '../assets/button.png';

function Services() {
    return (
        <div className="services">

            <div className="services__header">
                <h1 className="services__title">
                    <div className="title">
                        <span className="geo-portal">GEO</span>
                        <span className="portal">PORTAL</span>
                    </div>

                    <div className="subtitle">
                        <span className="geo-services">GEO</span>
                        <span className="services-text">SERVICES</span>
                    </div>
                </h1>
            </div>


            <div className="services__content">
                <div className="card">
                    <div className="card__top">
                        <div className="card__description">
                        Przeglądaj dostępne placówki jednostek policji
                        </div>

                        <div className="custom__button">
                        <Button
                          variant="contained"
                          size="large"
                          component={Link}
                          to="/list"
                          className="custom__button--styled">
                            <span className="custom__button-text">Przejdź</span>
                            <img src={button} alt="strzałka" className="custom__button-icon" />
                        </Button>
                        </div>
                    </div>
                    <img src={komisariat} alt="Mapa placówek" className="card__image" />
                </div>


                <div className="card">
                    <div className="card__top">
                        <div className="card__description">
                        Przeglądaj mapy placówek jednostek policji
                        </div>
                        <div className="custom__button">
                        <Button
                          variant="contained"
                          size="large"
                          component={Link}
                          to="/map"
                          className="custom__button--styled">
                            <span className="custom__button-text">Przejdź</span>
                            <img src={button} alt="strzałka" className="custom__button-icon" />
                        </Button>
                        </div>
                        </div>
                      <img src={mapa} alt="Mapa placówek" className="card__image" />
                </div>


                <div className="card">
                    <div className="card__top">
                        <div className="card__description">
                        Dodaj nowego pracownika jednostki policji
                        </div>
                        <div className="custom__button">
                        <Button
                          variant="contained"
                          size="large"
                          component={Link}
                          to="/newUser"
                          className="custom__button--styled">
                            <span className="custom__button-text">Przejdź</span>
                            <img src={button} alt="strzałka" className="custom__button-icon" />
                        </Button>
                      </div>
                        </div>
                      <img src={komisariat} alt="Mapa placówek" className="card__image" />

                </div>
            </div>


        </div>
    );
}

export default Services;