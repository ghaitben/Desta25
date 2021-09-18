import './Tile.css'

function Tile() {
    return (
        <>
            <div className="container">
                <div className="backgroundImage">
                    <img src={require("./img.png").default} alt="img" className="bg" />
                </div>
                <div className="businessName">
                    <span class="name">Business Name</span>
                </div>
                <div className="description">
                    Hi there this is my business and I will be smqkdssq 

                </div>
            </div>
        </>
    );
}
export default Tile;