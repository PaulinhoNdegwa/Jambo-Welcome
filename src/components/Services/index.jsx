import './index.css';
import { ReactComponent as Service1 } from '../../assets/Component1.svg';
import { ReactComponent as Service2 } from '../../assets/Component2.svg';
import { ReactComponent as Service3 } from '../../assets/Component3.svg';
import { ReactComponent as Service4 } from '../../assets/Component4.svg';
import { ReactComponent as Service5 } from '../../assets/Component5.svg';


const Services = () => {
    return ( 
        <div className="services">
            <p className="services-title">
            Let's get down to Business
            </p>
            <hr />
            <div className="our-services">
                <Service3 className="service pay-bill" />
                <Service5 className="service" />
                <Service4 className="service" />
                <Service2 className="service" />
                <Service1 className="service" />
            </div>
        </div>
     );
}
 
export default Services;