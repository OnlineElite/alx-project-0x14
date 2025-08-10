import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Header: React.FC=()=>{

    return(
        <div>
            <h1><FontAwesomeIcon icon={faGithub} /> Hello Header</h1>
        </div>
    )
}

export default Header;
