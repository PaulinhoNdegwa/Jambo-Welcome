import './index.css';

const Summary = () => {
    return ( 
        <div className="summary">
            <h1 className="summary-title">Trusted and Secure</h1>
            <hr className="summary-divider"/>
            <div className="statistics">
                <div className="stat">
                    <h1>12+</h1>
                    <p>Years of Experience</p>
                </div>
                <div className="stat">
                    <h1>3500+</h1>
                    <p>Clients</p>
                </div>
                <div className="stat">
                    <h1>1.2M</h1>
                    <p>Subscribers</p>
                </div>
                <div className="stat">
                    <h1>$2B+</h1>
                    <p>Transacted Value</p>
                </div>
                <div className="stat">
                    <h1>32M+</h1>
                    <p>Processed Transactions</p>
                </div>
                <div className="stat">
                    <h1>4</h1>
                    <p>Countries</p>
                </div>
            </div>
            <button className="btn-more">More about JamboPay</button>
        </div>
     );
}
 
export default Summary;