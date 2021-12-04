import './index.css';
import { ReactComponent as PaymentLogo1 } from '../../assets/send money.svg';
import { ReactComponent as PaymentLogo2 } from '../../assets/send money-1.svg';
import { ReactComponent as PaymentLogo3 } from '../../assets/send money-2.svg';
import { ReactComponent as PaymentLogo4 } from '../../assets/send money-3.svg';
import { ReactComponent as PaymentLogo5 } from '../../assets/send money-4.svg';
import { ReactComponent as PaymentLogo6 } from '../../assets/send money-5.svg';
import Navigation from '../Navigation';
function Landing() {
    return (
        <div className="landing">
            <Navigation />
            <div className="landing-content">
                <div className="intro">
                    <p className="introduction">Say Jambo, to seamless and secure payments</p>
                    <p className="intro-desc">Discover the easiest way to manage your finances. Save, invest, send and receive money with no limits.</p>
                    <div className="action-buttons">
                        <button className="action-button signup">Sign Up</button>
                        <button className="action-button login">Login</button>

                    </div>
                </div>
                <div className="bill-payments">
                    <p className="payments-title">Bill Payments</p>
                    <div className="payment-logos">
                        <PaymentLogo1 className="payment-logo" />
                        <PaymentLogo2 className="payment-logo" />
                        <PaymentLogo3 className="payment-logo" />
                        <PaymentLogo4 className="payment-logo" />
                        <PaymentLogo5 className="payment-logo" />
                        <PaymentLogo6 className="payment-logo" />
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Landing;