import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

export class map extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", () => {
      mapboxgl.accessToken = "pk.eyJ1IjoidGVjaDE4IiwiYSI6ImNrNjNuNHFnbjA3ZWczcG1wbjhtNjRib3cifQ.rotLOBIUUeo5wcjFokXU5w";
      const map = new mapboxgl.Map({
        container: "map",
        center:[82.12, 22.11],
        style: "mapbox://styles/mapbox/streets-v9",
        zoom:10
      });
      // adding draggable marker 
      var marker = new mapboxgl.Marker({
        draggable: true
        })
        .setLngLat([82.14, 22.07])
        .addTo(map);
      marker.on('dragend',(e)=>{console.log(e.target._lngLat)});
      map.on('click',(e)=>{console.log(e)})
    });
  }
  render() {
    return (
      <div className="section columns is-centred">
        <div className="column">
          <div id="map" style={{maxWidth:"480px",height:"50vh",margin:"0 auto"}}></div>
        </div>
      </div>
    );
  }
}

export default map;
