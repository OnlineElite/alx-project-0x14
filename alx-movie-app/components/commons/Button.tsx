import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Button: React.FC=()=>{

    return(
        <div>
            <h1><FontAwesomeIcon icon={faGithub} /> Hello common Button</h1>
        </div>
    )
}

export default Button;
