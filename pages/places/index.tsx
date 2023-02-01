import React from "react";
import PlaceCard from "../../components/PlaceCard";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/getPlaces"); // /api/backend endpoint
  const placeDetails = await res.json();
  console.log(placeDetails);
  return {
    props: { place: placeDetails }, // will be passed to the page component as props
  };
}

export default function ({ place }: any) {
  return (
    <ul>
      {place.map((p: any) => (
        <PlaceCard
          key={p.id}
          id={p.id}
          nombre={p.nombre}
          card_img={p.card_img}
        />
      ))}
    </ul>
  );
}
