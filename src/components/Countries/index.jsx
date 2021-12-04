import './index.css';
import Kenya from "../../assets/Flag_of_Kenya.png"
import Uganda from "../../assets/Flag_of_Uganda.svg.png"
import Rwanda from "../../assets/Flag_of_Rwanda.svg.png"
import Tanzania from "../../assets/Flag_of_Tanzania.svg.png"

const Countries = () => {
    return (
        <div className="countries">
            <p className="countries-title">
            Present in 4 countries today, more coming soon
            </p>
            <div className="flags">
                <img className="flag" src={Kenya} alt="Flag of Kenya" />
                <img className="flag" src={Uganda} alt="Flag of Uganda" />
                <img className="flag" src={Rwanda} alt="Flag of Rwanda" />
                <img className="flag" src={Tanzania} alt="Flag of Tanzania" />
            </div>
        </div>
    );
}

export default Countries;