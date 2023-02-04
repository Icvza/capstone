



import { useRouter } from 'next/router';

export default function index(props) {
    
    const router = useRouter();

    function showDetailsHandler() {
        router.push(`/` + props.id);
    }
    return (
        <div>
            <p>{props.nombre}</p>
            <img alt='image' src={props.card_img} />
            <button onClick={showDetailsHandler}>Show Details</button>
        </div>
    );
}