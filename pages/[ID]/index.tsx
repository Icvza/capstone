import { GetStaticPaths, GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";
import { ImFacebook2, ImLocation } from "react-icons/im"; 
import { GrInstagram } from "react-icons/gr";
import { IoArrowBackCircle } from "react-icons/io5";

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

  const selectedTimes = Array.from(placeTimes).filter(function (t: any) {
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
<main className="relative w-full mx-auto bg-white bg-center bg-no-repeat max-w-7xl g-cover">
  <div className="relative">
    <div className=" top-3 left-3">
      <button className="h-10 px-3 text-xs duration-300 ease-in-out bg-white rounded-full">
        <IoArrowBackCircle />
      </button>
    </div>
<div className="p-6 bg-white rounded-md shadow-md">
  <img className="w-full rounded-2xl" src={place.card_img} alt="Place Image" />
  <div className="pt-4">
    <p className="mb-2 text-sm text-gray-600">{place.area}</p>
    <h2 className="text-xl font-bold text-teal-600">{place.nombre}</h2>
    <p className="mb-2 text-teal-600">{place.telefono}</p>
    <p className="mb-2 text-gray-700">{place.direccion}</p>
    <p className="mb-2 text-gray-700">
      Google Ratings: {place.rating}
    </p>
    <p className="mb-4 text-gray-700">
      Description:
      <br />
      {place.descripcion}
    </p>
    <div className="flex items-center">
      <p className="mr-3 text-gray-600">Follow us on: </p>
      <ImFacebook2 className="w-5 h-5 mr-3"/>
      <GrInstagram className="w-5 h-5"/>
    </div>
    <p className="mb-2 text-gray-600">{place.extras}</p>
    <p className="text-gray-600">{place.detalles}</p>
  </div>
</div>
</div>
      </main>


)}
