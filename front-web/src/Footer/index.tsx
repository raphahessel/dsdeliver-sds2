import './styles.css'
import {ReactComponent as YouTubeIcon} from './youtube.svg'
import {ReactComponent as LinkedinIcon} from './linkedin.svg'
import {ReactComponent as InstagramIcon} from './instagram.svg'

function Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido 
            durante a 2ª ed. do 
            evento Semana DevSuperior
            <div className="footer-icons">
                <a href="" target="_new">
                    <YouTubeIcon></YouTubeIcon>
                </a>
                <a href="" target="_new">
                    <LinkedinIcon></LinkedinIcon>
                </a>
                <a href="" target="_new">
                    <InstagramIcon></InstagramIcon>
                </a>
            </div>
        </footer>
    )
}

export default Footer