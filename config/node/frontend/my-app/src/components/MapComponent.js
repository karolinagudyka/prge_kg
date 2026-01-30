import {React, useEffect, useRef} from 'react';
import Map from 'ol/Map';
import TitleLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM'
import View from 'ol/View';
import {useGeographic} from "ol/proj";
import 'ol/ol.css';
import {TileWMS} from 'ol/source';

function MapComponent(props) {
    const mapRef = useRef(null);

    useGeographic()
    useEffect(
        () => {
            const map = new Map({
                target: mapRef.current,
                layers: [
                    new TitleLayer({
                        source: new OSM(),
                    }),
                    new TitleLayer({
                        source: new TileWMS({
                            url: "http://localhost:9000/geoserver/prge/wms?",
                            params: {
                                "LAYERS": "prge:Jednostki podziału administracyjnego",
                                "TITLED": true
                            },
                            serverType: "geoserver",
                            transition: 0
                        })
                    }),
                    new TitleLayer({
                        source: new TileWMS({
                            url: "http://localhost:9000/geoserver/prge/wms?",
                            params: {
                                "LAYERS": "prge:Budynki",
                                "TITLED": true
                            },
                            serverType: "geoserver",
                            transition: 0
                        })
                    }),
                ],
                view: new View({
                    center: [21, 52],
                    zoom: 6,
                })
            })
            return () => map.setTarget(null)
        }, []);
    return (
        <div className="MapComponent" ref={mapRef}
             style={{width: "100%", height: "100%"}}></div>
    );
}
export default MapComponent;
