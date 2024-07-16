import { ReactComponent as ArrowCircleIcon } from '../../assets/icons/arrow-circle-right.svg';
import Savings from '../../assets/img/Image1.png';
import SkyDiving from '../../assets/img/Image2.png';
import PiggyBank from '../../assets/img/Image3.png';
import Auto from '../../assets/img/Image4.png';
import style from './style.module.css';

export const IPDCServices = () => {
    return (
        <section>
            <h3>Our Services</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.</p>
            <div>
                <div>
                    <img className= {style.save} src={Savings} alt="A shoot in a plastic cup with coins" />
                    <div>
                        <h4>IPDC SAVING SCHEMES</h4>
                        <ArrowCircleIcon />
                    </div>
                </div>
                <div>
                    <img className={style.sky} src={SkyDiving} alt="A person with a parachute in the air" />
                    <div>
                        <h4>IPDC Personal loan</h4>
                        <ArrowCircleIcon />
                    </div>
                </div>
                <div>
                    <img className={style.piggy} src={PiggyBank} alt="A piggybank with coins on a surface" />
                    <div>
                        <h4>IPDC Deposit schemes</h4>
                        <ArrowCircleIcon />
                    </div>
                </div>
                <div>
                    <img className={style.auto} src={Auto} alt="A car in a side street" />
                    <div>
                        <h4>IPDC auto 
                        loan</h4>
                        <ArrowCircleIcon />
                    </div>
                </div>
            </div>
        </section>
    )
}