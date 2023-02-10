import { useParams} from "react-router-dom";



export default function Response(){
    const { id } = useParams();

    return(
        parseInt(id) === 1 ? <p>Bonne réponse !</p>: <p>Mauvaise réponse !</p>

    )
}