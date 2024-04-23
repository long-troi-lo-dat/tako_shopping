import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faInstagram,
    faPinterest,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div id="footer">
            <div className="socials-list">
                <a href="/#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="/#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="/#"><i className="ti-"></i></a>
                <a href="/#"><FontAwesomeIcon icon={faPinterest} /></a>
                <a href="/#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="/#"><i className="ti-linkedin"></i></a>
            </div>
            <p className="copyright">Powered by <a href="/#">me</a></p>
        </div>
    )
}

export default Footer