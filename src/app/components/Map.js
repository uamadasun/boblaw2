"use client";
import React, { useMemo } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  MarkerF,
} from "@react-google-maps/api";

export default function LoadMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
  });

  if (!isLoaded)
    return (
      <div>
        <p className="">Loading...</p>
      </div>
    );

  return <Map />;
}

function Map() {
  const center = useMemo(
    () => ({ lat: 34.084393888559994, lng: -84.54617894464224 }),
    []
  );
  return (
    <div className="w-full  mx-auto">
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerClassName="map-container"
      >
        <MarkerF
          position={center}
        />
      </GoogleMap>
    </div>
  );
}
