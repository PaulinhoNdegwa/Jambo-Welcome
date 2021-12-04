import Avatar from '../../assets/60111.jpg';
import './index.css';

const Testimony = () => {
    return (
        <div className="testimony">
            <div className="testimony-images">
                <img src={Avatar} alt="Avatar" className="small-avatar" />
                <img src={Avatar} alt="Avatar" className="large-avatar" />
                <img src={Avatar} alt="Avatar" className="small-avatar" />
                <p>"</p>
                <p>Great experience. Adore JamboPay Loyal, fast and secure!</p>
            </div>
        </div>
    );
}

export default Testimony;