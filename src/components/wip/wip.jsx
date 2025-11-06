import './wip.css'
import lost from '../../assets/The_Lost_(Level_Transition).png'

function WIP() {
    return ( 
    <section id="wip" className="wip">
        <div className="img-container">
            <img src={lost} alt="wip" />
        </div>
    </section>
    );
};

export default WIP;