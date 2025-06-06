import './Borough.css';

const Borough = (props) => {
    return (
        <div className = "borough-card">
            <img src = {props.image} alt={`${props.name} image`} />
            <div className = "overlay-text">
                <h2>{props.name}</h2>
            </div>
            <div className = "button-container">
                <button className = "explore-button" onClick = {props.onExplore}>Explore Locations</button>
            </div>
        </div>
    );
}

export default Borough;