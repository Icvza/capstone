import { useRouter } from "next/router";

export default function Index(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push(`/` + props.id);
  }
  return (
    <div className="w-full p-2 shadow-2xl rounded-3xl sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4">
      <p className="p-2 text-xl font-bold tracking-wide text-center text-black">
        {props.nombre}
      </p>
      <div className="relative">
        <img
          alt="image"
          src={props.card_img}
          className="bg-center bg-cover shadow-lg rounded-3xl"
        />
        <button
          className="absolute px-2 py-1 font-bold text-white transition-all duration-300 ease-in-out bg-blue-500 right-2 rounded-3xl bottom-2 hover:bg-blue-700"
          onClick={showDetailsHandler}
        >
          {" "}
          Show Details
        </button>
      </div>
    </div>
  );
}
