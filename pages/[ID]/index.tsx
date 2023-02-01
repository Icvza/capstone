import { GetStaticPaths, GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/getPlaces"); // /api/backend endpoint
  const places = await res.json();

  return {
    paths: places.map((place: any) => {
      return {
        params: {
          ID: place.id.toString(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch("http://localhost:3000/api/getPlaces"); // /api/backend endpoint
  const placeDetails = await res.json();

  const result = await fetch(`http://localhost:3000/api/getTimes`); // /api/backend endpoint
  const placeTimes = await result.json();
  //   console.log(placeTimes);

  let selectedTimes = placeTimes.filter(function (t: any) {
    return t.id_lugar == params?.ID;
  });
  //   console.log(selectedTimes);

  //   if (!placeDetails) {
  //     return {
  //       notFound: true,
  //     };
  //   }

  return {
    //being selected by place in Array -1 to equal it's
    props: {
      place: placeDetails[Number(params?.ID) - 1],
      time: selectedTimes,
    }, // will be passed to the page component as props
  };
};

export default function PlaceDetails({
  place,
  time,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>{place.nombre}</h1>
      <p>{place.categoria}</p>
      <p>{place.area}</p>
      <img src={place.card_img} />
      <img src={place.hero_img} />
      <p>{place.rating}</p>
      <p>{place.extras}</p>
      <p>{place.detalles}</p>
      <p>{place.telefono}</p>
      <p>{place.descripcion}</p>
      <address>{place.direccion}</address>
      <a href={place.mapa_url}>
        <button>Dirección</button>
      </a>
      {time.length ? <h2>Horario</h2> : <div></div>}
      {time.map((t: any) => (
        <div key={t.id}>
          <p>{t.dia}</p>
          <p>{t.horario_apertura}</p>
          <p>{t.horario_cierre}</p>
        </div>
      ))}
    </div>
  );
}
