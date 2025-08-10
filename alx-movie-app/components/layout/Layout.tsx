import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Layout: React.FC=()=>{

    return(
        <div>
            <h1><FontAwesomeIcon icon={faGithub} /> Hello layout</h1>
        </div>
    )
}

export default Layout;
