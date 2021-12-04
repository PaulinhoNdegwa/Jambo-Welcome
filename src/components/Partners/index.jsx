import FamilyBank from '../../assets/FamilY-BAnk.png';
import NCBA from '../../assets/NCBA.png';
import Coop from '../../assets/Coop-bank.png';
import Equity from '../../assets/Equity.png';
import Kasneb from '../../assets/Kasneb-GREY.png';
import Superfoam from '../../assets/SUPERFOAM.png';
import Airtel from '../../assets/Group 4482.png';
import GTB from '../../assets/Group 4481.png';
import Tatu from '../../assets/Group 4480.png';
import KenyaPower from '../../assets/Group 4479.png';
import Posta from '../../assets/Group 4478.png';
import CreditBank from '../../assets/Credit-Bank.png';

import './index.css';

const Partners = () => {
    return (
        <div className="partners">
            <h2>TRUSTED PARTNERS</h2>
            <div className="our-partners">
                <img src={FamilyBank} alt="Family Bank" className="partner-logo" />
                <img src={CreditBank} alt="Credit Bank" className="partner-logo" />
                <img src={NCBA} alt="NCBA" className="partner-logo" />
                <img src={Coop} alt="Coop Bank" className="partner-logo" />
                <img src={Equity} alt="Equity Bank" className="partner-logo" />
                <img src={Kasneb} alt="Kasneb" className="partner-logo" />
                <img src={Superfoam} alt="Superfoam" className="partner-logo" />
                <img src={Posta} alt="Posta Bank" className="partner-logo" />
                <img src={KenyaPower} alt="Kenya Power" className="partner-logo" />
                <img src={Tatu} alt="Tatu" className="partner-logo" />
                <img src={GTB} alt="GTB Bank" className="partner-logo" />
                <img src={Airtel} alt="Airtel Money" className="partner-logo" />
            </div>
        </div>
    );
}

export default Partners;