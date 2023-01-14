import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "650px",
};

const center = {
  //default cordination
  lat: 32.106171,
  lng: 34.815309,
};

interface cordination{
  lat :number,
  lng : number
}

interface Props {
  markers :cordination[] ;
}


function MyComponent({ markers}: Props ) {

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCdLktCDVj-ggxB6cbMH-RYzezXn8WxlsQ",
  });


  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
     {markers.map(marker => (
    <Marker
      position={{ lat: marker.lat, lng: marker.lng }}
      key={marker.lat * marker.lng}
    />
))}
      
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
