import "../Style/Landingpage.css";
import Landingbutton from "./Landingbutton";
function Landingpage() {
  return <div className="Landing">
    <div className="misty">
        <img className="imgmisty" src="image/misty.png" alt="" />
    </div>
    <div className="ingresar">
      <p>Descubre este maravilloso pokémundo</p>
      <Landingbutton/>
    </div>
    <div className="ash">
      <img className="imgash" src="image/ash.png" alt="ash" />
    </div>
  </div>;
}

export default Landingpage;
