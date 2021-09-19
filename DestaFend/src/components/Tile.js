import './Tile.css'

function Tile({name, description, image, visible}) {

    function handleClick(e) {
        e.preventDefault();
        let color = e.target.style.backgroundColor;
        if(color === "lightgreen") {
            e.target.style.backgroundColor = "red";
            e.target.value = "NV";
        }
        else {
            e.target.style.backgroundColor = "lightgreen";
            e.target.value = "V";
        }
    }
    
    return (
        <>
            <div className="container">
                <div className="backgroundImage">
                    <img src={"data:image;base64,"+{image}.image} alt="backgroundPhoto" class="bg" />
                </div>
                <div className="businessName">
                    <span class="name">{name} </span>
                    <input type="button" value="NV" style={{backgroundColor:"red"}}
                     onClick={e => handleClick(e)}
                     className="visibilityButton" 
                    />

                    
                </div>
                <div className="description">
                    {description}
                </div>
                
            </div>
        </>
    );
}
export default Tile;