import { useRouter } from "next/router";

export default function index(props: any) {
  const router = useRouter();
  function showDetailsHandler() {
    router.push(`/` + props.id);
  }
  return (
    <div>
      <p>{props.nombre}</p>
      <img src={props.card_img} />
      <button onClick={showDetailsHandler}>Show Details</button>
    </div>
  );
}
