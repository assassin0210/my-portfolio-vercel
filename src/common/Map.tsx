import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const location = {
  address: "Tiraspol 3300, Moldova",
  lat: 46.844137,
  lng: 29.613994,
};
export const Map = () => (
  <Wrapper>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyDrEWOIhhdDXpaOMaPVsHqnf7AOreDZ0OY" }}
      defaultCenter={location}
      defaultZoom={12}
    />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
`;
