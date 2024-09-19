import './card.css'
import airIcon from '../assets/images/air-icon.svg'

function Card(){
    return(


<div className="flight-card">
<div className="flight-details">
    <div className="going-on">
        <img src={airIcon} alt="logo" />
        <div className="going-details">
            <div className="going-from">
                <span className="loc-to tag-line">Air Berlin Airlines</span>
                <span className="loc-to">Loss Angeles</span>
            </div>
            <i className="locations-icon"></i>
            <div className="going-to">
                <span className="loc-to">Miami</span>
            </div>
        </div>
    </div>
    <div className="all-details">
        <div className="flight-time left-block">
            <span className="time-on">LAX - 21:30</span>
            <span className="loc-go">Loss Angeles</span>
            <span className="date-go">Mon, 24 July 2023</span>
        </div>
        <div className="total-time">
            <i className="go-icon"></i>
            <span className="time-show">5hrs 35 min</span>
        </div>
        <div className="flight-time right-block">
            <span className="time-on">MIA - 21:30</span>
            <span className="loc-go">Miami</span>
            <span className="date-go">Mon, 24 July 2023</span>
        </div>
    </div>
</div>
<div className="flight-price">
    <span className="price-show">$ 879</span>
    <a href="#" className="btn">Search</a>
</div>
</div>
    )
}

export default Card