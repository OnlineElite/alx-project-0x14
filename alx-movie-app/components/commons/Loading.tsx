import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Loading: React.FC=()=>{

    return(
        <div>
            <h1><FontAwesomeIcon icon={faGithub} /> Hello Loading</h1>
        </div>
    )
}

export default Loading;
