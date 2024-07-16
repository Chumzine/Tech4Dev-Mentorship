import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import FamilyPix from '../../assets/img/family-pix.png';
import { LuPhone } from "react-icons/lu";
import { ReactComponent as Line } from '../../assets/icons/line-1.svg';
import { FaFacebookF, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { ReactComponent as CarIcon } from '../../assets/icons/car.svg';
import { BiHomeAlt } from "react-icons/bi";
import { ReactComponent as ActiveEllipse } from '../../assets/icons/ellipse-1.svg';
import { ReactComponent as InactiveEllipse } from '../../assets/icons/ellipse-2.svg';
import { CustomButton } from '../Button';
import { Navigation } from '../Hero/navigation';
import style from './style.module.css';

export const Hero = () => {
    return (
        <section>
            <div className={style.header}>
                <div>
                    <Logo />
                </div>
                <div className={style.nav}>
                    <Navigation />
                </div>
                <div className={style.search}>
                    <div>
                        <HiMiniMagnifyingGlass color='#ED017F'/>
                    </div>
                    <div>
                        <CustomButton className={style.btn}>iSERVICE</CustomButton>
                    </div>
                </div>
            </div>
            <div className={style.hero}>
                <div className={style.heroContent}>
                    <h1>Chase Your <br />
                        Dream with us</h1>
                    <p>The harder you work for something, the greater <br />
                        you’ll feel when you achieve it.</p>
                    <div>
                        <CustomButton>Apply Online</CustomButton>
                        <CustomButton>Loan Calculator</CustomButton>
                    </div>
                    <div>
                        <LuPhone />
                        <h5>16519</h5>
                        <Line />
                        <FaFacebookF />
                        <FaYoutube />
                        <FaLinkedin />
                        <FaInstagram />
                    </div>
                </div>
                <div className={style.background}></div>
            </div>
            <img className= {style.pix} src={FamilyPix} alt="A cute family of 4" />
            <CustomButton className>
                <CarIcon /> &nbsp; Car Loan 
            </CustomButton>
            <CustomButton className>
                <BiHomeAlt /> &nbsp; Home Loan
            </CustomButton>
            <div className=''>
                <ActiveEllipse />
                <InactiveEllipse />
                <InactiveEllipse />
                <InactiveEllipse />
            </div>
        </section>
    )
}