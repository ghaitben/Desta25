import './Tile.css'

function Tile({name, description, image}) {
    return (
        <>
            <div className="container">
                <div className="backgroundImage">
                    <img src={"data:image;base64,"+{image}.image} alt="backgroundPhoto" class="bg" />
                </div>
                <div className="businessName">
                    <span class="name">{name}</span>
                </div>
                <div className="description">
                    {description}
                </div>
            </div>
        </>
    );
}
export default Tile;