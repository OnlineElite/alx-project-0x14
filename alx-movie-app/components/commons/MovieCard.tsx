import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const MovieCard: React.FC=()=>{

    return(
        <div>
            <h1><FontAwesomeIcon icon={faGithub} /> Hello Movie Card</h1>
        </div>
    )
}

export default MovieCard;
