import { FaFacebookF, FaYoutube, FaLinkedin, FaInstagram  } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { aboutMenu, getStartedMenu, productsMenu } from "./data";
import style from './style.module.css';

export const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <h5>About the company</h5>
                    <p>Learn To Love Growth <br />
                    And Change And You Will <br />
                    Be A Success. Microsoft <br />
                    Patch </p>
                    <div>
                        <FaFacebookF />
                        <FaYoutube />
                        <FaLinkedin />
                        <FaInstagram />
                    </div>
                </div>
                <div>
                <Menu title="Products" options={productsMenu} />
                <Menu title="Get Started" options={getStartedMenu} />
                <Menu title="About" options={aboutMenu} />
                </div>
            </div>
            <div>
                <LuPhone />
                <h5>16519</h5>
            </div>
        </footer>
    )
}

export const Menu = ({title, options}) => {
    return (
        <nav className={style.nav}>
            <h5>{title}</h5>
            <ul>
            {
                options.map((option)=>{
                    return (<li><a href={option.url}>{option.name}</a></li>)
                })
            } 
            </ul>  
        </nav>
    )
}