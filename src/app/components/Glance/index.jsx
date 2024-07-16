import { FaArrowRight } from "react-icons/fa";
import MoneyGrowth from '../../assets/img/picture.png';
import style from './style.module.css';

export const Glance = () => {
    return (
        <section>
            <img className= {style.pix} src={MoneyGrowth} alt="A shoot with a bank note wrapped aroung its stem" />
            <div>
                <h3>IPDC AT A GLANCE</h3>
                <p>IPDC Finance Limited (previously known as "Industrial <br />
                Promotion and Development Company of Bangladesh <br />
                Limited") is the first private sector financial institution of <br />
                the country established in 1981 by a distinguished group of <br />
                shareholders namely International Finance Corporation <br />
                (IFC), USA, German Investment and Development <br />
                Company (DEG), Germany, The Aga Khan Fund for <br />
                Economic Development (AKFED), Switzerland, <br />
                Commonwealth Development Corporation (CDC), UK and <br />
                the Government of Bangladesh</p>
                <div>
                    <p>Read More</p>
                    <FaArrowRight />
                </div>
            </div>
        </section>
    );
}