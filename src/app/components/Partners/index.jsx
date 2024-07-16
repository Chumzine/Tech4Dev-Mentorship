import { partners } from "./info";
import { ReactComponent as ActiveEllipse } from '../../assets/icons/ellipse-1.svg';
import { ReactComponent as InactiveEllipse } from '../../assets/icons/ellipse-2.svg';

export const BusinessPartners = () => {
    const renderPartners = (type) => {
        if (type.icon) return <type.icon />;
        return null
    }
    return (
        <section>
            <h4>Business Partners</h4>
            <div>
                {
                    partners.map(renderPartners)
                }
            </div>
            <div className=''>
                    <ActiveEllipse />
                    <InactiveEllipse />
                    <InactiveEllipse />
                    <InactiveEllipse />
                </div>
        </section>
    )
}